// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as THREE from "three";
// import { pinballData, PinballKey } from "./pinballData";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import * as S from "./Pinball.styled";

// type Props = {
//   muted: boolean;
//   setMuted: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const PinballGame: React.FC<Props> = ({ muted, setMuted }) => {
//   /** ---------------- CONFIG ---------------- */

//   const { name } = useParams<{ name: PinballKey }>();
//   const tableKey = (name || "AiRobot") as PinballKey;
//   const tableConfig = pinballData[tableKey];

//   /** ---------------- REFS ---------------- */

//   const mountRef = useRef<HTMLDivElement>(null);

//   const previewMusic = useRef<HTMLAudioElement | null>(null);
//   const gameMusic = useRef<HTMLAudioElement | null>(null);
//   const endMusic = useRef<HTMLAudioElement | null>(null);

//   const ballRef = useRef<THREE.Mesh | null>(null);

//   const readyToShootRef = useRef(true);
//   const gameStartedRef = useRef(false);
//   const previewActiveRef = useRef(true);

//   const velocityRef = useRef(0);
//   const ballYRef = useRef(1.2);

//   const previewDirRef = useRef<1 | -1>(1);
//   const previewYRef = useRef(10);

//   /** ---------------- STATE ---------------- */

//   const [loading, setLoading] = useState(true);
//   const [ballsLeft, setBallsLeft] = useState(3);

//   /** ---------------- CONSTANTS ---------------- */

//   const gravity = tableConfig.physics.gravity;
//   const minY = 0.6;
//   const maxY = 19;

//   const previewMinY = 0;
//   const previewMaxY = 16.15;
//   const previewSpeed = 0.02;

//   /** ---------------- AUDIO INIT ---------------- */

//   useEffect(() => {
//     previewMusic.current = new Audio(tableConfig.musicPreview);
//     gameMusic.current = new Audio(tableConfig.musicGame);
//     endMusic.current = new Audio(tableConfig.musicEnd);

//     previewMusic.current.loop = true;
//     gameMusic.current.loop = true;
//     endMusic.current.loop = false;

//     previewMusic.current.muted = muted;
//     gameMusic.current.muted = muted;
//     endMusic.current.muted = muted;

//     previewMusic.current.play().catch(() => {});

//     return () => {
//       previewMusic.current?.pause();
//       gameMusic.current?.pause();
//       endMusic.current?.pause();
//     };
//   }, [tableKey]);

//   /** ---------------- AUDIO MUTE SYNC ---------------- */

//   useEffect(() => {
//     if (previewMusic.current) previewMusic.current.muted = muted;
//     if (gameMusic.current) gameMusic.current.muted = muted;
//     if (endMusic.current) endMusic.current.muted = muted;
//   }, [muted]);

//   /** ---------------- THREE SCENE ---------------- */

//   useEffect(() => {
//     if (!mountRef.current) return;

//     setLoading(true);

//     const manager = new THREE.LoadingManager();

//     manager.onLoad = () => {
//       setTimeout(() => setLoading(false), 1200);
//     };

//     const loader = new THREE.TextureLoader(manager);

//     /** RENDERER */

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     renderer.setSize(width, height);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     mountRef.current.innerHTML = "";
//     mountRef.current.appendChild(renderer.domElement);

//     /** SCENE */

//     const scene = new THREE.Scene();

//     /** CAMERA */

//     const aspect = width / height;
//     const viewSize = 4.7;

//     const camera = new THREE.OrthographicCamera(
//       -viewSize * aspect,
//       viewSize * aspect,
//       viewSize,
//       -viewSize,
//       0.1,
//       100,
//     );

//     camera.position.set(0, previewYRef.current, 10);

//     /** TABLE */

//     const tableTexture = loader.load(tableConfig.img);

//     const table = new THREE.Mesh(
//       new THREE.PlaneGeometry(10, 20),
//       new THREE.MeshBasicMaterial({
//         map: tableTexture,
//         transparent: true,
//       }),
//     );

