// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as THREE from "three";
// import { pinballData, Collider, PinballKey, LightElement } from "./pinballData";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import * as S from "./Pinball.styled";

// // ─────────────────────────────────────────────
// // TEXTURE CANVAS — fallback si pas de PNG
// // ─────────────────────────────────────────────
// const CANVAS_SIZE = 256;

// const createElementTexture = (
//   element: LightElement,
//   fillColor: string,
//   glow = false,
// ): THREE.CanvasTexture => {
//   const canvas = document.createElement("canvas");
//   canvas.width = CANVAS_SIZE;
//   canvas.height = CANVAS_SIZE;
//   const ctx = canvas.getContext("2d")!;
//   ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//   const half = CANVAS_SIZE / 2;
//   const border = element.borderColor ?? "transparent";
//   if (glow) {
//     ctx.shadowColor = fillColor;
//     ctx.shadowBlur = 40;
//   }
//   ctx.fillStyle = fillColor;
//   ctx.strokeStyle = border;
//   ctx.lineWidth = 10;
//   switch (element.type) {
//     case "letter":
//       ctx.font = "bold 160px Inter, Arial, sans-serif";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       if (border !== "transparent")
//         ctx.strokeText(element.value ?? "?", half, half);
//       ctx.fillText(element.value ?? "?", half, half);
//       break;
//     case "circle":
//     case "bumper":
//       ctx.beginPath();
//       ctx.arc(half, half, 80, 0, Math.PI * 2);
//       ctx.fill();
//       if (border !== "transparent") ctx.stroke();
//       break;
//     case "arrow":
//       ctx.beginPath();
//       ctx.moveTo(40, 210);
//       ctx.lineTo(216, 210);
//       ctx.lineTo(128, 40);
//       ctx.closePath();
//       ctx.fill();
//       if (border !== "transparent") ctx.stroke();
//       break;
//     case "custom":
//     case "hole":
//     case "spring":
//       ctx.beginPath();
//       ctx.arc(half, half, 70, 0, Math.PI * 2);
//       ctx.fill();
//       if (border !== "transparent") {
//         ctx.lineWidth = 14;
//         ctx.stroke();
//       }
//       break;
//     case "flipper":
//       ctx.beginPath();
//       ctx.roundRect(20, half - 30, CANVAS_SIZE - 40, 60, 30);
//       ctx.fill();
//       if (border !== "transparent") {
//         ctx.lineWidth = 8;
//         ctx.stroke();
//       }
//       break;
//   }
//   const tex = new THREE.CanvasTexture(canvas);
//   tex.needsUpdate = true;
//   return tex;
// };

// // ─────────────────────────────────────────────
// // TYPES
// // ─────────────────────────────────────────────
// type GamePhase = "preview" | "focusing" | "ready" | "playing" | "gameover";
// type Props = {
//   muted: boolean;
//   setMuted: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const scrollingTexts: Record<string, string> = {
//   AiRobot:
//     "✦ WELCOME TO AI ROBOT ✦  Hit bumpers to light up ROBOT letters  ✦  Complete FUEL and TECH to trigger bonus  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
//   Mythology:
//     "✦ WELCOME TO MYTHOLOGY ✦  Hit bumpers to light up MYTHOLOGY letters  ✦  Complete the word for a bonus ball  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
//   Entity:
//     "✦ WELCOME TO ENTITY ✦  Light up ENTITY letters and bonus circles  ✦  Each bumper activates a random element  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
//   GoldWheel:
//     "✦ WELCOME TO GOLDWHEEL ✦  Complete GOLDWHEEL to earn an extra ball  ✦  Hit bumpers to activate letters  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
// };

// // ─────────────────────────────────────────────
// // CONSTANTES FLIPPER (visuelles uniquement)
// // ─────────────────────────────────────────────
// const FLIPPER_REST_L = 15;
// const FLIPPER_REST_R = -15;
// const FLIPPER_ACTIVE_L = -30;
// const FLIPPER_ACTIVE_R = 30;
// const FLIPPER_LERP = 0.3;

// // ─────────────────────────────────────────────
// // CONSTANTES RESSORT
// // ─────────────────────────────────────────────
// const SPRING_CHARGE_SPD = 0.018;
// const SPRING_MAX_COMPRESS = 0.55;
// const BALL_SPRING_TRAVEL = 0.8;
// const SPRING_REL_FRAMES = 8;

// // Rayon de la balle (unités monde)
// const BALL_RADIUS = 0.25;

// // ─────────────────────────────────────────────
// // COMPONENT
// // ─────────────────────────────────────────────
// const PinballGame: React.FC<Props> = ({ muted, setMuted }) => {
//   const { name } = useParams<{ name: PinballKey }>();
//   const tableKey = (name || "AiRobot") as PinballKey;
//   const tableConfig = pinballData[tableKey];

//   // ── Paramètres individuels par table ──
//   const BALL_START_X = tableConfig.ballStartX;
//   const BALL_START_Y = tableConfig.ballStartY;
//   const CAMERA_FOCUS_Y = tableConfig.cameraFocusY;

//   // ── Géométrie table (depuis tableConfig) ──
//   const BOUNDS = tableConfig.bounds;
//   const LANE = tableConfig.lane;
//   const FLIPPER_P = tableConfig.flipperPhysics;

//   const SPRING_MAX_FORCE = tableConfig.physics.springMaxForce ?? 0.3;
//   const SPRING_MIN_FORCE = tableConfig.physics.springMinForce ?? 0.1;

//   // ── Refs DOM / Audio ──
//   const mountRef = useRef<HTMLDivElement>(null);
//   const previewMusic = useRef<HTMLAudioElement | null>(null);
//   const launchMusic = useRef<HTMLAudioElement | null>(null);
//   const gameMusic = useRef<HTMLAudioElement | null>(null);
//   const endMusic = useRef<HTMLAudioElement | null>(null);

//   // ── Refs 3D ──
//   const ballRef = useRef<THREE.Mesh | null>(null);
//   const elementsRef = useRef<THREE.Mesh[]>([]);
//   const elementsStateRef = useRef<boolean[]>([]);
//   const textureCacheRef = useRef<Map<string, THREE.Texture>>(new Map());

//   // ── Refs flippers ──
//   const flipperLeftMeshRef = useRef<THREE.Mesh | null>(null);
//   const flipperRightMeshRef = useRef<THREE.Mesh | null>(null);
//   const flipperLeftAngle = useRef(FLIPPER_REST_L);
//   const flipperRightAngle = useRef(FLIPPER_REST_R);
//   const shiftLeftRef = useRef(false);
//   const shiftRightRef = useRef(false);

//   // ── Refs ressort ──
//   const springMeshRef = useRef<THREE.Mesh | null>(null);
//   const springBaseY = useRef(0);
//   const springChargeRef = useRef(0);
//   const springChargingRef = useRef(false);
//   const springReleasingRef = useRef(false);
//   const springReleaseTimerRef = useRef(0);

