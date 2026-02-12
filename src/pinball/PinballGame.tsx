// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as THREE from "three";
// import { pinballData, PinballKey } from "./pinballData";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import * as S from "./Pinball.styled";

// const PinballGame: React.FC = () => {
//   const { name } = useParams<{ name: PinballKey }>();
//   const tableKey = (name || "AiRobot") as PinballKey;
//   const tableConfig = pinballData[tableKey];

//   const mountRef = useRef<HTMLDivElement>(null);

//   const previewMusicRef = useRef<HTMLAudioElement | null>(null);
//   const gameMusicRef = useRef<HTMLAudioElement | null>(null);
//   const endMusicRef = useRef<HTMLAudioElement | null>(null);
//   const fxReadyRef = useRef<HTMLAudioElement | null>(null);
//   const fxHoleRef = useRef<HTMLAudioElement | null>(null);

//   const [loading, setLoading] = useState(true);
//   const [muted, setMuted] = useState(true);
//   const [ballsLeft, setBallsLeft] = useState(3);

//   const gameStartedRef = useRef(false);
//   const readyToShootRef = useRef(true);

//   const velocityYRef = useRef(0);
//   const ballYRef = useRef(1);

//   const launcherRef = useRef<THREE.Mesh | null>(null);
//   const ballRef = useRef<THREE.Mesh | null>(null);

//   const launcherPosRef = useRef(0);
//   const isPullingRef = useRef(false);

//   const launcherSpeed = 0.01;
//   const launcherMaxPull = -1.1;
//   const minLaunchVelocity = 0.06;

//   // ---------------- AUDIO SETUP ----------------
//   useEffect(() => {
//     previewMusicRef.current = tableConfig.musicPreview
//       ? new Audio(tableConfig.musicPreview)
//       : null;

//     gameMusicRef.current = tableConfig.musicGame
//       ? new Audio(tableConfig.musicGame)
//       : null;

//     endMusicRef.current = tableConfig.musicEnd
//       ? new Audio(tableConfig.musicEnd)
//       : null;

//     fxReadyRef.current = tableConfig.fx?.fxReady
//       ? new Audio(tableConfig.fx.fxReady)
//       : null;

//     fxHoleRef.current = tableConfig.fx?.hole
//       ? new Audio(tableConfig.fx.hole)
//       : null;

//     [previewMusicRef, gameMusicRef, endMusicRef].forEach((ref) => {
//       if (ref.current) {
//         ref.current.loop = true;
//         ref.current.volume = 0.6;
//         ref.current.muted = muted;
//       }
//     });

//     previewMusicRef.current?.play().catch(() => {});

//     return () => {
//       previewMusicRef.current?.pause();
//       gameMusicRef.current?.pause();
//       endMusicRef.current?.pause();
//     };
//   }, [tableKey, muted]);

//   // ---------------- THREE ----------------
//   useEffect(() => {
//     if (!mountRef.current) return;
//     setLoading(true);

//     const container = mountRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     container.innerHTML = "";
//     container.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();
//     const frustumSize = 10;
//     const aspect = width / height;

//     const camera = new THREE.OrthographicCamera(
//       (frustumSize * aspect) / -2,
//       (frustumSize * aspect) / 2,
//       frustumSize / 2,
//       frustumSize / -2,
//       0.1,
//       100
//     );
//     camera.position.set(0, frustumSize / 2, 10);

//     const tableHeight = 20;

//     const loader = new THREE.TextureLoader();
//     loader.load(tableConfig.img, (texture) => {
//       const tableMesh = new THREE.Mesh(
//         new THREE.PlaneGeometry(10, tableHeight),
//         new THREE.MeshBasicMaterial({ map: texture, transparent: true })
//       );
//       tableMesh.position.set(0, tableHeight / 2, 0);
//       scene.add(tableMesh);
//       setLoading(false);
//     });

//     const ballTexture = loader.load(tableConfig.ballImg!);
//     const ballMesh = new THREE.Mesh(
//       new THREE.CircleGeometry(0.25, 32),
//       new THREE.MeshBasicMaterial({ map: ballTexture, transparent: true })
//     );
//     scene.add(ballMesh);
//     ballRef.current = ballMesh;
//     ballMesh.position.set(4.7, 1, 1.5);

