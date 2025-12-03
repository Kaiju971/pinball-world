// src/pinball/PinballGame.tsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { createBall, createBumper, createFlipper } from "./physics";
import { SoundManager } from "./soundManager";
import * as S from "./Pinball.styled";
import SpeakerIcon from "@mui/icons-material/VolumeUp";
import SpeakerOffIcon from "@mui/icons-material/VolumeOff";

import tableImg from "../assets/images/Ignition.png";
import bumperSfxUrl from "../assets/audio/bumper.wav";
import flipperSfxUrl from "../assets/audio/flipper.wav";
import launchSfxUrl from "../assets/audio/launch.wav";
import holeSfxUrl from "../assets/audio/hole.wav";
import ambientUrl from "../assets/audio/ambient.mp3";

const PinballGame: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(true);
  const soundRef = useRef<SoundManager | null>(null);
  const worldRef = useRef<CANNON.World | null>(null);

  useEffect(() => {
    /** ---------------------------
     *  INIT AUDIO
     * ----------------------------*/
    const sm = new SoundManager();
    soundRef.current = sm;
    sm.setResumeOnInteraction();
    Promise.all([
      sm.load("bumper", bumperSfxUrl),
      sm.load("flipper", flipperSfxUrl),
      sm.load("launch", launchSfxUrl),
      sm.load("hole", holeSfxUrl),
      sm.load("ambient", ambientUrl).catch(() => {}),
    ]).catch(() => {});

    /** ---------------------------
     *  INIT THREE
     * ----------------------------*/
    const container = mountRef.current!;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const aspect = width / height;
    const viewSize = 10;
    const camera = new THREE.OrthographicCamera(
      (-viewSize * aspect) / 2,
      (viewSize * aspect) / 2,
      viewSize / 2,
      -viewSize / 2,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Table texture
    const texture = new THREE.TextureLoader().load(tableImg);
    const tableGeo = new THREE.PlaneGeometry(viewSize * aspect, viewSize);
    const tableMat = new THREE.MeshBasicMaterial({ map: texture });
    const tableMesh = new THREE.Mesh(tableGeo, tableMat);
    scene.add(tableMesh);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const p = new THREE.PointLight(0xffe0b2, 0.6, 30);
    p.position.set(0, 5, 5);
    scene.add(p);

    /** ---------------------------
     *  INIT CANNON WORLD
     * ----------------------------*/
    const world = new CANNON.World();
    world.gravity.set(0, -9.82 * 1.1, 0);
    world.broadphase = new CANNON.SAPBroadphase(world);

    const solver = new CANNON.GSSolver();
    solver.iterations = 15;
    world.solver = solver;

    worldRef.current = world;

    /** ---------------------------
     *  BALL
     * ----------------------------*/
    const ball = createBall(0.12, 0.45);
    ball.position.set(0, -viewSize * 0.25, 0.05);
    world.addBody(ball);

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 24, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    scene.add(ballMesh);

    /** ---------------------------
     *  BUMPERS
     * ----------------------------*/
    const bumper1 = createBumper(0.0, 0.9, 0.0, 0.18);
    world.addBody(bumper1);

    const bumperMesh1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 12),
      new THREE.MeshStandardMaterial({ color: 0xff4444 })
    );
    bumperMesh1.position.set(bumper1.position.x, bumper1.position.y, 0.02);
    scene.add(bumperMesh1);

    bumper1.addEventListener("collide", () => {
      soundRef.current?.play("bumper", 0.9);
    });

    /** ---------------------------
     *  FLIPPERS
     * ----------------------------*/
    const left = createFlipper(
      world,
      new CANNON.Vec3(-1.2, -1.8, 0),
      1.0,
      true
    );
    const right = createFlipper(
      world,
      new CANNON.Vec3(1.2, -1.8, 0),
      1.0,
      false
    );

    const flipperGeo = new THREE.BoxGeometry(1.0, 0.12, 0.06);
    const flipperMat = new THREE.MeshStandardMaterial({ color: 0xcccccc });

    const leftMesh = new THREE.Mesh(flipperGeo, flipperMat);
    const rightMesh = new THREE.Mesh(flipperGeo, flipperMat);
    scene.add(leftMesh);
    scene.add(rightMesh);

    /** ---------------------------
     *  KEYBOARD INPUT
     * ----------------------------*/
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ShiftLeft") {
        left.hinge.setMotorSpeed(10);
        soundRef.current?.play("flipper", 0.6);
      } else if (e.code === "ShiftRight") {
        right.hinge.setMotorSpeed(-10);
        soundRef.current?.play("flipper", 0.6);
      } else if (e.code === "ArrowDown") {
        ball.applyImpulse(
          new CANNON.Vec3(0, 1.6, 0),
          new CANNON.Vec3().copy(ball.position)
        );
        soundRef.current?.play("launch", 0.7);
      } else if (e.code === "Space") {
        const xForce = (Math.random() - 0.5) * 0.4;
        ball.applyImpulse(
          new CANNON.Vec3(xForce, 0.6, 0),
          new CANNON.Vec3().copy(ball.position)
        );
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ShiftLeft") left.hinge.setMotorSpeed(-6);
      if (e.code === "ShiftRight") right.hinge.setMotorSpeed(6);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    /** ---------------------------
     *  GAME LOOP
     * ----------------------------*/
    let lastTime: number | null = null;
    const fixedTimeStep = 1 / 60;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      world.step(fixedTimeStep, dt, 3);

      ballMesh.position.copy(ball.position);
      ballMesh.quaternion.copy(ball.quaternion);

      bumperMesh1.position.copy(bumper1.position);

      leftMesh.position.copy(left.flipper.position);
      leftMesh.quaternion.copy(left.flipper.quaternion);
      rightMesh.position.copy(right.flipper.position);
      rightMesh.quaternion.copy(right.flipper.quaternion);

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    /** ---------------------------
     *  CLEANUP
     * ----------------------------*/
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  /** MUTE BUTTON **/
  const toggleMute = () => {
    setMuted((m) => !m);
  };

  return (
    <S.Page>
      <S.CanvasWrapper>
        <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      </S.CanvasWrapper>

      <S.HUD>
        <div>Pinball (Three + cannon-es)</div>
        <div style={{ fontSize: 12 }}>
          Shift gauche / Shift droite = flippers • ↓ pour launch • espace =
          nudge
        </div>
      </S.HUD>

      <S.Controls>
        <S.SpeakerButton onClick={toggleMute}>
          {muted ? <SpeakerOffIcon /> : <SpeakerIcon />}
        </S.SpeakerButton>
      </S.Controls>
    </S.Page>
  );
};