//   // ── Physique 2D ──
//   const ballXRef = useRef(BALL_START_X);
//   const ballYRef = useRef(BALL_START_Y);
//   const velXRef = useRef(0);
//   const velYRef = useRef(0);
//   // true = balle dans le lane (X fixe), false = table principale
//   const inLaneRef = useRef(true);

//   // ── Gameplay ──
//   const phaseRef = useRef<GamePhase>("preview");
//   const multiplierRef = useRef(1);

//   // ── Caméra preview ──
//   const previewDirRef = useRef<1 | -1>(1);
//   const previewYRef = useRef(0);

//   const [loading, setLoading] = useState(true);
//   const [score, setScore] = useState(0);
//   const [ballsLeft, setBallsLeft] = useState(3);
//   const [phase, setPhase] = useState<GamePhase>("preview");

//   const minY = 0.5;
//   const maxY = BOUNDS.top;
//   const previewMinY = 0;
//   const previewMaxY = 16.15;
//   const previewSpeed = 0.02;
//   const FOCUS_THRESHOLD = 0.05;

//   // ── Audio helpers ──
//   const stopAll = () =>
//     [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
//       if (r.current) {
//         r.current.pause();
//         r.current.currentTime = 0;
//       }
//     });
//   const syncMute = (m: boolean) =>
//     [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
//       if (r.current) r.current.muted = m;
//     });

//   useEffect(() => {
//     previewMusic.current = new Audio(tableConfig.musicPreview);
//     launchMusic.current = new Audio(tableConfig.launch);
//     gameMusic.current = new Audio(tableConfig.musicGame);
//     endMusic.current = new Audio(tableConfig.musicEnd);
//     previewMusic.current.loop = true;
//     gameMusic.current.loop = true;
//     endMusic.current.loop = false;
//     syncMute(muted);
//     previewMusic.current.play().catch(() => {});
//     return () => stopAll();
//   }, [tableKey]);

//   useEffect(() => syncMute(muted), [muted]);

//   // ── THREE SCENE ──
//   useEffect(() => {
//     if (!mountRef.current) return;
//     setLoading(true);
//     textureCacheRef.current.clear();
//     flipperLeftMeshRef.current = null;
//     flipperRightMeshRef.current = null;
//     springMeshRef.current = null;

//     const manager = new THREE.LoadingManager();
//     manager.onLoad = () => setTimeout(() => setLoading(false), 1200);
//     const loader = new THREE.TextureLoader(manager);

//     const getTexture = (src: string): THREE.Texture => {
//       if (textureCacheRef.current.has(src))
//         return textureCacheRef.current.get(src)!;
//       const tex = loader.load(src);
//       textureCacheRef.current.set(src, tex);
//       return tex;
//     };

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;
//     renderer.setSize(width, height);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mountRef.current.innerHTML = "";
//     mountRef.current.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();
//     const aspect = width / height;
//     const vs = 4.7;
//     const camera = new THREE.OrthographicCamera(
//       -vs * aspect,
//       vs * aspect,
//       vs,
//       -vs,
//       0.1,
//       100,
//     );
//     camera.position.set(0, previewYRef.current, 10);

//     // Table
//     const table = new THREE.Mesh(
//       new THREE.PlaneGeometry(10, 20),
//       new THREE.MeshBasicMaterial({
//         map: loader.load(tableConfig.img),
//         transparent: true,
//       }),
//     );
//     table.position.set(0, 10, 0);
//     scene.add(table);

//     // Balle
//     const ball = new THREE.Mesh(
//       new THREE.CircleGeometry(BALL_RADIUS, 32),
//       new THREE.MeshBasicMaterial({
//         map: loader.load(tableConfig.ballImg),
//         transparent: true,
//       }),
//     );
//     ball.position.set(BALL_START_X, BALL_START_Y, 2);
//     scene.add(ball);
//     ballRef.current = ball;

//     // Reset physique
//     ballXRef.current = BALL_START_X;
//     ballYRef.current = BALL_START_Y;
//     velXRef.current = 0;
//     velYRef.current = 0;
//     inLaneRef.current = true;

//     // Éléments
//     elementsRef.current = [];
//     elementsStateRef.current = tableConfig.elements.map(() => false);

//     tableConfig.elements.forEach((el: LightElement) => {
//       const s = el.size ?? 0.9;
//       const w = el.width ?? s;
//       const h = el.height ?? s;
//       const initTex = el.imgOff
//         ? getTexture(el.imgOff)
//         : createElementTexture(el, "#222");

//       const mesh = new THREE.Mesh(
//         new THREE.PlaneGeometry(w, h),
//         new THREE.MeshBasicMaterial({ map: initTex, transparent: true }),
//       );
//       mesh.position.set(el.x, el.y, 1.5);
//       if (el.rotation !== undefined)
//         mesh.rotation.z = THREE.MathUtils.degToRad(-el.rotation);
//       scene.add(mesh);
//       elementsRef.current.push(mesh);

//       if (el.id === "flipper_left") flipperLeftMeshRef.current = mesh;
//       if (el.id === "flipper_right") flipperRightMeshRef.current = mesh;
//       if (el.id === "spring") {
//         springMeshRef.current = mesh;
//         springBaseY.current = el.y;
//       }
//     });

//     // ─────────────────────────────────────────
//     // RESET BALLE — balle perdue ou trou
//     // ─────────────────────────────────────────
//     const resetBall = () => {
//       velXRef.current = 0;
//       velYRef.current = 0;
//       ballXRef.current = BALL_START_X;
//       ballYRef.current = BALL_START_Y;
//       inLaneRef.current = true;

//       springChargeRef.current = 0;
//       springChargingRef.current = false;
//       springReleasingRef.current = false;
//       springReleaseTimerRef.current = 0;

//       if (springMeshRef.current) {
//         springMeshRef.current.visible = true;
//         springMeshRef.current.scale.y = 1;
//         springMeshRef.current.position.y = springBaseY.current;
//       }
//       if (ballRef.current) {
//         ballRef.current.position.x = BALL_START_X;
//         ballRef.current.position.y = BALL_START_Y;
//       }

//       setBallsLeft((prev) => {
//         const next = prev - 1;
//         if (next <= 0) {
//           gameMusic.current?.pause();
//           if (endMusic.current) {
//             endMusic.current.currentTime = 0;
//             endMusic.current.play().catch(() => {});
//           }
//           phaseRef.current = "gameover";
//           setPhase("gameover");
//         } else {
//           phaseRef.current = "focusing";
//           setPhase("focusing");
//         }
//         return next;
//       });
//     };

//     // ── GAME LOOP ──
//     let animId: number;

//     const animate = () => {
//       animId = requestAnimationFrame(animate);
//       const cur = phaseRef.current;

//       // ── PREVIEW ──
//       if (cur === "preview") {
//         previewYRef.current += previewSpeed * previewDirRef.current;
//         if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
//         if (previewYRef.current <= previewMinY) previewDirRef.current = 1;
//         camera.position.y = previewYRef.current;
//       }

