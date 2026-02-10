import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// import * as THREE from "three"; // Removed for now, using Matter.js Render
import Matter from "matter-js";
import { createPinballPhysics, createBoundaries } from "./physicsSetup";
import { pinballData, PinballKey } from "./pinballData";
import * as S from "./Pinball.styled";

const PinballGame: React.FC = () => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "Ignition") as PinballKey;
  const tableConfig = pinballData[tableKey];

  const mountRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // État du Jeu
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  // Physics refs
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  // Audio Refs (pour les bruitages)
  const bumperAudio = useRef(new Audio(tableConfig.fx?.bumper));
  const flipperAudio = useRef(new Audio(tableConfig.fx?.flipper));
  const launchAudio = useRef(new Audio(tableConfig.fx?.launch));
  const holeAudio = useRef(new Audio(tableConfig.fx?.hole));

  const playSound = (audio: HTMLAudioElement) => {
    if (!muted) {
      audio.currentTime = 0;
      audio.play().catch(e => console.warn("Audio play failed", e));
    }
  };

  /** -------------------------
   * MATTER.JS - Setup & Loop
   * ------------------------- */
  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);
    setLives(3);
    setScore(0);
    setGameOver(false);

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Clean up previous instance
    if (renderRef.current) {
      Matter.Render.stop(renderRef.current);
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
      if (renderRef.current.canvas) renderRef.current.canvas.remove();
      renderRef.current = null;
      runnerRef.current = null;
      engineRef.current = null;
    }

    // Initialize Physics
    const { engine, render, runner } = createPinballPhysics(container, width, height);
    engineRef.current = engine;
    renderRef.current = render;
    runnerRef.current = runner;

    // Rendre le background transparent pour voir l'image CSS derrière
    render.options.background = 'transparent';
    render.options.wireframes = false;

    // --- Ajout des Murs ---
    const walls = createBoundaries(width, height);
    Matter.World.add(engine.world, walls);

    // --- Configuration des Éléments de Jeu ---
    const paddleY = height - 80;
    const paddleXOffset = 100;
    const group = Matter.Body.nextGroup(true);

    // Flipper Gauche
    const leftPaddle = Matter.Bodies.trapezoid(width / 2 - paddleXOffset, paddleY, 120, 20, 0.33, {
      label: "leftPaddle",
      angle: 0.5,
      chamfer: {},
      render: { fillStyle: '#ffcc00' },
      collisionFilter: { group: group }
    });
    // Pivot Flipper Gauche
    const leftPivot = Matter.Constraint.create({
      pointA: { x: width / 2 - paddleXOffset - 60 + 20, y: paddleY },
      bodyB: leftPaddle,
      pointB: { x: -40, y: 0 },
      stiffness: 0.9,
      length: 0,
      render: { visible: false }
    });
    // Butée Flipper Gauche
    const leftStopper = Matter.Bodies.circle(width / 2 - paddleXOffset - 20, paddleY + 25, 2, {
      isStatic: true,
      render: { visible: false },
      collisionFilter: { group: group }
    });

    // Flipper Droit
    const rightPaddle = Matter.Bodies.trapezoid(width / 2 + paddleXOffset, paddleY, 120, 20, 0.33, {
      label: "rightPaddle",
      angle: -0.5,
      chamfer: {},
      render: { fillStyle: '#ffcc00' },
      collisionFilter: { group: group }
    });
    // Pivot Flipper Droit
    const rightPivot = Matter.Constraint.create({
      pointA: { x: width / 2 + paddleXOffset + 60 - 20, y: paddleY },
      bodyB: rightPaddle,
      pointB: { x: 40, y: 0 },
      stiffness: 0.9,
      length: 0,
      render: { visible: false }
    });
    // Butée Flipper Droit
    const rightStopper = Matter.Bodies.circle(width / 2 + paddleXOffset + 20, paddleY + 25, 2, {
      isStatic: true,
      render: { visible: false },
      collisionFilter: { group: group }
    });

    // --- Bumpers (Obstacles) ---
    const bumperOptions = {
      isStatic: true,
      label: "bumper",
      render: { fillStyle: '#00ff00', opacity: 0.5 },
      restitution: 1.5
    };
    // Positions arbitraires pour l'instant
    const bumper1 = Matter.Bodies.circle(width / 2, height / 3, 25, bumperOptions);
    const bumper2 = Matter.Bodies.circle(width / 2 - 100, height / 4, 30, bumperOptions);
    const bumper3 = Matter.Bodies.circle(width / 2 + 100, height / 4, 30, bumperOptions);

    Matter.World.add(engine.world, [
      leftPaddle, leftPivot, leftStopper,
      rightPaddle, rightPivot, rightStopper,
      bumper1, bumper2, bumper3
    ]);

    // --- Gestion de la Balle ---
    let ball: Matter.Body;
    const createBall = () => {
      ball = Matter.Bodies.circle(width - 30, height - 100, 15, {
        label: "ball",
        restitution: 0.5,
        render: { fillStyle: '#ff0000' },
        collisionFilter: { group: group }
      });
      Matter.World.add(engine.world, ball);
    };
    createBall();

    // --- Gestion des Collisions (Score & Sons) ---
    Matter.Events.on(engine, 'collisionStart', (event) => {
      const pairs = event.pairs;
      pairs.forEach((pair) => {
        if (pair.bodyA.label === 'bumper' || pair.bodyB.label === 'bumper') {
          setScore(prev => prev + 100);
          playSound(bumperAudio.current);
        }
      });
    });

    // --- Boucle de Jeu (Vies & Reset) ---
    Matter.Events.on(engine, 'beforeUpdate', () => {
      if (!ball) return;

      // Balle perdue en bas
      if (ball.position.y > height + 100) {
        Matter.World.remove(engine.world, ball);
        playSound(holeAudio.current);

        setLives(prevLives => {
          const newLives = prevLives - 1;
          if (newLives > 0) {
            setTimeout(() => createBall(), 1000);
          } else {
            setGameOver(true);
          }
          return newLives;
        });
      }
    });

    // --- Contrôles Clavier ---
    const handleKeyDown = (e: KeyboardEvent) => {
      // Pas de contrôles si game over
      // Note: on utilise une ref ou check direct dans l'event listener si on veut être sûr de l'état, 
      // mais ici on a besoin de l'état frais.
      // Pour simplifier dans useEffect sans dépendances complexes, on laisse les contrôles actifs
      // ou on check un ref gameOverRef si besoin. Pour l'instant on laisse simple.

      if (e.key === "ArrowLeft") {
        Matter.Body.setAngularVelocity(leftPaddle, -0.4);
        playSound(flipperAudio.current);
      }
      if (e.key === "ArrowRight") {
        Matter.Body.setAngularVelocity(rightPaddle, 0.4);
        playSound(flipperAudio.current);
      }
      if (e.key === " ") {
        if (ball && ball.position.y > height - 150 && ball.position.x > width - 100) {
          Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.06 });
          playSound(launchAudio.current);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Démarrage de la simulation
    Matter.Render.run(render);
    Matter.Runner.run(runner, engine);

    setLoading(false);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
    };

  }, [tableKey]); // Re-run on table change

  /** -------------------------
   * AUDIO - Musique de fond
   * ------------------------- */
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.5;
    audioRef.current.src = tableConfig.music || "";

    // Fonction auto-play safe
    const playMusic = async () => {
      try {
        await audioRef.current?.play();
      } catch (e) {
        console.log("Autoplay blocked");
      }
    };

    if (!muted) {
      playMusic();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [tableKey, muted, tableConfig.music]);


  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <S.Page>
      {/* Background Image Style */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${tableConfig.img})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
        zIndex: 0
      }} />

      <S.CanvasWrapper style={{ position: 'relative', zIndex: 1 }}>
        {loading && <S.Spinner>Chargement...</S.Spinner>}
        <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      </S.CanvasWrapper>

      {/* UI Overlay */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        zIndex: 10,
        textShadow: '2px 2px 0 #000'
      }}>
        <div>SCORE: {score}</div>
        <div>VIES: {lives > 0 ? "❤️".repeat(lives) : "💀"}</div>
      </div>

      {gameOver && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          textAlign: 'center',
          color: 'white',
          zIndex: 20,
          border: '4px solid #ffcc00'
        }}>
          <h1 style={{ fontSize: '48px', margin: '0 0 20px 0', color: '#ff0000' }}>GAME OVER</h1>
          <p style={{ fontSize: '24px' }}>Score Final: {score}</p>
          <button
            onClick={handleRestart}
            style={{
              padding: '10px 30px',
              fontSize: '24px',
              cursor: 'pointer',
              backgroundColor: '#ffcc00',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px'
            }}
          >
            REJOUER
          </button>
        </div>
      )}

      <audio key={tableKey} ref={audioRef} loop />

      <S.Controls>
        <S.SpeakerButton onClick={() => setMuted((m) => !m)}>
          {muted ? "🔇" : "🔊"}
        </S.SpeakerButton>
      </S.Controls>
    </S.Page>
  );
};

export default PinballGame;