export default PinballGame;

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import * as THREE from "three";
// import * as CANNON from "cannon-es";
// import {
//   createWorld,
//   createBall,
//   createBumper,
//   createFlipper,
//   createHole,
// } from "./physics";
// import { SoundManager } from "./soundManager";
// import * as S from "./Pinball.styled";
// import SpeakerIcon from "@mui/icons-material/VolumeUp";
// import SpeakerOffIcon from "@mui/icons-material/VolumeOff";
// import { pinballData, PinballKey } from "./pinballData";

// const PinballGame: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);
//   const requestRef = useRef<number | null>(null);
//   const [muted, setMuted] = useState(false);
//   const [currentTable, setCurrentTable] = useState<PinballKey>("Ignition");
//   const [score, setScore] = useState(0);
//   const [isBallLaunched, setIsBallLaunched] = useState(false);
//   const soundRef = useRef<SoundManager | null>(null);
//   const worldRef = useRef<CANNON.World | null>(null);
//   const cameraTargetY = useRef(0);
//   const ballRef = useRef<CANNON.Body | null>(null);
//   const ballMeshRef = useRef<THREE.Mesh | null>(null);
//   const tableMeshRef = useRef<THREE.Mesh | null>(null);
//   const tableConfig = pinballData[currentTable];

//   // Fonction d'initialisation du jeu (avec useCallback pour éviter les dépendances inutiles)
//   const setupGame = useCallback(() => {
//     // Initialisation du gestionnaire de sons
//     const sm = new SoundManager();
//     soundRef.current = sm;
//     sm.setResumeOnInteraction();
//     sm.setMuted(muted);

//     // Chargement des sons
//     Promise.all([
//       sm.load("bumper", tableConfig.fx?.bumper || ""),
//       sm.load("flipper", tableConfig.fx?.flipper || ""),
//       sm.load("launch", tableConfig.fx?.launch || ""),
//       sm.load("ambient", tableConfig.music || "").catch(() => {}),
//     ]).catch(console.error);

//     // Configuration de Three.js
//     const container = mountRef.current!;
//     const width = container.clientWidth;
//     const height = container.clientHeight;
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);