//       // ── FOCUSING — caméra lerp vers CAMERA_FOCUS_Y ──
//       if (cur === "focusing") {
//         previewYRef.current = THREE.MathUtils.lerp(
//           previewYRef.current,
//           CAMERA_FOCUS_Y,
//           0.08,
//         );
//         camera.position.y = previewYRef.current;
//         if (Math.abs(previewYRef.current - CAMERA_FOCUS_Y) < FOCUS_THRESHOLD) {
//           previewYRef.current = CAMERA_FOCUS_Y;
//           camera.position.y = CAMERA_FOCUS_Y;
//           phaseRef.current = "ready";
//           setPhase("ready");
//         }
//       }

//       // ── CLIGNOTEMENT (preview + focusing + ready) ──
//       if (cur === "preview" || cur === "focusing" || cur === "ready") {
//         const time = Date.now() * 0.005;
//         elementsRef.current.forEach((mesh, i) => {
//           const el = tableConfig.elements[i];
//           const mat = mesh.material as THREE.MeshBasicMaterial;
//           if (el.type === "spring" || el.alwaysOn) {
//             mat.opacity = 1;
//             mat.needsUpdate = true;
//             return;
//           }
//           const on = Math.sin(time + i * 0.8) > 0;
//           if (el.imgOff && el.imgOn) {
//             mat.map = getTexture(on ? el.imgOn : el.imgOff);
//             mat.opacity = 1;
//           } else if (el.imgOff) {
//             mat.map = getTexture(el.imgOff);
//             mat.opacity = on ? 1 : 0.15;
//           } else {
//             mat.map = createElementTexture(
//               el,
//               on ? tableConfig.themeColor : "#111",
//             );
//             mat.opacity = 1;
//           }
//           mat.needsUpdate = true;
//         });
//       }

//       // ── FLIPPERS VISUELS — actifs dès ready ──
//       if (cur === "ready" || cur === "playing") {
//         const tL = shiftLeftRef.current ? FLIPPER_ACTIVE_L : FLIPPER_REST_L;
//         const tR = shiftRightRef.current ? FLIPPER_ACTIVE_R : FLIPPER_REST_R;
//         flipperLeftAngle.current = THREE.MathUtils.lerp(
//           flipperLeftAngle.current,
//           tL,
//           FLIPPER_LERP,
//         );
//         flipperRightAngle.current = THREE.MathUtils.lerp(
//           flipperRightAngle.current,
//           tR,
//           FLIPPER_LERP,
//         );
//         if (flipperLeftMeshRef.current)
//           flipperLeftMeshRef.current.rotation.z = THREE.MathUtils.degToRad(
//             -flipperLeftAngle.current,
//           );
//         if (flipperRightMeshRef.current)
//           flipperRightMeshRef.current.rotation.z = THREE.MathUtils.degToRad(
//             -flipperRightAngle.current,
//           );
//       }

//       // ── RESSORT — compression visuelle pendant "ready" ──
//       if (cur === "ready" && springMeshRef.current) {
//         const spring = springMeshRef.current;
//         if (springChargingRef.current) {
//           springChargeRef.current = Math.min(
//             springChargeRef.current + SPRING_CHARGE_SPD,
//             1,
//           );
//           const compress = springChargeRef.current * SPRING_MAX_COMPRESS;
//           spring.scale.y = 1 - compress;
//           spring.position.y = springBaseY.current - compress * 0.3;
//           // La balle descend avec le ressort
//           const newBallY =
//             BALL_START_Y - springChargeRef.current * BALL_SPRING_TRAVEL;
//           ballYRef.current = newBallY;
//           if (ballRef.current) ballRef.current.position.y = newBallY;
//         } else if (springReleasingRef.current) {
//           springReleaseTimerRef.current += 1;
//           spring.scale.y = THREE.MathUtils.lerp(spring.scale.y, 1, 0.45);
//           spring.position.y = THREE.MathUtils.lerp(
//             spring.position.y,
//             springBaseY.current,
//             0.45,
//           );
//           if (
//             springReleaseTimerRef.current >= SPRING_REL_FRAMES ||
//             Math.abs(spring.scale.y - 1) < 0.01
//           ) {
//             spring.scale.y = 1;
//             spring.position.y = springBaseY.current;
//             springReleasingRef.current = false;
//             springReleaseTimerRef.current = 0;
//           }
//         }
//       }

//       // ─────────────────────────────────────────
//       // ── PLAYING — PHYSIQUE 2D ──
//       // ─────────────────────────────────────────
//       if (cur === "playing") {
//         if (springMeshRef.current) springMeshRef.current.visible = false;

//         // Paramètres physique depuis tableConfig
//         const gravity = tableConfig.physics.gravity; // ex: -0.004
//         const bounce = tableConfig.physics.bounce; // ex: 0.8

//         // Gravité — s'applique toujours à velY
//         velYRef.current += gravity;

//         // ──────────────────────────────────────
//         // CAS 1 : BALLE DANS LE LANE
//         // X fixe = BALL_START_X, seul Y bouge
//         // ──────────────────────────────────────
//         if (inLaneRef.current) {
//           ballYRef.current += velYRef.current;

//           // Sortie du lane → entrée dans la table principale
//           // LANE.exitY et LANE.entryVelX viennent de tableConfig
//           if (ballYRef.current >= LANE.exitY) {
//             inLaneRef.current = false;
//             ballXRef.current = BOUNDS.right - 0.2; // côté droit de la table
//             velXRef.current = LANE.entryVelX; // courbure de sortie (négatif = vers la gauche)
//             if (LANE.entryVelY !== undefined) velYRef.current = LANE.entryVelY;
//           }

//           // Balle perdue dans le lane (redescend sans être frappée)
//           if (ballYRef.current <= minY) resetBall();

//           // ──────────────────────────────────────
//           // CAS 2 : BALLE DANS LA TABLE PRINCIPALE
//           // Physique 2D complète
//           // ──────────────────────────────────────
//         } else {
//           ballXRef.current += velXRef.current;
//           ballYRef.current += velYRef.current;

//           // ── Murs gauche / droit / plafond ──
//           // Valeurs de BOUNDS viennent de tableConfig
//           if (ballXRef.current <= BOUNDS.left + BALL_RADIUS) {
//             ballXRef.current = BOUNDS.left + BALL_RADIUS;
//             velXRef.current = Math.abs(velXRef.current) * bounce;
//           }
//           if (ballXRef.current >= BOUNDS.right - BALL_RADIUS) {
//             ballXRef.current = BOUNDS.right - BALL_RADIUS;
//             velXRef.current = -Math.abs(velXRef.current) * bounce;
//           }
//           if (ballYRef.current >= BOUNDS.top - BALL_RADIUS) {
//             ballYRef.current = BOUNDS.top - BALL_RADIUS;
//             velYRef.current = -Math.abs(velYRef.current) * bounce;
//           }

//           // ── Bumpers & Holes — collision par distance 2D ──
//           tableConfig.colliders.forEach((c: Collider) => {
//             const dx = ballXRef.current - c.x;
//             const dy = ballYRef.current - c.y;
//             const dist = Math.sqrt(dx * dx + dy * dy);
//             const minD = c.radius + BALL_RADIUS;

