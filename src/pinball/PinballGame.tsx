import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { pinballData, PinballKey, LightElement } from "./pinballData";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Pinball.styled";

// ─────────────────────────────────────────────
// TEXTURE GENERATOR
// ─────────────────────────────────────────────
const CANVAS_SIZE = 256;

const createElementTexture = (
  element: LightElement,
  fillColor: string,
  glow = false,
): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  const half = CANVAS_SIZE / 2;
  const border = element.borderColor ?? "transparent";

  if (glow) {
    ctx.shadowColor = fillColor;
    ctx.shadowBlur = 40;
  }

  ctx.fillStyle = fillColor;
  ctx.strokeStyle = border;
  ctx.lineWidth = 10;

  switch (element.type) {
    case "letter":
      ctx.font = "bold 160px Inter, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      if (border !== "transparent")
        ctx.strokeText(element.value ?? "?", half, half);
      ctx.fillText(element.value ?? "?", half, half);
      break;
    case "circle":
      ctx.beginPath();
      ctx.arc(half, half, 80, 0, Math.PI * 2);
      ctx.fill();
      if (border !== "transparent") ctx.stroke();
      break;
    case "arrow":
      ctx.beginPath();
      ctx.moveTo(40, 210);
      ctx.lineTo(216, 210);
      ctx.lineTo(128, 40);
      ctx.closePath();
      ctx.fill();
      if (border !== "transparent") ctx.stroke();
      break;
    case "custom":
      ctx.beginPath();
      ctx.arc(half, half, 70, 0, Math.PI * 2);
      ctx.fill();
      if (border !== "transparent") {
        ctx.lineWidth = 14;
        ctx.stroke();
      }
      break;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type GamePhase = "preview" | "ready" | "playing" | "gameover";

type Props = {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

// ─────────────────────────────────────────────
// RÈGLES DÉFILANTES PAR TABLE (anglais)
// ─────────────────────────────────────────────
const scrollingTexts: Record<string, string> = {
  AiRobot:
    "✦ WELCOME TO AI ROBOT ✦  Hit bumpers to light up ROBOT letters  ✦  Complete ROBOT to earn an extra ball  ✦  Press ENTER when ready  ✦  Press ARROW DOWN to launch  ✦",
  Mythology:
    "✦ WELCOME TO MYTHOLOGY ✦  Hit bumpers to light up MYTHOLOGY letters  ✦  Complete the word for a bonus ball  ✦  Press ENTER when ready  ✦  Press ARROW DOWN to launch  ✦",
  Entity:
    "✦ WELCOME TO ENTITY ✦  Light up ENTITY letters and bonus circles  ✦  Each bumper activates a random element  ✦  Press ENTER when ready  ✦  Press ARROW DOWN to launch  ✦",
  GoldWheel:
    "✦ WELCOME TO GOLDWHEEL ✦  Complete GOLDWHEEL to earn an extra ball  ✦  Hit bumpers to activate letters  ✦  Press ENTER when ready  ✦  Press ARROW DOWN to launch  ✦",
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
const PinballGame: React.FC<Props> = ({ muted, setMuted }) => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "AiRobot") as PinballKey;
  const tableConfig = pinballData[tableKey];

  /** REFS — DOM */
  const mountRef = useRef<HTMLDivElement>(null);

  /** REFS — AUDIO */
  const previewMusic = useRef<HTMLAudioElement | null>(null);
  const launchMusic = useRef<HTMLAudioElement | null>(null);
  const gameMusic = useRef<HTMLAudioElement | null>(null);
  const endMusic = useRef<HTMLAudioElement | null>(null);

  /** REFS — 3D */
  const ballRef = useRef<THREE.Mesh | null>(null);
  const elementsRef = useRef<THREE.Mesh[]>([]);
  const elementsStateRef = useRef<boolean[]>([]);

  /** REFS — GAMEPLAY */
  const phaseRef = useRef<GamePhase>("preview");
  // ✅ caméra figée dès que le joueur appuie sur Entrée
  const cameraFrozenRef = useRef(false);
  const multiplierRef = useRef(1);
  const velocityRef = useRef(0);
  const ballYRef = useRef(1.2);

  /** REFS — PREVIEW CAMERA */
  const previewDirRef = useRef<1 | -1>(1);
  const previewYRef = useRef(0);

  /** STATE */
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [ballsLeft, setBallsLeft] = useState(3);
  const [phase, setPhase] = useState<GamePhase>("preview");

  /** CONSTANTS */
  const minY = 0.6;
  const maxY = 19;
  const previewMinY = 0;
  const previewMaxY = 16.15;
  const previewSpeed = 0.02;

  // ─────────────────────────────────────────────
  // HELPERS AUDIO
  // ─────────────────────────────────────────────
  const stopAll = () => {
    [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
      if (r.current) {
        r.current.pause();
        r.current.currentTime = 0;
      }
    });
  };

  const syncMute = (m: boolean) => {
    [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
      if (r.current) r.current.muted = m;
    });
  };

  // ─────────────────────────────────────────────
  // AUDIO INIT
  // ─────────────────────────────────────────────
  useEffect(() => {
    previewMusic.current = new Audio(tableConfig.musicPreview);
    launchMusic.current = new Audio(tableConfig.launch);
    gameMusic.current = new Audio(tableConfig.musicGame);
    endMusic.current = new Audio(tableConfig.musicEnd);

    previewMusic.current.loop = true;
    gameMusic.current.loop = true;
    endMusic.current.loop = false;

    syncMute(muted);
    previewMusic.current.play().catch(() => {});

    return () => stopAll();
  }, [tableKey]);

  useEffect(() => syncMute(muted), [muted]);

  // ─────────────────────────────────────────────
  // THREE SCENE
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (!mountRef.current) return;

    setLoading(true);

    const manager = new THREE.LoadingManager();
    manager.onLoad = () => setTimeout(() => setLoading(false), 1200);

    const loader = new THREE.TextureLoader(manager);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const aspect = width / height;
    const vs = 4.7;

    const camera = new THREE.OrthographicCamera(
      -vs * aspect,
      vs * aspect,
      vs,
      -vs,
      0.1,
      100,
    );
    camera.position.set(0, previewYRef.current, 10);

    /** TABLE */
    const table = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 20),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.img),
        transparent: true,
      }),
    );
    table.position.set(0, 10, 0);
    scene.add(table);

    /** BALL */
    const ball = new THREE.Mesh(
      new THREE.CircleGeometry(0.25, 32),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.ballImg!),
        transparent: true,
      }),
    );
    ball.position.set(4.7, ballYRef.current, 2);
    scene.add(ball);
    ballRef.current = ball;

    /** ELEMENTS */
    elementsRef.current = [];
    elementsStateRef.current = tableConfig.elements.map(() => false);

    tableConfig.elements.forEach((el) => {
      const s = el.size ?? 0.9;
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(s, s),
        new THREE.MeshBasicMaterial({
          map: createElementTexture(el, "#222"),
          transparent: true,
        }),
      );
      mesh.position.set(el.x, el.y, 1.5);
      scene.add(mesh);
      elementsRef.current.push(mesh);
    });

    // ── GAME LOOP ──
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const currentPhase = phaseRef.current;

      // ── PREVIEW : caméra monte-descend (stop si frozen) ──
      if (currentPhase === "preview") {
        if (!cameraFrozenRef.current) {
          previewYRef.current += previewSpeed * previewDirRef.current;
          if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
          if (previewYRef.current <= previewMinY) previewDirRef.current = 1;
          camera.position.y = previewYRef.current;
        }

        // clignotement des éléments
        const time = Date.now() * 0.005;
        elementsRef.current.forEach((mesh, i) => {
          const el = tableConfig.elements[i];
          const mat = mesh.material as THREE.MeshBasicMaterial;
          if (el.alwaysOn) {
            mat.map = createElementTexture(el, tableConfig.themeColor, true);
          } else if (!elementsStateRef.current[i]) {
            const on = Math.sin(time + i * 0.8) > 0;
            mat.map = createElementTexture(
              el,
              on ? tableConfig.themeColor : "#111",
            );
          }
          mat.needsUpdate = true;
        });
      }

      // ── READY : caméra figée, éléments clignotent ──
      if (currentPhase === "ready") {
        // caméra ne bouge plus — position déjà figée dans previewYRef
        const time = Date.now() * 0.005;
        elementsRef.current.forEach((mesh, i) => {
          const el = tableConfig.elements[i];
          const mat = mesh.material as THREE.MeshBasicMaterial;
          if (el.alwaysOn) {
            mat.map = createElementTexture(el, tableConfig.themeColor, true);
          } else if (!elementsStateRef.current[i]) {
            const on = Math.sin(time + i * 0.8) > 0;
            mat.map = createElementTexture(
              el,
              on ? tableConfig.themeColor : "#111",
            );
          }
          mat.needsUpdate = true;
        });
      }

      // ── PLAYING ──
      if (currentPhase === "playing") {
        tableConfig.colliders.forEach((c) => {
          if (Math.abs(ballYRef.current - c.y) < c.radius) {
            velocityRef.current = c.force ?? 0.05;
            setScore((s) => s + c.score * multiplierRef.current);

            const inactive = elementsStateRef.current
              .map((v, i) => (!v ? i : -1))
              .filter((i) => i !== -1);

            if (inactive.length > 0) {
              const pick =
                inactive[Math.floor(Math.random() * inactive.length)];
              elementsStateRef.current[pick] = true;
              const mat = elementsRef.current[pick]
                .material as THREE.MeshBasicMaterial;
              mat.map = createElementTexture(
                tableConfig.elements[pick],
                tableConfig.themeColor,
                true,
              );
              mat.needsUpdate = true;
            }
          }
        });

        velocityRef.current += tableConfig.physics.gravity;
        ballYRef.current += velocityRef.current;

        if (ballYRef.current <= minY) {
          velocityRef.current = 0;
          ballYRef.current = 1.2;

          setBallsLeft((prev) => {
            const next = prev - 1;
            if (next <= 0) {
              gameMusic.current?.pause();
              if (endMusic.current) {
                endMusic.current.currentTime = 0;
                endMusic.current.play().catch(() => {});
              }
              phaseRef.current = "gameover";
              setPhase("gameover");
            } else {
              // balle perdue → ready, la caméra reste figée à la position actuelle
              phaseRef.current = "ready";
              setPhase("ready");
            }
            return next;
          });
        }

        ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);
        if (ballRef.current) ballRef.current.position.y = ballYRef.current;

        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          ballYRef.current,
          0.2,
        );

        const active = elementsStateRef.current.filter(Boolean).length;
        multiplierRef.current = Math.min(
          1 + active,
          tableConfig.scoring.multiplierMax,
        );

        if (
          elementsStateRef.current.length > 0 &&
          elementsStateRef.current.every(Boolean)
        ) {
          setBallsLeft((b) => b + 1);
          elementsStateRef.current = elementsStateRef.current.map(() => false);
          elementsRef.current.forEach((mesh, i) => {
            const mat = mesh.material as THREE.MeshBasicMaterial;
            mat.map = createElementTexture(tableConfig.elements[i], "#222");
            mat.needsUpdate = true;
          });
        }
      }

      renderer.render(scene, camera);
    };

    animate();
    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [tableKey]);

  // ─────────────────────────────────────────────
  // CONTROLS
  // ─────────────────────────────────────────────
  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      // ── ENTRÉE : preview → ready ──
      // ✅ la caméra se fige immédiatement
      if (e.code === "Enter" && phaseRef.current === "preview") {
        cameraFrozenRef.current = true; // ← fige la caméra
        phaseRef.current = "ready";
        setPhase("ready");

        previewMusic.current?.pause();
        if (launchMusic.current) {
          launchMusic.current.loop = true;
          launchMusic.current.currentTime = 0;
          launchMusic.current.play().catch(() => {});
        }
      }

      // ── FLÈCHE BAS : ready → playing ──
      if (e.code === "ArrowDown" && phaseRef.current === "ready") {
        phaseRef.current = "playing";
        setPhase("playing"); // ✅ déclenche le swap HUD immédiatement

        if (launchMusic.current) {
          launchMusic.current.loop = false;
          launchMusic.current.pause();
        }
        if (gameMusic.current) {
          gameMusic.current.currentTime = 0;
          gameMusic.current.play().catch(() => {});
        }

        velocityRef.current = 0.12;
      }
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  // ─────────────────────────────────────────────
  // JSX
  // ─────────────────────────────────────────────
  // ✅ le scroll ne s'affiche QUE en preview (plus en ready)
  // dès playing → score immédiatement
  const showScroll = phase === "preview";
  const scrollText = scrollingTexts[tableKey] ?? "";
  const scrollDuration = Math.max(16, Math.round(scrollText.length * 0.15));

  return (
    <S.MainContainer>
      <S.HUD>
        {showScroll ? (
          <S.ScrollingText duration={scrollDuration}>
            {scrollText}
          </S.ScrollingText>
        ) : (
          <S.Score>
            {score.toString().padStart(6, "0")}
            {"  "}
            {"🟠".repeat(Math.max(0, ballsLeft))}
          </S.Score>
        )}
      </S.HUD>

      <S.Page>
        <S.CanvasWrapper>
          {loading && (
            <S.Spinner>
              LOADING
              <S.Line />
              {tableKey.toUpperCase()}
            </S.Spinner>
          )}
          <div ref={mountRef} style={{ width: "100%", height: "200%" }} />
        </S.CanvasWrapper>

        <S.SoundButton onClick={() => setMuted((m) => !m)}>
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </S.SoundButton>
      </S.Page>
    </S.MainContainer>
  );
};

export default PinballGame;