//     table.position.set(0, 10, 0);
//     scene.add(table);

//     /** BALL */

//     const ballTexture = loader.load(tableConfig.ballImg!);

//     const ball = new THREE.Mesh(
//       new THREE.CircleGeometry(0.25, 32),
//       new THREE.MeshBasicMaterial({
//         map: ballTexture,
//         transparent: true,
//       }),
//     );

//     ball.position.set(4.7, ballYRef.current, 2);
//     scene.add(ball);
//     ballRef.current = ball;

//     /** COLLISIONS */

//     const handleCollisions = () => {
//       tableConfig.colliders.forEach((c) => {
//         const dist = Math.abs(ballYRef.current - c.y);

//         if (dist < c.radius) {
//           velocityRef.current = c.force || 0.05;

//           // 🔊 FX futur ici
//           // 🎯 SCORE futur ici

//           console.log("HIT:", c.type);
//         }
//       });
//     };

//     /** GAME LOOP */

//     const animate = () => {
//       handleCollisions();

//       /** PREVIEW CAMERA */

//       if (previewActiveRef.current) {
//         previewYRef.current += previewSpeed * previewDirRef.current;

//         if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
//         if (previewYRef.current <= previewMinY) previewDirRef.current = 1;

//         camera.position.y = previewYRef.current;
//       }

//       /** GAME PHYSICS */

//       if (gameStartedRef.current) {
//         velocityRef.current += gravity;
//         ballYRef.current += velocityRef.current;

//         /** BALL LOST */

//         if (ballYRef.current <= minY) {
//           setBallsLeft((b) => {
//             if (b <= 1) {
//               gameMusic.current?.pause();
//               endMusic.current?.play().catch(() => {});
//             }
//             return b - 1;
//           });

//           readyToShootRef.current = true;
//           gameStartedRef.current = false;

//           ballYRef.current = 1.2;
//           velocityRef.current = 0;
//         }

//         ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);

//         if (ballRef.current) {
//           ballRef.current.position.y = ballYRef.current;
//         }

//         camera.position.y = THREE.MathUtils.lerp(
//           camera.position.y,
//           ballYRef.current,
//           0.2,
//         );
//       }

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       renderer.dispose();
//     };
//   }, [tableKey]);

//   /** ---------------- CONTROLS ---------------- */

//   useEffect(() => {
//     const onKeyUp = (e: KeyboardEvent) => {
//       if (e.code === "ArrowDown" && readyToShootRef.current) {
//         previewActiveRef.current = false;

//         previewMusic.current?.pause();
//         gameMusic.current?.play().catch(() => {});

//         velocityRef.current = 0.12;
//         readyToShootRef.current = false;
//         gameStartedRef.current = true;
//       }
//     };

//     window.addEventListener("keyup", onKeyUp);
//     return () => window.removeEventListener("keyup", onKeyUp);
//   }, []);

//   /** ---------------- JSX ---------------- */

//   return (
//     <S.MainContainer>
//       <S.HUD>
//         <S.Score>{ballsLeft} BALLS</S.Score>
//       </S.HUD>

//       <S.Page>
//         <S.CanvasWrapper>
//           {loading && (
//             <S.Spinner>
//               LOADING
//               <S.Line />
//               {tableKey.toUpperCase()}
//             </S.Spinner>
//           )}

//           <div ref={mountRef} style={{ width: "100%", height: "200%" }} />
//         </S.CanvasWrapper>

//         <S.SoundButton onClick={() => setMuted((m) => !m)}>
//           {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
//         </S.SoundButton>
//       </S.Page>
//     </S.MainContainer>
//   );
// };

// export default PinballGame;

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { pinballData, PinballKey, LightElement } from "./pinballData";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Pinball.styled";