//             if (dist < minD && dist > 0.001) {
//               // Vecteur normal normalisé (centre collider → balle)
//               const nx = dx / dist;
//               const ny = dy / dist;

//               // Sortir la balle du collider (évite le tunneling)
//               ballXRef.current = c.x + nx * (minD + 0.02);
//               ballYRef.current = c.y + ny * (minD + 0.02);

//               if (c.type === "bumper") {
//                 // Réflexion physique avec coefficient bounce
//                 const dot = velXRef.current * nx + velYRef.current * ny;
//                 let newVx = (velXRef.current - 2 * dot * nx) * bounce;
//                 let newVy = (velYRef.current - 2 * dot * ny) * bounce;

//                 // Force minimale garantie par le bumper
//                 const speed = Math.sqrt(newVx * newVx + newVy * newVy);
//                 const minF = c.force ?? 0.08;
//                 if (speed < minF) {
//                   newVx = nx * minF;
//                   newVy = ny * minF;
//                 }
//                 velXRef.current = newVx;
//                 velYRef.current = newVy;

//                 // Score
//                 setScore((s) => s + c.score * multiplierRef.current);

//                 // Activer un élément visuel aléatoire (uniquement blink, pas alwaysOn)
//                 const inactive = elementsStateRef.current
//                   .map((v, i) => {
//                     const el = tableConfig.elements[i];
//                     return !v && el.blink && !el.alwaysOn ? i : -1;
//                   })
//                   .filter((i) => i !== -1);

//                 if (inactive.length > 0) {
//                   const pick =
//                     inactive[Math.floor(Math.random() * inactive.length)];
//                   elementsStateRef.current[pick] = true;
//                   const el = tableConfig.elements[pick];
//                   const mat = elementsRef.current[pick]
//                     .material as THREE.MeshBasicMaterial;
//                   if (el.imgOn) {
//                     mat.map = getTexture(el.imgOn);
//                   } else if (el.imgOff) {
//                     mat.map = getTexture(el.imgOff);
//                     mat.opacity = 1;
//                   } else {
//                     mat.map = createElementTexture(
//                       el,
//                       tableConfig.themeColor,
//                       true,
//                     );
//                   }
//                   mat.needsUpdate = true;
//                 }
//               } else if (c.type === "hole") {
//                 // Trou → score + perte de balle
//                 setScore((s) => s + c.score * multiplierRef.current);
//                 resetBall();
//                 return;
//               }
//             }
//           });

//           // ── Flippers — physique de tir ──
//           // Positions des flippers lues depuis les éléments data
//           const fLEl = tableConfig.elements.find(
//             (e) => e.id === "flipper_left",
//           );
//           const fREl = tableConfig.elements.find(
//             (e) => e.id === "flipper_right",
//           );
//           const fLX = fLEl?.x ?? -1.35;
//           const fLY = fLEl?.y ?? 2.2;
//           const fRX = fREl?.x ?? 1.2;
//           const fRY = fREl?.y ?? 2.1;

//           // Paramètres physique flippers depuis tableConfig
//           const halfLen = FLIPPER_P.halfLen;
//           const thickness = FLIPPER_P.thickness;
//           const kickVY = FLIPPER_P.kickVY;
//           const kickVX = FLIPPER_P.kickVX;
//           const passiveBounce = FLIPPER_P.passiveBounce;

//           // Flipper gauche (ShiftLeft)
//           if (
//             Math.abs(ballXRef.current - fLX) < halfLen + BALL_RADIUS &&
//             ballYRef.current >= fLY - thickness &&
//             ballYRef.current <= fLY + thickness &&
//             velYRef.current < 0
//           ) {
//             ballYRef.current = fLY + thickness + BALL_RADIUS;
//             if (shiftLeftRef.current) {
//               velXRef.current = kickVX;
//               velYRef.current = kickVY;
//             } else {
//               velYRef.current = Math.abs(velYRef.current) * passiveBounce;
//               velXRef.current *= passiveBounce;
//             }
//           }

//           // Flipper droit (ShiftRight)
//           if (
//             Math.abs(ballXRef.current - fRX) < halfLen + BALL_RADIUS &&
//             ballYRef.current >= fRY - thickness &&
//             ballYRef.current <= fRY + thickness &&
//             velYRef.current < 0
//           ) {
//             ballYRef.current = fRY + thickness + BALL_RADIUS;
//             if (shiftRightRef.current) {
//               velXRef.current = -kickVX;
//               velYRef.current = kickVY;
//             } else {
//               velYRef.current = Math.abs(velYRef.current) * passiveBounce;
//               velXRef.current *= passiveBounce;
//             }
//           }

//           // Balle perdue (passe sous les flippers)
//           if (ballYRef.current <= minY) resetBall();
//         }

//         // ── Clamp final ──
//         ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);

//         // ── Position 3D balle ──
//         if (ballRef.current) {
//           ballRef.current.position.x = inLaneRef.current
//             ? BALL_START_X
//             : ballXRef.current;
//           ballRef.current.position.y = ballYRef.current;
//         }

//         // ── Caméra suit la balle (axe Y) ──
//         camera.position.y = THREE.MathUtils.lerp(
//           camera.position.y,
//           ballYRef.current,
//           0.2,
//         );

//         // ── Multiplicateur ──
//         const active = elementsStateRef.current.filter(Boolean).length;
//         multiplierRef.current = Math.min(
//           1 + active,
//           tableConfig.scoring.multiplierMax,
//         );

//         // ── Tous les éléments interactifs allumés → extra ball + reset ──
//         const interactiveCount = tableConfig.elements.filter(
//           (e) => e.blink && !e.alwaysOn,
//         ).length;
//         const litCount = elementsStateRef.current.filter(
//           (v, i) => v && tableConfig.elements[i].blink,
//         ).length;

//         if (interactiveCount > 0 && litCount >= interactiveCount) {
//           setBallsLeft((b) => b + 1);
//           elementsStateRef.current = elementsStateRef.current.map(() => false);
//           elementsRef.current.forEach((mesh, i) => {
//             const el = tableConfig.elements[i];
//             const mat = mesh.material as THREE.MeshBasicMaterial;
//             if (el.imgOff) {
//               mat.map = getTexture(el.imgOff);
//               mat.opacity = el.alwaysOn ? 1 : 0.15;
//             } else {
//               mat.map = createElementTexture(el, "#222");
//             }
//             mat.needsUpdate = true;
//           });
//         }
//       }

//       renderer.render(scene, camera);
//     };

//     animate();
//     return () => {
//       cancelAnimationFrame(animId);
//       renderer.dispose();
//       textureCacheRef.current.clear();
//     };
//   }, [tableKey]);