//     const launcherTexture = loader.load(tableConfig.launch!);
//     const launcherMesh = new THREE.Mesh(
//       new THREE.PlaneGeometry(0.5, 1),
//       new THREE.MeshBasicMaterial({ map: launcherTexture, transparent: true })
//     );
//     launcherMesh.position.set(4.7, 0.5, 1.5);
//     scene.add(launcherMesh);
//     launcherRef.current = launcherMesh;

//     const gravity = -0.002;
//     const ballMinY = 0.5;
//     const cameraMinY = 0.1;
//     const cameraMaxY = tableHeight - 4;

//     let cameraY = cameraMinY;
//     let previewDir = 1;

//     const animate = () => {
//       if (readyToShootRef.current) {
//         cameraY += previewDir * 0.015;
//         if (cameraY >= cameraMaxY || cameraY <= cameraMinY) previewDir *= -1;
//         camera.position.y = cameraY;

//         if (isPullingRef.current) {
//           launcherPosRef.current = THREE.MathUtils.clamp(
//             launcherPosRef.current - launcherSpeed,
//             launcherMaxPull,
//             0
//           );
//         }

//         if (launcherRef.current)
//           launcherRef.current.position.y = 0.5 + launcherPosRef.current;

//         if (ballRef.current) {
//           const y = 0.5 + launcherPosRef.current + 0.25;
//           ballRef.current.position.y = y;
//           ballYRef.current = y;
//         }
//       } else if (gameStartedRef.current) {
//         velocityYRef.current += gravity;
//         ballYRef.current += velocityYRef.current;

//         if (ballYRef.current <= ballMinY) {
//           fxHoleRef.current?.play().catch(() => {});
//           setBallsLeft((b) => b - 1);

//           if (ballsLeft > 1) {
//             readyToShootRef.current = true;
//             gameStartedRef.current = false;
//             ballYRef.current = 1;
//           } else {
//             gameMusicRef.current?.pause();
//             endMusicRef.current?.play().catch(() => {});
//           }
//         }

//         if (ballRef.current) ballRef.current.position.y = ballYRef.current;

//         camera.position.y = THREE.MathUtils.lerp(
//           camera.position.y,
//           ballYRef.current,
//           0.15
//         );
//       }

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();
//     return () => renderer.dispose();
//   }, [tableKey, ballsLeft]);