// ─────────────────────────────────────────────
// TEXTURE GENERATOR — letter / circle / arrow / custom
// ─────────────────────────────────────────────
const createElementTexture = (
  element: LightElement,
  color: string,
  glow = false,
): THREE.CanvasTexture => {
  const size = 140;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);

  if (glow) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 50;
  }

  ctx.fillStyle = color;

  switch (element.type) {
    case "letter":
      ctx.font = "bold 140px inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(element.value ?? "?", size / 2, size / 2);
      break;

    case "circle":
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 20, 0, Math.PI * 2);
      ctx.fill();
      break;

    case "arrow":
      ctx.beginPath();
      ctx.moveTo(50, 200);
      ctx.lineTo(200, 200);
      ctx.lineTo(125, 50);
      ctx.closePath();
      ctx.fill();
      break;

    case "custom":
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 60, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 8;
      ctx.stroke();
      break;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

// ─────────────────────────────────────────────
// PROPS
// ─────────────────────────────────────────────
type Props = {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
const PinballGame: React.FC<Props> = ({ muted, setMuted }) => {
  /** CONFIG */
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "AiRobot") as PinballKey;
  const tableConfig = pinballData[tableKey];

  /** REFS — DOM */
  const mountRef = useRef<HTMLDivElement>(null);

  /** REFS — AUDIO */
  const previewMusic = useRef<HTMLAudioElement | null>(null);
  const gameMusic = useRef<HTMLAudioElement | null>(null);
  const endMusic = useRef<HTMLAudioElement | null>(null);

  /** REFS — 3D */
  const ballRef = useRef<THREE.Mesh | null>(null);
  const elementsRef = useRef<THREE.Mesh[]>([]);
  const elementsStateRef = useRef<boolean[]>([]);

  /** REFS — GAMEPLAY */
  const multiplierRef = useRef(1);
  const readyToShootRef = useRef(true);
  const gameStartedRef = useRef(false);
  const previewActiveRef = useRef(true);
  const velocityRef = useRef(0);
  const ballYRef = useRef(1.2);

  /** REFS — PREVIEW CAMERA */
  const previewDirRef = useRef<1 | -1>(1);
  const previewYRef = useRef(0);

  /** STATE */
  const [loading, setLoading] = useState(true);
  const [ballsLeft, setBallsLeft] = useState(3);

  /** CONSTANTS */
  const minY = 0.6;
  const maxY = 19;
  const previewMinY = 0;
  const previewMaxY = 16.15;
  const previewSpeed = 0.02;

  // ─────────────────────────────────────────────
  // AUDIO INIT
  // ─────────────────────────────────────────────
  useEffect(() => {
    previewMusic.current = new Audio(tableConfig.musicPreview);
    gameMusic.current = new Audio(tableConfig.musicGame);
    endMusic.current = new Audio(tableConfig.musicEnd);

    previewMusic.current.loop = true;
    gameMusic.current.loop = true;
    endMusic.current.loop = false;

    previewMusic.current.muted = muted;
    gameMusic.current.muted = muted;
    endMusic.current.muted = muted;

    previewMusic.current.play().catch(() => {});

    return () => {
      previewMusic.current?.pause();
      gameMusic.current?.pause();
      endMusic.current?.pause();
    };
  }, [tableKey]);

  // ─────────────────────────────────────────────
  // AUDIO MUTE SYNC
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (previewMusic.current) previewMusic.current.muted = muted;
    if (gameMusic.current) gameMusic.current.muted = muted;
    if (endMusic.current) endMusic.current.muted = muted;
  }, [muted]);

  // ─────────────────────────────────────────────
  // THREE SCENE
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (!mountRef.current) return;

    setLoading(true);

    const manager = new THREE.LoadingManager();
    manager.onLoad = () => setTimeout(() => setLoading(false), 1200);

    const loader = new THREE.TextureLoader(manager);

    /** RENDERER */
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    /** SCENE */
    const scene = new THREE.Scene();

    /** CAMERA */
    const aspect = width / height;
    const viewSize = 4.7;

    const camera = new THREE.OrthographicCamera(
      -viewSize * aspect,
      viewSize * aspect,
      viewSize,
      -viewSize,
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

    /** ELEMENTS — lettres, cercles, flèches, custom */
    elementsRef.current = [];
    elementsStateRef.current = tableConfig.elements.map(() => false);

    tableConfig.elements.forEach((el) => {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.9, 0.9),
        new THREE.MeshBasicMaterial({
          map: createElementTexture(el, "#222"),
          transparent: true,
        }),
      );
      mesh.position.set(el.x, el.y, 1.5);
      scene.add(mesh);
      elementsRef.current.push(mesh);
    });

    // ─────────────────────────────────────────────
    // GAME LOOP
    // ─────────────────────────────────────────────
    let animFrameId: number;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // ── PREVIEW : caméra monte/descend + éléments clignotent ──
      if (previewActiveRef.current) {
        previewYRef.current += previewSpeed * previewDirRef.current;
        if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
        if (previewYRef.current <= previewMinY) previewDirRef.current = 1;
        camera.position.y = previewYRef.current;

        const time = Date.now() * 0.005;
        elementsRef.current.forEach((mesh, i) => {
          // Les éléments alwaysOn restent toujours allumés
          if (tableConfig.elements[i].alwaysOn) {
            const mat = mesh.material as THREE.MeshBasicMaterial;
            mat.map = createElementTexture(
              tableConfig.elements[i],
              tableConfig.themeColor,
              true,
            );
            mat.needsUpdate = true;
            return;
          }

          if (elementsStateRef.current[i]) return;

          const on = Math.sin(time + i * 0.8) > 0;
          const mat = mesh.material as THREE.MeshBasicMaterial;
          mat.map = createElementTexture(
            tableConfig.elements[i],
            on ? tableConfig.themeColor : "#111",
          );
          mat.needsUpdate = true;
        });
      }

      // ── COLLISIONS ──
      tableConfig.colliders.forEach((c) => {
        const dist = Math.abs(ballYRef.current - c.y);
        if (dist < c.radius) {
          velocityRef.current = c.force ?? 0.05;

          const inactive = elementsStateRef.current
            .map((v, i) => (!v ? i : -1))
            .filter((i) => i !== -1);

          if (inactive.length > 0) {
            const pick = inactive[Math.floor(Math.random() * inactive.length)];
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

      // ── GAME PHYSICS ──
      if (gameStartedRef.current) {
        velocityRef.current += tableConfig.physics.gravity;
        ballYRef.current += velocityRef.current;

        if (ballYRef.current <= minY) {
          setBallsLeft((b) => {
            if (b <= 1) {
              gameMusic.current?.pause();
              endMusic.current?.play().catch(() => {});
            }
            return b - 1;
          });

          readyToShootRef.current = true;
          gameStartedRef.current = false;
          ballYRef.current = 1.2;
          velocityRef.current = 0;
        }

        ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);

        if (ballRef.current) {
          ballRef.current.position.y = ballYRef.current;
        }

        // Caméra suit la balle en jeu
        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          ballYRef.current,
          0.2,
        );
      }

      // ── MULTIPLIER ──
      const active = elementsStateRef.current.filter(Boolean).length;
      multiplierRef.current = Math.min(
        1 + active,
        tableConfig.scoring.multiplierMax,
      );

      // ── COMPLETE : tous allumés → +1 balle + reset ──
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

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      renderer.dispose();
    };
  }, [tableKey]);

  // ─────────────────────────────────────────────
  // CONTROLS
  // ─────────────────────────────────────────────
  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown" && readyToShootRef.current) {
        previewActiveRef.current = false;

        previewMusic.current?.pause();
        gameMusic.current?.play().catch(() => {});

        velocityRef.current = 0.12;
        readyToShootRef.current = false;
        gameStartedRef.current = true;
      }
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  // ─────────────────────────────────────────────
  // JSX
  // ─────────────────────────────────────────────
  return (
    <S.MainContainer>
      <S.HUD>
        <S.Score>{ballsLeft} BALLS</S.Score>
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