//     const aspect = width / height;
//     const viewSize = 10;
//     const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
//     camera.position.set(0, -2, 5);
//     camera.lookAt(0, 0, 0);

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(tableConfig.themeColor);

//     // Chargement de la texture de la table
//     const textureLoader = new THREE.TextureLoader();
//     const tableTexture = textureLoader.load(tableConfig.img);
//     const tableGeo = new THREE.PlaneGeometry(viewSize * aspect, viewSize);
//     const tableMat = new THREE.MeshBasicMaterial({ map: tableTexture });
//     const tableMesh = new THREE.Mesh(tableGeo, tableMat);
//     tableMeshRef.current = tableMesh;
//     scene.add(tableMesh);

//     // Lumière
//     const amb = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(amb);
//     const p = new THREE.PointLight(0xffe0b2, 0.6, 30);
//     p.position.set(0, 5, 5);
//     scene.add(p);

//     // Monde physique
//     const { world, ballMaterial } = createWorld();
//     worldRef.current = world;
//     const worldH = viewSize;

//     // Création de la bille
//     const ball = createBall(0.12, 0.45);
//     ballRef.current = ball;
//     ball.material = ballMaterial;
//     ball.position.set(0, -worldH * 0.25, 0.05);
//     world.addBody(ball);

//     // Mesh Three.js pour la bille
//     const ballGeo = new THREE.SphereGeometry(0.12, 24, 16);
//     const ballMat = new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       metalness: 0.3,
//       roughness: 0.3,
//     });
//     const ballMesh = new THREE.Mesh(ballGeo, ballMat);
//     ballMeshRef.current = ballMesh;
//     scene.add(ballMesh);

//     // Bumpers
//     const bumper1 = createBumper(0.0, 0.9, 0.0, 0.18);
//     world.addBody(bumper1);
//     const bumperMesh1 = new THREE.Mesh(
//       new THREE.SphereGeometry(0.18, 16, 12),
//       new THREE.MeshStandardMaterial({ color: 0xff4444 })
//     );
//     bumperMesh1.position.set(bumper1.position.x, bumper1.position.y, 0.02);
//     scene.add(bumperMesh1);

//     // Flippers
//     const leftFlipperAnchor = new CANNON.Vec3(-1.2, -1.8, 0);
//     const rightFlipperAnchor = new CANNON.Vec3(1.2, -1.8, 0);
//     const left = createFlipper(world, leftFlipperAnchor, 1.0, true);
//     const right = createFlipper(world, rightFlipperAnchor, 1.0, false);

//     // Mesh Three.js pour les flippers
//     const flipperGeo = new THREE.BoxGeometry(1.0, 0.12, 0.06);
//     const flipperMat = new THREE.MeshStandardMaterial({ color: 0xcccccc });
//     const leftMesh = new THREE.Mesh(flipperGeo, flipperMat);
//     const rightMesh = new THREE.Mesh(flipperGeo, flipperMat);
//     scene.add(leftMesh);
//     scene.add(rightMesh);

//     // Trou
//     const hole = createHole(0, -worldH / 2, 0.2);
//     world.addBody(hole);

//     // Gestion des collisions
//     bumper1.addEventListener("collide", () =>
//       soundRef.current?.play("bumper", 0.9)
//     );
//     left.flipper.addEventListener("collide", () =>
//       soundRef.current?.play("flipper", 0.6)
//     );
//     right.flipper.addEventListener("collide", () =>
//       soundRef.current?.play("flipper", 0.6)
//     );
//     hole.addEventListener("collide", () => {
//       soundRef.current?.play("hole", 1);
//       if (ballRef.current) {
//         ballRef.current.position.set(0, -worldH * 0.25, 0.05);
//         ballRef.current.velocity.set(0, 0, 0);
//       }
//       setIsBallLaunched(false);
//       camera.position.set(0, -2, 5);
//       camera.lookAt(0, 0, 0);
//       setScore((s) => s + 100);
//     });