//   // ---------------- CONTROLS ----------------
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.code === "Space" && readyToShootRef.current) {
//         fxReadyRef.current?.play().catch(() => {});
//       }
//       if (e.code === "ArrowDown") isPullingRef.current = true;
//     };

//     const onKeyUp = (e: KeyboardEvent) => {
//       if (e.code === "ArrowDown") {
//         isPullingRef.current = false;
//         const force = -launcherPosRef.current * 0.9;

//         if (force >= minLaunchVelocity) {
//           velocityYRef.current = force;
//           readyToShootRef.current = false;
//           gameStartedRef.current = true;

//           previewMusicRef.current?.pause();
//           gameMusicRef.current?.play().catch(() => {});
//         }

//         launcherPosRef.current = 0;
//       }
//     };

//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);
//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("keyup", onKeyUp);
//     };
//   }, []);

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
//               <br />
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

// src/pinball/PinballGame.tsx
// src/pinball/PinballGame.tsx
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { pinballData, PinballKey } from "./pinballData";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Pinball.styled";

const PinballGame: React.FC = () => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "AiRobot") as PinballKey;
  const tableConfig = pinballData[tableKey];

  const mountRef = useRef<HTMLDivElement>(null);

  const previewMusic = useRef<HTMLAudioElement | null>(null);
  const gameMusic = useRef<HTMLAudioElement | null>(null);
  const endMusic = useRef<HTMLAudioElement | null>(null);

  const ballRef = useRef<THREE.Mesh | null>(null);
  const launcherRef = useRef<THREE.Mesh | null>(null);

  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const [ballsLeft, setBallsLeft] = useState(3);

  const readyToShootRef = useRef(true);
  const gameStartedRef = useRef(false);

  const velocityRef = useRef(0);
  const ballYRef = useRef(1);
  const launcherPosRef = useRef(0);
  const isPullingRef = useRef(false);

  const launcherMaxPull = -1.1;
  const launcherSpeed = 0.01;
  const minLaunchVelocity = 0.06;

  // ---------------- AUDIO ----------------
  useEffect(() => {
    if (!tableConfig) return;

    // Création des objets audio
    previewMusic.current = new Audio(tableConfig.musicPreview);
    gameMusic.current = new Audio(tableConfig.musicGame);
    endMusic.current = new Audio(tableConfig.musicEnd);

    [previewMusic, gameMusic, endMusic].forEach((ref) => {
      if (ref.current) {
        ref.current.loop = true;
        ref.current.volume = 0.6;
        ref.current.muted = muted;
      }
    });

    // Lance la musique de preview après un petit timeout pour être sûr que le DOM est prêt
    setTimeout(() => {
      previewMusic.current?.play().catch(() => {
        console.log("Preview audio blocked");
      });
    }, 100);

    return () => {
      previewMusic.current?.pause();
      gameMusic.current?.pause();
      endMusic.current?.pause();
    };
  }, [muted, tableConfig, tableKey]);


  // ---------------- THREE ----------------
  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);

    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-5, 5, 2, -8, 0.1, 100);
    camera.position.set(0, 3, 10);

    const loader = new THREE.TextureLoader();
    loader.load(tableConfig.img, (tex) => {
      const table = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 20),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true })
      );
      table.position.set(0, 10, 0);
      scene.add(table);
      setLoading(false);
    });

    const ball = new THREE.Mesh(
      new THREE.CircleGeometry(0.25, 32),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.ballImg!),
        transparent: true,
      })
    );
    ball.position.set(4.7, 1, 1);
    scene.add(ball);
    ballRef.current = ball;

    const launcher = new THREE.Mesh(
      new THREE.PlaneGeometry(0.5, 1),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.launch!),
        transparent: true,
      })
    );
    launcher.position.set(4.6, 12.5, 1);
    scene.add(launcher);
    launcherRef.current = launcher;

    const gravity = -0.002;
    const minY = 0.6;
    const maxY = 19;

    const animate = () => {
      // PREVIEW CAMERA
      if (readyToShootRef.current) {
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 3, 0.05);
        // Launcher pull
        if (isPullingRef.current) {
          launcherPosRef.current -= launcherSpeed;
          launcherPosRef.current = THREE.MathUtils.clamp(
            launcherPosRef.current,
            launcherMaxPull,
            0
          );
        }
        if (launcherRef.current)
          launcherRef.current.position.y = 1 + launcherPosRef.current;
        if (ballRef.current) {
          const y = 0.5 + launcherPosRef.current + 1.20;
          ballRef.current.position.y = y;
          ballYRef.current = y;
        }
      }

      // Balle en jeu
      if (gameStartedRef.current) {
        velocityRef.current += gravity;
        ballYRef.current += velocityRef.current;

        // Détection bas plateau
        if (ballYRef.current <= minY) {
          setBallsLeft((b) => b - 1);

          if (ballsLeft > 1) {
            readyToShootRef.current = true;
            gameStartedRef.current = false;
            ballYRef.current = 1;
            velocityRef.current = 0;
            previewMusic.current?.play().catch(() => {});
            gameMusic.current?.pause();
          } else {
            gameMusic.current?.pause();
            endMusic.current?.play().catch(() => {});
          }
        }

        ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);
        if (ballRef.current) ballRef.current.position.y = ballYRef.current;

        // Caméra suit la balle
        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          ballYRef.current,
          0.15
        );
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => renderer.dispose();
  }, [tableKey, ballsLeft, tableConfig.img, tableConfig.ballImg, tableConfig.launch, launcherMaxPull]);

  // ---------------- CONTROLS ----------------
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown") isPullingRef.current = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown") {
        isPullingRef.current = false;
        const force = -launcherPosRef.current * 0.9;

        if (force >= minLaunchVelocity && readyToShootRef.current) {
          velocityRef.current = force;
          readyToShootRef.current = false;
          gameStartedRef.current = true;

          previewMusic.current?.pause();
          gameMusic.current?.play().catch(() => {});
        }

        launcherPosRef.current = 0;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

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
              <br />
              __________
              <br />
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