//   // ── CONTROLS ──
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (
//         e.code === "ArrowDown" &&
//         phaseRef.current === "ready" &&
//         !springChargingRef.current
//       ) {
//         springChargingRef.current = true;
//         springReleasingRef.current = false;
//         springReleaseTimerRef.current = 0;
//       }
//       if (e.code === "ShiftLeft") shiftLeftRef.current = true;
//       if (e.code === "ShiftRight") shiftRightRef.current = true;
//     };

//     const onKeyUp = (e: KeyboardEvent) => {
//       // ENTRÉE → focusing
//       if (e.code === "Enter" && phaseRef.current === "preview") {
//         phaseRef.current = "focusing";
//         setPhase("focusing");
//         previewMusic.current?.pause();
//         if (launchMusic.current) {
//           launchMusic.current.loop = true;
//           launchMusic.current.currentTime = 0;
//           launchMusic.current.play().catch(() => {});
//         }
//       }

//       // FLÈCHE BAS relâchée → lance la balle avec la force accumulée
//       if (e.code === "ArrowDown" && phaseRef.current === "ready") {
//         const force =
//           SPRING_MIN_FORCE +
//           springChargeRef.current * (SPRING_MAX_FORCE - SPRING_MIN_FORCE);
//         springChargingRef.current = false;
//         springReleasingRef.current = true;
//         springReleaseTimerRef.current = 0;

//         // 80ms de délai pour voir le ressort se détendre avant que la balle parte
//         setTimeout(() => {
//           springChargeRef.current = 0;
//           velXRef.current = 0;
//           velYRef.current = force;
//           inLaneRef.current = true; // la balle repart dans le lane vers le haut

//           phaseRef.current = "playing";
//           setPhase("playing");

//           if (launchMusic.current) {
//             launchMusic.current.loop = false;
//             launchMusic.current.pause();
//           }
//           if (gameMusic.current) {
//             gameMusic.current.currentTime = 0;
//             gameMusic.current.play().catch(() => {});
//           }
//         }, 80);
//       }

//       if (e.code === "ShiftLeft") shiftLeftRef.current = false;
//       if (e.code === "ShiftRight") shiftRightRef.current = false;
//     };

//     window.addEventListener("keydown", onKeyDown);
//     window.addEventListener("keyup", onKeyUp);
//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("keyup", onKeyUp);
//     };
//   }, []);

//   // ── JSX ──
//   const showScroll = phase === "preview" || phase === "focusing";
//   const scrollText = scrollingTexts[tableKey] ?? "";
//   const scrollDuration = Math.max(16, Math.round(scrollText.length * 0.09));

//   return (
//     <S.MainContainer>
//       <S.HUD>
//         {showScroll ? (
//           <S.ScrollingText duration={scrollDuration}>
//             {scrollText}
//           </S.ScrollingText>
//         ) : (
//           <S.Score>
//             {score.toString().padStart(6, "0")}
//             {"  "}
//             {"🟠".repeat(Math.max(0, ballsLeft))}
//           </S.Score>
//         )}
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
import { pinballData, Collider, PinballKey, LightElement } from "./pinballData";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Pinball.styled";

// ─────────────────────────────────────────────
// TEXTURE CANVAS — appelé UNE SEULE FOIS à l'init, jamais dans la boucle
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
    case "bumper":
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
    case "hole":
    case "spring":
      ctx.beginPath();
      ctx.arc(half, half, 70, 0, Math.PI * 2);
      ctx.fill();
      if (border !== "transparent") {
        ctx.lineWidth = 14;
        ctx.stroke();
      }
      break;
    case "flipper":
      ctx.beginPath();
      ctx.roundRect(20, half - 30, CANVAS_SIZE - 40, 60, 30);
      ctx.fill();
      if (border !== "transparent") {
        ctx.lineWidth = 8;
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
type GamePhase = "preview" | "focusing" | "ready" | "playing" | "gameover";
type Props = {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

// Paire de textures pré-calculée pour chaque élément
interface ElementTexturePair {
  off: THREE.Texture; // état éteint / repos
  on: THREE.Texture; // état allumé / actif
}

const scrollingTexts: Record<string, string> = {
  AiRobot:
    "✦ WELCOME TO AI ROBOT ✦  Hit bumpers to light up ROBOT letters  ✦  Complete FUEL and TECH to trigger bonus  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
  Mythology:
    "✦ WELCOME TO MYTHOLOGY ✦  Hit bumpers to light up MYTHOLOGY letters  ✦  Complete the word for a bonus ball  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
  Entity:
    "✦ WELCOME TO ENTITY ✦  Light up ENTITY letters and bonus circles  ✦  Each bumper activates a random element  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
  GoldWheel:
    "✦ WELCOME TO GOLDWHEEL ✦  Complete GOLDWHEEL to earn an extra ball  ✦  Hit bumpers to activate letters  ✦  Press ENTER when ready  ✦  Hold ARROW DOWN to compress — release to launch  ✦  SHIFT LEFT / RIGHT for flippers  ✦",
};

// Flipper angles visuels
const FLIPPER_REST_L = 15;
const FLIPPER_REST_R = -15;
const FLIPPER_ACTIVE_L = -30;
const FLIPPER_ACTIVE_R = 30;
const FLIPPER_LERP = 0.3;

// Ressort
const SPRING_CHARGE_SPD = 0.018;
const SPRING_MAX_COMPRESS = 0.55;
const BALL_SPRING_TRAVEL = 0.8;
const SPRING_REL_FRAMES = 8;

const BALL_RADIUS = 0.25;

// Intervalle minimal entre deux setState score (ms) — évite les re-renders à 60fps
const SCORE_UPDATE_INTERVAL = 80;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
const PinballGame: React.FC<Props> = ({ muted, setMuted }) => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "AiRobot") as PinballKey;
  const tableConfig = pinballData[tableKey];

  const BALL_START_X = tableConfig.ballStartX;
  const BALL_START_Y = tableConfig.ballStartY;
  const CAMERA_FOCUS_Y = tableConfig.cameraFocusY;
  const BOUNDS = tableConfig.bounds;
  const LANE = tableConfig.lane;
  const FLIPPER_P = tableConfig.flipperPhysics;
  const SPRING_MAX_FORCE = tableConfig.physics.springMaxForce ?? 0.3;
  const SPRING_MIN_FORCE = tableConfig.physics.springMinForce ?? 0.1;

  const mountRef = useRef<HTMLDivElement>(null);

  // Audio
  const previewMusic = useRef<HTMLAudioElement | null>(null);
  const launchMusic = useRef<HTMLAudioElement | null>(null);
  const gameMusic = useRef<HTMLAudioElement | null>(null);
  const endMusic = useRef<HTMLAudioElement | null>(null);

  // 3D
  const ballRef = useRef<THREE.Mesh | null>(null);
  const elementsRef = useRef<THREE.Mesh[]>([]);
  const elementsStateRef = useRef<boolean[]>([]);

  // ✅ OPTIMISATION 1 — Textures pré-calculées une fois à l'init
  // Jamais recréées dans la boucle animate
  const elementTexturesRef = useRef<ElementTexturePair[]>([]);

  // ✅ OPTIMISATION 2 — Cache PNG : loader.load uniquement à l'init
  const textureCacheRef = useRef<Map<string, THREE.Texture>>(new Map());

  // Flippers
  const flipperLeftMeshRef = useRef<THREE.Mesh | null>(null);
  const flipperRightMeshRef = useRef<THREE.Mesh | null>(null);
  const flipperLeftAngle = useRef(FLIPPER_REST_L);
  const flipperRightAngle = useRef(FLIPPER_REST_R);
  const shiftLeftRef = useRef(false);
  const shiftRightRef = useRef(false);

  // ✅ OPTIMISATION 3 — Position flippers mémorisée à l'init, pas de find() dans la boucle
  const flipperLPosRef = useRef({ x: -1.35, y: 2.2 });
  const flipperRPosRef = useRef({ x: 1.2, y: 2.1 });

  // Ressort
  const springMeshRef = useRef<THREE.Mesh | null>(null);
  const springBaseY = useRef(0);
  const springChargeRef = useRef(0);
  const springChargingRef = useRef(false);
  const springReleasingRef = useRef(false);
  const springReleaseTimerRef = useRef(0);

  // Physique 2D
  const ballXRef = useRef(BALL_START_X);
  const ballYRef = useRef(BALL_START_Y);
  const velXRef = useRef(0);
  const velYRef = useRef(0);
  const inLaneRef = useRef(true);

  // Gameplay
  const phaseRef = useRef<GamePhase>("preview");
  const multiplierRef = useRef(1);

  // ✅ OPTIMISATION 4 — Score et ballsLeft en ref + setState throttlé
  // Évite les re-renders React à 60fps
  const scoreRef = useRef(0);
  const ballsLeftRef = useRef(3);
  const lastScoreUpdateRef = useRef(0);
  const lastBallsUpdateRef = useRef(0);

  // Camera
  const previewDirRef = useRef<1 | -1>(1);
  const previewYRef = useRef(0);

  // States React — mis à jour de façon throttlée uniquement
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [ballsLeft, setBallsLeft] = useState(3);
  const [phase, setPhase] = useState<GamePhase>("preview");

  const minY = 0.5;
  const maxY = BOUNDS.top;
  const previewMinY = 0;
  const previewMaxY = 16.15;
  const previewSpeed = 0.02;
  const FOCUS_THRESHOLD = 0.05;

  // Audio helpers
  const stopAll = () =>
    [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
      if (r.current) {
        r.current.pause();
        r.current.currentTime = 0;
      }
    });
  const syncMute = (m: boolean) =>
    [previewMusic, launchMusic, gameMusic, endMusic].forEach((r) => {
      if (r.current) r.current.muted = m;
    });

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

  // ── THREE SCENE ──
  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);
    textureCacheRef.current.clear();
    elementTexturesRef.current = [];
    flipperLeftMeshRef.current = null;
    flipperRightMeshRef.current = null;
    springMeshRef.current = null;
    scoreRef.current = 0;
    ballsLeftRef.current = 3;
    setScore(0);
    setBallsLeft(3);

    const manager = new THREE.LoadingManager();
    manager.onLoad = () => setTimeout(() => setLoading(false), 1200);
    const loader = new THREE.TextureLoader(manager);

    // ✅ getTexture — loader.load uniquement à l'init, résultat mis en cache
    const getTexture = (src: string): THREE.Texture => {
      if (textureCacheRef.current.has(src))
        return textureCacheRef.current.get(src)!;
      const tex = loader.load(src);
      textureCacheRef.current.set(src, tex);
      return tex;
    };

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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

    // Table
    const table = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 20),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.img),
        transparent: true,
      }),
    );
    table.position.set(0, 10, 0);
    scene.add(table);

    // Balle
    const ball = new THREE.Mesh(
      new THREE.CircleGeometry(BALL_RADIUS, 32),
      new THREE.MeshBasicMaterial({
        map: loader.load(tableConfig.ballImg),
        transparent: true,
      }),
    );
    ball.position.set(BALL_START_X, BALL_START_Y, 2);
    scene.add(ball);
    ballRef.current = ball;

    // Reset physique
    ballXRef.current = BALL_START_X;
    ballYRef.current = BALL_START_Y;
    velXRef.current = 0;
    velYRef.current = 0;
    inLaneRef.current = true;

    // ─────────────────────────────────────────
    // ÉLÉMENTS + PRÉ-CALCUL DES TEXTURES
    // ✅ Toutes les textures On/Off sont créées ICI une seule fois
    // La boucle animate ne crée plus jamais de texture
    // ─────────────────────────────────────────
    elementsRef.current = [];
    elementsStateRef.current = tableConfig.elements.map(() => false);
    elementTexturesRef.current = [];

    tableConfig.elements.forEach((el: LightElement) => {
      const s = el.size ?? 0.9;
      const w = el.width ?? s;
      const h = el.height ?? s;

      // ── Texture OFF (état initial) ──
      const texOff: THREE.Texture = el.imgOff
        ? getTexture(el.imgOff)
        : createElementTexture(
            el,
            el.alwaysOn ? tableConfig.themeColor : "#222",
          );

      // ── Texture ON (état allumé) ──
      // Priorité : imgOn > imgOff avec opacité > canvas coloré
      const texOn: THREE.Texture = el.imgOn
        ? getTexture(el.imgOn)
        : el.imgOff
          ? getTexture(el.imgOff) // PNG unique → même texture, on jouera sur l'opacité
          : createElementTexture(el, tableConfig.themeColor, true);

      // ── Texture CLIGNOTEMENT OFF (version sombre pour le blink) ──
      // Pour les éléments canvas sans PNG : on pré-calcule aussi la version sombre
      const texBlinkOff: THREE.Texture =
        el.imgOff || el.alwaysOn ? texOff : createElementTexture(el, "#111");

      elementTexturesRef.current.push({
        off: texBlinkOff,
        on: texOn,
      });

      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ map: texOff, transparent: true }),
      );
      mesh.position.set(el.x, el.y, 1.5);
      if (el.rotation !== undefined)
        mesh.rotation.z = THREE.MathUtils.degToRad(-el.rotation);
      scene.add(mesh);
      elementsRef.current.push(mesh);

      // Mémorise positions flipper à l'init — ✅ évite find() dans la boucle
      if (el.id === "flipper_left") {
        flipperLeftMeshRef.current = mesh;
        flipperLPosRef.current = { x: el.x, y: el.y };
      }
      if (el.id === "flipper_right") {
        flipperRightMeshRef.current = mesh;
        flipperRPosRef.current = { x: el.x, y: el.y };
      }
      if (el.id === "spring") {
        springMeshRef.current = mesh;
        springBaseY.current = el.y;
      }
    });

    // ─────────────────────────────────────────
    // RESET BALLE
    // ─────────────────────────────────────────
    const resetBall = () => {
      velXRef.current = 0;
      velYRef.current = 0;
      ballXRef.current = BALL_START_X;
      ballYRef.current = BALL_START_Y;
      inLaneRef.current = true;
      springChargeRef.current = 0;
      springChargingRef.current = false;
      springReleasingRef.current = false;
      springReleaseTimerRef.current = 0;

      if (springMeshRef.current) {
        springMeshRef.current.visible = true;
        springMeshRef.current.scale.y = 1;
        springMeshRef.current.position.y = springBaseY.current;
      }
      if (ballRef.current) {
        ballRef.current.position.x = BALL_START_X;
        ballRef.current.position.y = BALL_START_Y;
      }

      const next = ballsLeftRef.current - 1;
      ballsLeftRef.current = next;
      setBallsLeft(next); // OK ici — appelé rarement (perte de balle)

      if (next <= 0) {
        gameMusic.current?.pause();
        if (endMusic.current) {
          endMusic.current.currentTime = 0;
          endMusic.current.play().catch(() => {});
        }
        phaseRef.current = "gameover";
        setPhase("gameover");
      } else {
        phaseRef.current = "focusing";
        setPhase("focusing");
      }
    };

    // ─────────────────────────────────────────
    // GAME LOOP
    // ─────────────────────────────────────────
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const cur = phaseRef.current;

      // ── PREVIEW ──
      if (cur === "preview") {
        previewYRef.current += previewSpeed * previewDirRef.current;
        if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
        if (previewYRef.current <= previewMinY) previewDirRef.current = 1;
        camera.position.y = previewYRef.current;
      }

      // ── FOCUSING ──
      if (cur === "focusing") {
        previewYRef.current = THREE.MathUtils.lerp(
          previewYRef.current,
          CAMERA_FOCUS_Y,
          0.08,
        );
        camera.position.y = previewYRef.current;
        if (Math.abs(previewYRef.current - CAMERA_FOCUS_Y) < FOCUS_THRESHOLD) {
          previewYRef.current = CAMERA_FOCUS_Y;
          camera.position.y = CAMERA_FOCUS_Y;
          phaseRef.current = "ready";
          setPhase("ready");
        }
      }

      // ── CLIGNOTEMENT (preview + focusing + ready) ──
      // ✅ OPTIMISATION : on swap simplement entre texOff/texOn pré-calculées
      // Zéro création de canvas, zéro appel loader.load
      if (cur === "preview" || cur === "focusing" || cur === "ready") {
        const time = Date.now() * 0.005;
        elementsRef.current.forEach((mesh, i) => {
          const el = tableConfig.elements[i];
          const mat = mesh.material as THREE.MeshBasicMaterial;
          const pair = elementTexturesRef.current[i];

          if (el.type === "spring" || el.alwaysOn) {
            mat.opacity = 1;
            mat.needsUpdate = true;
            return;
          }

          const on = Math.sin(time + i * 0.8) > 0;

          if (el.imgOff && el.imgOn) {
            // PNG Off/On → swap texture pré-chargée
            mat.map = on ? pair.on : pair.off;
            mat.opacity = 1;
          } else if (el.imgOff) {
            // PNG unique → opacité
            mat.map = pair.off;
            mat.opacity = on ? 1 : 0.15;
          } else {
            // Canvas → swap entre texOn/texOff pré-calculés
            mat.map = on ? pair.on : pair.off;
            mat.opacity = 1;
          }
          mat.needsUpdate = true;
        });
      }

      // ── FLIPPERS VISUELS ──
      if (cur === "ready" || cur === "playing") {
        const tL = shiftLeftRef.current ? FLIPPER_ACTIVE_L : FLIPPER_REST_L;
        const tR = shiftRightRef.current ? FLIPPER_ACTIVE_R : FLIPPER_REST_R;
        flipperLeftAngle.current = THREE.MathUtils.lerp(
          flipperLeftAngle.current,
          tL,
          FLIPPER_LERP,
        );
        flipperRightAngle.current = THREE.MathUtils.lerp(
          flipperRightAngle.current,
          tR,
          FLIPPER_LERP,
        );
        if (flipperLeftMeshRef.current)
          flipperLeftMeshRef.current.rotation.z = THREE.MathUtils.degToRad(
            -flipperLeftAngle.current,
          );
        if (flipperRightMeshRef.current)
          flipperRightMeshRef.current.rotation.z = THREE.MathUtils.degToRad(
            -flipperRightAngle.current,
          );
      }

      // ── RESSORT ──
      if (cur === "ready" && springMeshRef.current) {
        const spring = springMeshRef.current;
        if (springChargingRef.current) {
          springChargeRef.current = Math.min(
            springChargeRef.current + SPRING_CHARGE_SPD,
            1,
          );
          const compress = springChargeRef.current * SPRING_MAX_COMPRESS;
          spring.scale.y = 1 - compress;
          spring.position.y = springBaseY.current - compress * 0.3;
          const newBallY =
            BALL_START_Y - springChargeRef.current * BALL_SPRING_TRAVEL;
          ballYRef.current = newBallY;
          if (ballRef.current) ballRef.current.position.y = newBallY;
        } else if (springReleasingRef.current) {
          springReleaseTimerRef.current += 1;
          spring.scale.y = THREE.MathUtils.lerp(spring.scale.y, 1, 0.45);
          spring.position.y = THREE.MathUtils.lerp(
            spring.position.y,
            springBaseY.current,
            0.45,
          );
          if (
            springReleaseTimerRef.current >= SPRING_REL_FRAMES ||
            Math.abs(spring.scale.y - 1) < 0.01
          ) {
            spring.scale.y = 1;
            spring.position.y = springBaseY.current;
            springReleasingRef.current = false;
            springReleaseTimerRef.current = 0;
          }
        }
      }

      // ─────────────────────────────────────────
      // ── PLAYING — PHYSIQUE 2D ──
      // ─────────────────────────────────────────
      if (cur === "playing") {
        if (springMeshRef.current) springMeshRef.current.visible = false;

        const gravity = tableConfig.physics.gravity;
        const bounce = tableConfig.physics.bounce;

        velYRef.current += gravity;

        // ── LANE (X fixe) ──
        if (inLaneRef.current) {
          ballYRef.current += velYRef.current;

          if (ballYRef.current >= LANE.exitY) {
            inLaneRef.current = false;
            ballXRef.current = BOUNDS.right - 0.2;
            velXRef.current = LANE.entryVelX;
            if (LANE.entryVelY !== undefined) velYRef.current = LANE.entryVelY;
          }
          if (ballYRef.current <= minY) resetBall();

          // ── TABLE PRINCIPALE ──
        } else {
          ballXRef.current += velXRef.current;
          ballYRef.current += velYRef.current;

          // Murs
          if (ballXRef.current <= BOUNDS.left + BALL_RADIUS) {
            ballXRef.current = BOUNDS.left + BALL_RADIUS;
            velXRef.current = Math.abs(velXRef.current) * bounce;
          }
          if (ballXRef.current >= BOUNDS.right - BALL_RADIUS) {
            ballXRef.current = BOUNDS.right - BALL_RADIUS;
            velXRef.current = -Math.abs(velXRef.current) * bounce;
          }
          if (ballYRef.current >= BOUNDS.top - BALL_RADIUS) {
            ballYRef.current = BOUNDS.top - BALL_RADIUS;
            velYRef.current = -Math.abs(velYRef.current) * bounce;
          }

          // ── Bumpers & Holes — distance 2D ──
          tableConfig.colliders.forEach((c: Collider) => {
            const dx = ballXRef.current - c.x;
            const dy = ballYRef.current - c.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minD = c.radius + BALL_RADIUS;

            if (dist < minD && dist > 0.001) {
              const nx = dx / dist;
              const ny = dy / dist;
              ballXRef.current = c.x + nx * (minD + 0.02);
              ballYRef.current = c.y + ny * (minD + 0.02);

              if (c.type === "bumper") {
                const dot = velXRef.current * nx + velYRef.current * ny;
                let newVx = (velXRef.current - 2 * dot * nx) * bounce;
                let newVy = (velYRef.current - 2 * dot * ny) * bounce;
                const speed = Math.sqrt(newVx * newVx + newVy * newVy);
                const minF = c.force ?? 0.08;
                if (speed < minF) {
                  newVx = nx * minF;
                  newVy = ny * minF;
                }
                velXRef.current = newVx;
                velYRef.current = newVy;

                // ✅ Score en ref — setState throttlé
                scoreRef.current += c.score * multiplierRef.current;
                const now = Date.now();
                if (now - lastScoreUpdateRef.current > SCORE_UPDATE_INTERVAL) {
                  setScore(scoreRef.current);
                  lastScoreUpdateRef.current = now;
                }

                // Activer un élément visuel aléatoire
                const inactive = elementsStateRef.current
                  .map((v, i) =>
                    !v &&
                    tableConfig.elements[i].blink &&
                    !tableConfig.elements[i].alwaysOn
                      ? i
                      : -1,
                  )
                  .filter((i) => i !== -1);

                if (inactive.length > 0) {
                  const pick =
                    inactive[Math.floor(Math.random() * inactive.length)];
                  elementsStateRef.current[pick] = true;
                  const mat = elementsRef.current[pick]
                    .material as THREE.MeshBasicMaterial;
                  // ✅ Utilise la texture pré-calculée — zéro création
                  mat.map = elementTexturesRef.current[pick].on;
                  mat.opacity = 1;
                  mat.needsUpdate = true;
                }
              } else if (c.type === "hole") {
                scoreRef.current += c.score * multiplierRef.current;
                setScore(scoreRef.current);
                resetBall();
                return;
              }
            }
          });

          // ── Flippers — ✅ positions lues depuis flipperLPosRef/flipperRPosRef ──
          const { x: fLX, y: fLY } = flipperLPosRef.current;
          const { x: fRX, y: fRY } = flipperRPosRef.current;
          const { halfLen, thickness, kickVY, kickVX, passiveBounce } =
            FLIPPER_P;

          // Flipper gauche
          if (
            Math.abs(ballXRef.current - fLX) < halfLen + BALL_RADIUS &&
            ballYRef.current >= fLY - thickness &&
            ballYRef.current <= fLY + thickness &&
            velYRef.current < 0
          ) {
            ballYRef.current = fLY + thickness + BALL_RADIUS;
            if (shiftLeftRef.current) {
              velXRef.current = kickVX;
              velYRef.current = kickVY;
            } else {
              velYRef.current = Math.abs(velYRef.current) * passiveBounce;
              velXRef.current *= passiveBounce;
            }
          }

          // Flipper droit
          if (
            Math.abs(ballXRef.current - fRX) < halfLen + BALL_RADIUS &&
            ballYRef.current >= fRY - thickness &&
            ballYRef.current <= fRY + thickness &&
            velYRef.current < 0
          ) {
            ballYRef.current = fRY + thickness + BALL_RADIUS;
            if (shiftRightRef.current) {
              velXRef.current = -kickVX;
              velYRef.current = kickVY;
            } else {
              velYRef.current = Math.abs(velYRef.current) * passiveBounce;
              velXRef.current *= passiveBounce;
            }
          }

          if (ballYRef.current <= minY) resetBall();
        }

        // Clamp + mise à jour mesh balle
        ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);
        if (ballRef.current) {
          ballRef.current.position.x = inLaneRef.current
            ? BALL_START_X
            : ballXRef.current;
          ballRef.current.position.y = ballYRef.current;
        }

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

        // Tous les éléments interactifs allumés → extra ball
        const totalBlink = tableConfig.elements.filter(
          (e) => e.blink && !e.alwaysOn,
        ).length;
        const litBlink = elementsStateRef.current.filter(
          (v, i) => v && tableConfig.elements[i].blink,
        ).length;

        if (totalBlink > 0 && litBlink >= totalBlink) {
          ballsLeftRef.current += 1;
          setBallsLeft(ballsLeftRef.current);
          elementsStateRef.current = elementsStateRef.current.map(() => false);
          elementsRef.current.forEach((mesh, i) => {
            const el = tableConfig.elements[i];
            const mat = mesh.material as THREE.MeshBasicMaterial;
            // ✅ Texture pré-calculée — pas de création canvas
            mat.map = elementTexturesRef.current[i].off;
            mat.opacity = el.alwaysOn ? 1 : 0.15;
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
      textureCacheRef.current.clear();
    };
  }, [tableKey]);

  // ── CONTROLS ──
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.code === "ArrowDown" &&
        phaseRef.current === "ready" &&
        !springChargingRef.current
      ) {
        springChargingRef.current = true;
        springReleasingRef.current = false;
        springReleaseTimerRef.current = 0;
      }
      if (e.code === "ShiftLeft") shiftLeftRef.current = true;
      if (e.code === "ShiftRight") shiftRightRef.current = true;
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Enter" && phaseRef.current === "preview") {
        phaseRef.current = "focusing";
        setPhase("focusing");
        previewMusic.current?.pause();
        if (launchMusic.current) {
          launchMusic.current.loop = true;
          launchMusic.current.currentTime = 0;
          launchMusic.current.play().catch(() => {});
        }
      }

      if (e.code === "ArrowDown" && phaseRef.current === "ready") {
        const force =
          SPRING_MIN_FORCE +
          springChargeRef.current * (SPRING_MAX_FORCE - SPRING_MIN_FORCE);
        springChargingRef.current = false;
        springReleasingRef.current = true;
        springReleaseTimerRef.current = 0;

        setTimeout(() => {
          springChargeRef.current = 0;
          velXRef.current = 0;
          velYRef.current = force;
          inLaneRef.current = true;
          phaseRef.current = "playing";
          setPhase("playing");
          if (launchMusic.current) {
            launchMusic.current.loop = false;
            launchMusic.current.pause();
          }
          if (gameMusic.current) {
            gameMusic.current.currentTime = 0;
            gameMusic.current.play().catch(() => {});
          }
        }, 80);
      }

      if (e.code === "ShiftLeft") shiftLeftRef.current = false;
      if (e.code === "ShiftRight") shiftRightRef.current = false;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  // ── JSX ──
  const showScroll = phase === "preview" || phase === "focusing";
  const scrollText = scrollingTexts[tableKey] ?? "";
  const scrollDuration = Math.max(16, Math.round(scrollText.length * 0.09));

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