//     // Contrôles clavier
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.code === "ShiftLeft") {
//         left.hinge.setMotorSpeed(5);
//         soundRef.current?.play("flipper", 0.6);
//       } else if (e.code === "ShiftRight") {
//         right.hinge.setMotorSpeed(-5);
//         soundRef.current?.play("flipper", 0.6);
//       } else if (e.code === "ArrowDown" && ballRef.current) {
//         ballRef.current.applyImpulse(
//           new CANNON.Vec3(0, 1.6, 0),
//           ballRef.current.position
//         );
//         soundRef.current?.play("launch", 0.7);
//         setIsBallLaunched(true);
//       } else if (e.code === "Space" && ballRef.current) {
//         const xForce = (Math.random() - 0.5) * 0.4;
//         ballRef.current.applyImpulse(
//           new CANNON.Vec3(xForce, 0.6, 0),
//           ballRef.current.position
//         );
//       }
//     };

//     const onKeyUp = (e: KeyboardEvent) => {
//       if (e.code === "ShiftLeft") {
//         left.hinge.setMotorSpeed(-3);
//       } else if (e.code === "ShiftRight") {
//         right.hinge.setMotorSpeed(3);
//       }
//     };

//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);

//     // Gestion du redimensionnement
//     const handleResize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Boucle d'animation
//     let lastTime: number | null = null;
//     const animate = (time: number) => {
//       if (!lastTime) lastTime = time;
//       const dt = (time - lastTime) / 1000;
//       lastTime = time;
//       world.step(1 / 60, dt, 3);

//       if (isBallLaunched && ballRef.current) {
//         const targetY = ballRef.current.position.y + 1;
//         cameraTargetY.current = THREE.MathUtils.lerp(
//           cameraTargetY.current,
//           targetY,
//           0.1
//         );
//         camera.position.y = cameraTargetY.current;
//         const zoomFactor = 1 + ballRef.current.position.y / 10;
//         camera.position.z = 5 / zoomFactor;
//       }

//       if (ballMeshRef.current && ballRef.current) {
//         ballMeshRef.current.position.copy(ballRef.current.position);
//       }
//       // Synchronisation des autres mesh
//       bumperMesh1.position.copy(bumper1.position);
//       leftMesh.position.copy(left.flipper.position);
//       leftMesh.quaternion.copy(left.flipper.quaternion);
//       rightMesh.position.copy(right.flipper.position);
//       rightMesh.quaternion.copy(right.flipper.quaternion);
//       renderer.render(scene, camera);
//       requestRef.current = requestAnimationFrame(animate);
//     };
//     requestRef.current = requestAnimationFrame(animate);

//     // Nettoyage
//     return () => {
//       if (requestRef.current) cancelAnimationFrame(requestRef.current);
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("keyup", onKeyUp);
//       window.removeEventListener("resize", handleResize);
//       container.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, [isBallLaunched, muted, tableConfig.fx?.bumper, tableConfig.fx?.flipper, tableConfig.fx?.launch, tableConfig.img, tableConfig.music, tableConfig.themeColor]);

//   // Appel de setupGame dans useEffect
//   useEffect(() => {
//     setupGame();
//   }, [setupGame]);

//   const toggleMute = () => {
//     setMuted(!muted);
//     soundRef.current?.setMuted(!muted);
//   };

//   return (
//     <S.Page>
//       <S.CanvasWrapper>
//         <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
//       </S.CanvasWrapper>
//       <S.HUD>
//         <S.TableTitle style={{ color: tableConfig.themeColor }}>
//           {tableConfig.title} - Score: {score}
//         </S.TableTitle>
//         <div style={{ fontSize: 12 }}>
//           Shift gauche/droite = flippers • ↓ pour launch • espace = nudge
//         </div>
//       </S.HUD>
//       <S.Controls>
//         <S.SpeakerButton color={tableConfig.themeColor} onClick={toggleMute}>
//           {muted ? <SpeakerOffIcon /> : <SpeakerIcon />}
//         </S.SpeakerButton>
//       </S.Controls>
//       <S.TableSelector>
//         {Object.keys(pinballData).map((key) => (
//           <S.TableButton
//             key={key}
//             color={pinballData[key].themeColor}
//             onClick={() => setCurrentTable(key as PinballKey)}
//           >
//             {pinballData[key].title}
//           </S.TableButton>
//         ))}
//       </S.TableSelector>
//       <S.LaunchButton
//         onClick={() => {
//           if (ballRef.current) {
//             ballRef.current.applyImpulse(
//               new CANNON.Vec3(0, 1.6, 0),
//               ballRef.current.position
//             );
//             soundRef.current?.play("launch", 0.7);
//             setIsBallLaunched(true);
//           }
//         }}
//       >
//         LAUNCH
//       </S.LaunchButton>
//     </S.Page>
//   );
// };

// export default PinballGame;
