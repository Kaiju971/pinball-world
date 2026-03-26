// import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
// import MythologyImg from "../assets/images/MYTHOLOGY PINBALL.png";
// import EntityImg from "../assets/images/ENTITY PINBALL.png";
// import GoldWheelImg from "../assets/images/GOLDWHEEL PINBALL.png";
// // 🎵 musiques MYTHOLOGY
// import MythologyMusic from "../assets/audio/RiseOfTheHero.wav";
// import IntroMythology from "../assets/audio/IntroMytho.mp3";
// import LaunchMythology from "../assets/audio/LaunchMytho.mp3";
// import EndMythology from "../assets/audio/EndMytho.mp3";
// import ExtraBallMythology from "../assets/audio/BonusExtraBallMytho.mp3";
// // 🎵 musiques AI-ROBOT
// import AiRobotMusic from "../assets/audio/GameAiRobot.mp3";
// import IntroAiRobot from "../assets/audio/IntroAiRobot.mp3";
// import LaunchAiRobot from "../assets/audio/LaunchIgnition.mp3";
// import EndAiRobot from "../assets/audio/EndAiRobot.mp3";
// import ExtraBallAiRobot from "../assets/audio/BonusExtraBallAiRobot.mp3";
// // 🎵 musiques ENTITY
// import IntroEntity from "../assets/audio/intro pinball ENTITY.mp3";
// import EndEntity from "../assets/audio/EndEntity.mp3";
// import ExtraBallEntity from "../assets/audio/GameNightmare.mp3";
// import EntityGame from "../assets/audio/EntityGame.mp3";
// import LaunchEntity from "../assets/audio/LaunchEntity.mp3";
// // 🎵 musiques GOLDWHEEL
// import SteelWheelMusic from "../assets/audio/GameSteelWheel.mp3";

// import launcherImg from "../assets/images/launcher.png";
// import ball1 from "../assets/images/ball1.png";
// import ball2 from "../assets/images/ball2.png";
// import ball3 from "../assets/images/ball3.png";

// import bumperFx from "../assets/audio/bumper.wav";
// import flipperFx from "../assets/audio/flipper.wav";
// import holeFx from "../assets/audio/hole.wav";

// export type PinballKey = "AiRobot" | "Mythology" | "Entity" | "GoldWheel";

// export interface Collider {
//   type: "bumper" | "hole";
//   x: number;
//   y: number;
//   radius: number;
//   force?: number;
//   score: number;
// }

// export interface LightElement {
//   id: string;
//   type: "letter" | "arrow" | "circle" | "custom";

//   /** affichage */
//   value?: string;

//   /** position */
//   x: number;
//   y: number;

//   /** comportement */
//   blink?: boolean;
//   alwaysOn?: boolean;

//   /** gameplay */
//   group?: string;
//   score?: number;

//   /** style — size = taille du PlaneGeometry (ex: 0.6, 0.9, 1.2) */
//   color?: string;
//   borderColor?: string; // ✅ nouveau
//   size?: number; // taille individuelle du mesh
// }

// export interface PhysicsConfig {
//   gravity: number;
//   bounce: number;
// }

// export interface PinballConfig {
//   key: PinballKey;
//   title: string;
//   img: string;
//   ballImg?: string;
//   themeColor: string;
//   launch?: string;

//   musicPreview?: string;
//   musicGame?: string;
//   musicEnd?: string;

//   physics: PhysicsConfig;
//   colliders: Collider[];
//   elements: LightElement[];

//   scoring: {
//     multiplierMax: number;
//   };

//   fx?: {
//     launch?: string;
//     bumper?: string;
//     flipper?: string;
//     hole?: string;
//     fxReady?: string;
//   };
// }
//   // ─────────────────────────────────────────────
//   // AIROBPOT — éléments extraits de l'image
//   // Système de coordonnées : x ∈ [-5, 5], y ∈ [0, 20]
//   // Origine (0,0) = bas centre de la table
//   // ─────────────────────────────────────────────

// export const pinballData: Record<PinballKey, PinballConfig> = {

//   AiRobot: {
//     key: "AiRobot",
//     title: "AiRobot",
//     img: AiRobotImg,
//     ballImg: ball3,
//     themeColor: "#FF0004",
//     musicPreview: IntroAiRobot,
//     musicGame: AiRobotMusic,
//     musicEnd: EndAiRobot,
//     launch: LaunchAiRobot,

//     physics: {
//       gravity: -0.004,
//       bounce: 0.8,
//     },

//     // ── COLLIDERS physiques ──
//     colliders: [
//       // Bumpers rouges "50"
//       { type: "bumper", x: -1.5, y: 11, radius: 0.7, force: 0.12, score: 50 },
//       { type: "bumper", x: 0.5, y: 9, radius: 0.7, force: 0.12, score: 50 },

//       // Targets ovales haut (I T E M)
//       {
//         type: "bumper",
//         x: -1.8,
//         y: 16.5,
//         radius: 0.35,
//         force: 0.06,
//         score: 1000,
//       },
//       {
//         type: "bumper",
//         x: -0.6,
//         y: 16.5,
//         radius: 0.35,
//         force: 0.06,
//         score: 1000,
//       },
//       {
//         type: "bumper",
//         x: 0.9,
//         y: 16.5,
//         radius: 0.35,
//         force: 0.06,
//         score: 1000,
//       },
//       {
//         type: "bumper",
//         x: 2.3,
//         y: 16.5,
//         radius: 0.35,
//         force: 0.06,
//         score: 1000,
//       },

//       // Trou REBOOT EXTRA-BALL
//       { type: "hole", x: 0, y: 3.5, radius: 0.5, score: 500 },

//       // Scores latéraux gauche (250, 500, 750, 1000, 2500)
//       { type: "bumper", x: -4.2, y: 13, radius: 0.2, force: 0.04, score: 250 },
//       {
//         type: "bumper",
//         x: -4.2,
//         y: 13.8,
//         radius: 0.2,
//         force: 0.04,
//         score: 500,
//       },
//       {
//         type: "bumper",
//         x: -4.2,
//         y: 14.6,
//         radius: 0.2,
//         force: 0.04,
//         score: 750,
//       },
//       {
//         type: "bumper",
//         x: -4.2,
//         y: 15.4,
//         radius: 0.2,
//         force: 0.04,
//         score: 1000,
//       },
//       {
//         type: "bumper",
//         x: -4.2,
//         y: 16.2,
//         radius: 0.2,
//         force: 0.04,
//         score: 2500,
//       },
//     ],

//     // ── ÉLÉMENTS VISUELS (PNG off/on) ──
//     elements: [
//       // ── FUEL — colonne gauche ──
//       {
//         id: "fuel_f",
//         type: "letter",
//         value: "F",
//         x: -3.8,
//         y: 10.5,
//         group: "FUEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "fuel_u",
//         type: "letter",
//         value: "U",
//         x: -3.8,
//         y: 9.8,
//         group: "FUEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "fuel_e",
//         type: "letter",
//         value: "E",
//         x: -3.8,
//         y: 9.1,
//         group: "FUEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "fuel_l",
//         type: "letter",
//         value: "L",
//         x: -3.8,
//         y: 8.4,
//         group: "FUEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },

//       // ── TECH — colonne droite ──
//       {
//         id: "tech_t",
//         type: "letter",
//         value: "T",
//         x: 4.2,
//         y: 12.5,
//         group: "TECH",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "tech_e",
//         type: "letter",
//         value: "E",
//         x: 4.2,
//         y: 11.8,
//         group: "TECH",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "tech_c",
//         type: "letter",
//         value: "C",
//         x: 4.2,
//         y: 11.1,
//         group: "TECH",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "tech_h",
//         type: "letter",
//         value: "H",
//         x: 4.2,
//         y: 10.4,
//         group: "TECH",
//         blink: true,
//         size: 0.55,
//         borderColor: "#ff4444",
//       },

//       // ── SUN / RUN — droite milieu ──
//       {
//         id: "sun_s",
//         type: "letter",
//         value: "S",
//         x: 3.3,
//         y: 10.8,
//         group: "SUN",
//         blink: true,
//         size: 0.5,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "sun_u",
//         type: "letter",
//         value: "U",
//         x: 3.3,
//         y: 10.1,
//         group: "SUN",
//         blink: true,
//         size: 0.5,
//         borderColor: "#ff4444",
//       },
//       {
//         id: "sun_n",
//         type: "letter",
//         value: "N",
//         x: 3.3,
//         y: 9.4,
//         group: "SUN",
//         blink: true,
//         size: 0.5,
//         borderColor: "#ff4444",
//       },

//       // ── Targets ovales haut (I T E M) ──
//       {
//         id: "target_i",
//         type: "circle",
//         x: -1.8,
//         y: 16.5,
//         group: "ITEM",
//         blink: true,
//         size: 0.45,
//         borderColor: "#888",
//       },
//       {
//         id: "target_t",
//         type: "circle",
//         x: -0.6,
//         y: 16.5,
//         group: "ITEM",
//         blink: true,
//         size: 0.45,
//         borderColor: "#888",
//       },
//       {
//         id: "target_e",
//         type: "circle",
//         x: 0.9,
//         y: 16.5,
//         group: "ITEM",
//         blink: true,
//         size: 0.45,
//         borderColor: "#888",
//       },
//       {
//         id: "target_m",
//         type: "circle",
//         x: 2.3,
//         y: 16.5,
//         group: "ITEM",
//         blink: true,
//         size: 0.45,
//         borderColor: "#888",
//       },

//       // ── Bumpers rouges "50" ──
//       {
//         id: "bumper_left",
//         type: "bumper",
//         x: -1.5,
//         y: 11,
//         blink: true,
//         size: 1.2,
//         imgOff: "bumperOffImg",
//         imgOn: "bumperOnImg",
//       },
//       {
//         id: "bumper_right",
//         type: "bumper",
//         x: 0.5,
//         y: 9,
//         blink: true,
//         size: 1.2,
//         imgOff: "bumperOffImg",
//         imgOn: "bumperOnImg",
//       },

//       // ── Flèches grises directionnelles (milieu gauche) ──
//       {
//         id: "arrow_1",
//         type: "arrow",
//         x: -2.8,
//         y: 9.5,
//         alwaysOn: false,
//         size: 0.6,
//         borderColor: "#888",
//       },
//       {
//         id: "arrow_2",
//         type: "arrow",
//         x: -2.5,
//         y: 8.8,
//         alwaysOn: false,
//         size: 0.6,
//         borderColor: "#888",
//       },
//       {
//         id: "arrow_3",
//         type: "arrow",
//         x: -2.2,
//         y: 8.1,
//         alwaysOn: false,
//         size: 0.6,
//         borderColor: "#888",
//       },

//       // ── Flèches rouges (EXTRA BALL / JACKPOT) ──
//       {
//         id: "arrow_extraball",
//         type: "arrow",
//         x: -1.2,
//         y: 7.5,
//         blink: true,
//         size: 0.55,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "arrow_jackpot",
//         type: "arrow",
//         x: -0.8,
//         y: 8.2,
//         blink: true,
//         size: 0.55,
//         borderColor: "#FF0004",
//       },

//       // ── Flèches DOUBLE BONUS (droite) ──
//       {
//         id: "arrow_dbonus_1",
//         type: "arrow",
//         x: 3.0,
//         y: 8.5,
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "arrow_dbonus_2",
//         type: "arrow",
//         x: 3.3,
//         y: 7.8,
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },

//       // ── Multiplicateurs haut (X2 X3 X4 X6 X8) ──
//       {
//         id: "mult_x2",
//         type: "letter",
//         value: "X2",
//         x: -2.5,
//         y: 18.5,
//         group: "MULT",
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "mult_x3",
//         type: "letter",
//         value: "X3",
//         x: -1.3,
//         y: 18.8,
//         group: "MULT",
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "mult_x4",
//         type: "letter",
//         value: "X4",
//         x: -0.1,
//         y: 19.0,
//         group: "MULT",
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "mult_x6",
//         type: "letter",
//         value: "X6",
//         x: 1.1,
//         y: 18.8,
//         group: "MULT",
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },
//       {
//         id: "mult_x8",
//         type: "letter",
//         value: "X8",
//         x: 2.4,
//         y: 18.5,
//         group: "MULT",
//         blink: true,
//         size: 0.6,
//         borderColor: "#FF0004",
//       },

//       // ── Flippers principaux (bas centre) — PNG ──
//       {
//         id: "flipper_left",
//         type: "flipper",
//         x: -1.2,
//         y: 2.2,
//         size: 2.2,
//         imgOff: "flipperLeftOffImg",
//         imgOn: "flipperLeftOnImg",
//       },
//       {
//         id: "flipper_right",
//         type: "flipper",
//         x: 1.2,
//         y: 2.2,
//         size: 2.2,
//         imgOff: "flipperRightOffImg",
//         imgOn: "flipperRightOnImg",
//       },

//       // ── Mini-flippers haut gauche ──
//       {
//         id: "mini_flipper_left",
//         type: "flipper",
//         x: -3.5,
//         y: 13.5,
//         size: 1.2,
//         imgOff: "flipperLeftOffImg",
//         imgOn: "flipperLeftOnImg",
//       },
//       {
//         id: "mini_flipper_right",
//         type: "flipper",
//         x: -2.8,
//         y: 13.5,
//         size: 1.2,
//         imgOff: "flipperRightOffImg",
//         imgOn: "flipperRightOnImg",
//       },

//       // ── Trou REBOOT EXTRA-BALL ──
//       {
//         id: "hole_reboot",
//         type: "hole",
//         x: 0,
//         y: 3.5,
//         size: 1.4,
//         blink: true,
//         borderColor: "#FF0004",
//       },

//       // ── Scores latéraux gauche (cercles) ──
//       {
//         id: "score_50",
//         type: "circle",
//         x: -4.0,
//         y: 10.2,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_100",
//         type: "circle",
//         x: -4.0,
//         y: 11.0,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_250",
//         type: "circle",
//         x: -4.0,
//         y: 11.8,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_500",
//         type: "circle",
//         x: -4.0,
//         y: 12.6,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_750",
//         type: "circle",
//         x: -4.0,
//         y: 13.4,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_1000",
//         type: "circle",
//         x: -4.0,
//         y: 14.2,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//       {
//         id: "score_2500",
//         type: "circle",
//         x: -4.0,
//         y: 15.0,
//         size: 0.3,
//         alwaysOn: true,
//         color: "#ccc",
//       },
//     ],

//     scoring: {
//       multiplierMax: 8,
//     },

//     fx: {
//       bumper: bumperFx,
//       flipper: flipperFx,
//       hole: holeFx,
//       fxReady: ExtraBallAiRobot,
//     },
//   },

//   Mythology: {
//     key: "Mythology",
//     title: "Mythology",
//     img: MythologyImg,
//     ballImg: ball2,
//     themeColor: "#FFD000",
//     musicPreview: IntroMythology,
//     musicGame: MythologyMusic,
//     musicEnd: EndMythology,
//     launch: LaunchMythology,

//     physics: { gravity: -0.004, bounce: 0.8 },

//     colliders: [
//       { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
//       { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
//     ],

//     elements: [
//       {
//         id: "m",
//         type: "letter",
//         value: "M",
//         x: -2.5,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "y1",
//         type: "letter",
//         value: "Y",
//         x: -1.9,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "t",
//         type: "letter",
//         value: "T",
//         x: -1.4,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "h",
//         type: "letter",
//         value: "H",
//         x: -0.85,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "o1",
//         type: "letter",
//         value: "O",
//         x: -0.26,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "l",
//         type: "letter",
//         value: "L",
//         x: 0.26,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "o2",
//         type: "letter",
//         value: "O",
//         x: 0.82,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "g",
//         type: "letter",
//         value: "G",
//         x: 1.45,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "y2",
//         type: "letter",
//         value: "Y",
//         x: 1.94,
//         y: 4.8,
//         group: "MYTHOLOGY",
//         blink: true,
//         size: 0.55,
//         borderColor: "#8D750D",
//       },
//       {
//         id: "arrow1",
//         type: "arrow",
//         x: -4,
//         y: 10,
//         alwaysOn: true,
//         size: 0.9,
//         borderColor: "#ffaa00",
//       },
//       {
//         id: "special",
//         type: "custom",
//         x: 4.2,
//         y: 19,
//         size: 1.0,
//         borderColor: "#ffaa00",
//       },
//     ],

//     scoring: { multiplierMax: 10 },
//     fx: {
//       bumper: bumperFx,
//       flipper: flipperFx,
//       hole: holeFx,
//       fxReady: ExtraBallMythology,
//     },
//   },

//   Entity: {
//     key: "Entity",
//     title: "Entity",
//     img: EntityImg,
//     ballImg: ball3,
//     themeColor: "#FF0000",
//     musicPreview: IntroEntity,
//     musicGame: EntityGame,
//     musicEnd: EndEntity,
//     launch: LaunchEntity,

//     physics: { gravity: -0.004, bounce: 0.8 },

//     colliders: [
//       { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
//       { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
//     ],

//     elements: [
//       {
//         id: "e",
//         type: "letter",
//         value: "E",
//         x: -1.45,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "n",
//         type: "letter",
//         value: "N",
//         x: -0.9,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "t1",
//         type: "letter",
//         value: "T",
//         x: -0.38,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "i",
//         type: "letter",
//         value: "I",
//         x: 0,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "t2",
//         type: "letter",
//         value: "T",
//         x: 0.36,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "y",
//         type: "letter",
//         value: "Y",
//         x: 0.84,
//         y: 4.8,
//         group: "ENTITY",
//         blink: true,
//         size: 0.6,
//         borderColor: "#008F62",
//       },
//       {
//         id: "bonus1",
//         type: "circle",
//         x: 0,
//         y: 10,
//         group: "BONUS",
//         blink: true,
//         size: 0.4,
//         borderColor: "#cc0000",
//       },
//       {
//         id: "bonus2",
//         type: "circle",
//         x: 1,
//         y: 11,
//         group: "BONUS",
//         blink: true,
//         size: 0.4,
//         borderColor: "#cc0000",
//       },
//       {
//         id: "arrow1",
//         type: "arrow",
//         x: -2,
//         y: 10,
//         alwaysOn: true,
//         size: 0.8,
//         borderColor: "#cc0000",
//       },
//       {
//         id: "special",
//         type: "custom",
//         x: 2,
//         y: 12,
//         size: 0.9,
//         borderColor: "#cc0000",
//       },
//     ],

//     scoring: { multiplierMax: 10 },
//     fx: {
//       bumper: bumperFx,
//       flipper: flipperFx,
//       hole: holeFx,
//       fxReady: ExtraBallEntity,
//     },
//   },

//   GoldWheel: {
//     key: "GoldWheel",
//     title: "GoldWheel",
//     img: GoldWheelImg,
//     ballImg: ball1,
//     themeColor: "#AC732E",
//     musicPreview: SteelWheelMusic,
//     musicGame: SteelWheelMusic,
//     musicEnd: SteelWheelMusic,
//     launch: launcherImg,

//     physics: { gravity: -0.004, bounce: 0.8 },

//     colliders: [
//       { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
//       { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
//     ],

//     elements: [
//       {
//         id: "g",
//         type: "letter",
//         value: "G",
//         x: -2.27,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "o",
//         type: "letter",
//         value: "o",
//         x: -1.7,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "l1",
//         type: "letter",
//         value: "l",
//         x: -1.33,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "d",
//         type: "letter",
//         value: "d",
//         x: -0.93,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "w",
//         type: "letter",
//         value: "W",
//         x: -0.02,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "h",
//         type: "letter",
//         value: "h",
//         x: 0.7,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "e1",
//         type: "letter",
//         value: "e",
//         x: 1.2,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "e2",
//         type: "letter",
//         value: "e",
//         x: 1.73,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "l2",
//         type: "letter",
//         value: "l",
//         x: 2.1,
//         y: 4.2,
//         group: "GOLDWHEEL",
//         blink: true,
//         size: 0.55,
//         borderColor: "#7C2F00",
//       },
//       {
//         id: "bonus1",
//         type: "circle",
//         x: 0,
//         y: 10,
//         group: "BONUS",
//         blink: true,
//         size: 0.4,
//         borderColor: "#d4a050",
//       },
//       {
//         id: "bonus2",
//         type: "circle",
//         x: 1,
//         y: 11,
//         group: "BONUS",
//         blink: true,
//         size: 0.4,
//         borderColor: "#d4a050",
//       },
//       {
//         id: "arrow1",
//         type: "arrow",
//         x: 1.8,
//         y: 16,
//         alwaysOn: true,
//         size: 0.9,
//         borderColor: "#d4a050",
//       },
//       {
//         id: "special",
//         type: "custom",
//         x: 2,
//         y: 12,
//         size: 0.9,
//         borderColor: "#d4a050",
//       },
//     ],

//     scoring: { multiplierMax: 7 },
//     fx: {
//       bumper: bumperFx,
//       flipper: flipperFx,
//       hole: holeFx,
//       fxReady: holeFx,
//     },
//   },
// };
import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
import MythologyImg from "../assets/images/MYTHOLOGY PINBALL.png";
import EntityImg from "../assets/images/ENTITY PINBALL.png";
import GoldWheelImg from "../assets/images/GOLDWHEEL PINBALL.png";
// 🎵 musiques MYTHOLOGY
import MythologyMusic from "../assets/audio/RiseOfTheHero.wav";
import IntroMythology from "../assets/audio/IntroMytho.mp3";
import LaunchMythology from "../assets/audio/LaunchMytho.mp3";
import EndMythology from "../assets/audio/EndMytho.mp3";
import ExtraBallMythology from "../assets/audio/BonusExtraBallMytho.mp3";
// 🎵 musiques AI-ROBOT
import AiRobotMusic from "../assets/audio/GameAiRobot.mp3";
import IntroAiRobot from "../assets/audio/IntroAiRobot.mp3";
import LaunchAiRobot from "../assets/audio/LaunchIgnition.mp3";
import EndAiRobot from "../assets/audio/EndAiRobot.mp3";
import ExtraBallAiRobot from "../assets/audio/BonusExtraBallAiRobot.mp3";
// 🎵 musiques ENTITY
import IntroEntity from "../assets/audio/intro pinball ENTITY.mp3";
import EndEntity from "../assets/audio/EndEntity.mp3";
import ExtraBallEntity from "../assets/audio/GameNightmare.mp3";
import EntityGame from "../assets/audio/EntityGame.mp3";
import LaunchEntity from "../assets/audio/LaunchEntity.mp3";
// 🎵 musiques GOLDWHEEL
import SteelWheelMusic from "../assets/audio/GameSteelWheel.mp3";

import launcherImg from "../assets/images/launcher.png";
import ball1 from "../assets/images/ball1.png";
import ball2 from "../assets/images/ball2.png";
import ball3 from "../assets/images/ball3.png";

import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";

export type PinballKey = "AiRobot" | "Mythology" | "Entity" | "GoldWheel";

export interface Collider {
  type: "bumper" | "hole";
  x: number;
  y: number;
  radius: number;
  force?: number;
  score: number;
}

// ✅ Union complète — bumper / flipper / hole ajoutés
export type LightElementType =
  | "letter"
  | "arrow"
  | "circle"
  | "custom"
  | "bumper"
  | "flipper"
  | "hole";

export interface LightElement {
  id: string;
  type: LightElementType;

  /** affichage texte (lettres) */
  value?: string;

  /** position */
  x: number;
  y: number;

  /** comportement */
  blink?: boolean;
  alwaysOn?: boolean;

  /** gameplay */
  group?: string;
  score?: number;

  /** style */
  color?: string;
  borderColor?: string;
  size?: number;

  // ✅ PNG off/on pour bumpers, flippers, trous
  imgOff?: string;
  imgOn?: string;
}

export interface PhysicsConfig {
  gravity: number;
  bounce: number;
}

export interface PinballConfig {
  key: PinballKey;
  title: string;
  img: string;
  ballImg?: string;
  themeColor: string;
  launch?: string;

  musicPreview?: string;
  musicGame?: string;
  musicEnd?: string;

  physics: PhysicsConfig;
  colliders: Collider[];
  elements: LightElement[];

  scoring: {
    multiplierMax: number;
  };

  fx?: {
    launch?: string;
    bumper?: string;
    flipper?: string;
    hole?: string;
    fxReady?: string;
  };
}

export const pinballData: Record<PinballKey, PinballConfig> = {
  // ───────────────────────────────────────────
  // AI ROBOT
  // x ∈ [-5, 5]  y ∈ [0, 20]  origine = bas centre
  // ───────────────────────────────────────────
  AiRobot: {
    key: "AiRobot",
    title: "AiRobot",
    img: AiRobotImg,
    ballImg: ball3,
    themeColor: "#FF0004",
    musicPreview: IntroAiRobot,
    musicGame: AiRobotMusic,
    musicEnd: EndAiRobot,
    launch: LaunchAiRobot,

    physics: { gravity: -0.004, bounce: 0.8 },

    colliders: [
      // Bumpers rouges "50"
      { type: "bumper", x: -1.5, y: 11, radius: 0.7, force: 0.12, score: 50 },
      { type: "bumper", x: 0.5, y: 9, radius: 0.7, force: 0.12, score: 50 },
      // Targets ovales haut (I T E M)
      {
        type: "bumper",
        x: -1.8,
        y: 16.5,
        radius: 0.35,
        force: 0.06,
        score: 1000,
      },
      {
        type: "bumper",
        x: -0.6,
        y: 16.5,
        radius: 0.35,
        force: 0.06,
        score: 1000,
      },
      {
        type: "bumper",
        x: 0.9,
        y: 16.5,
        radius: 0.35,
        force: 0.06,
        score: 1000,
      },
      {
        type: "bumper",
        x: 2.3,
        y: 16.5,
        radius: 0.35,
        force: 0.06,
        score: 1000,
      },
      // Trou REBOOT EXTRA-BALL
      { type: "hole", x: 0, y: 3.5, radius: 0.5, score: 500 },
      // Scores latéraux gauche
      { type: "bumper", x: -4.2, y: 13, radius: 0.2, force: 0.04, score: 250 },
      {
        type: "bumper",
        x: -4.2,
        y: 13.8,
        radius: 0.2,
        force: 0.04,
        score: 500,
      },
      {
        type: "bumper",
        x: -4.2,
        y: 14.6,
        radius: 0.2,
        force: 0.04,
        score: 750,
      },
      {
        type: "bumper",
        x: -4.2,
        y: 15.4,
        radius: 0.2,
        force: 0.04,
        score: 1000,
      },
      {
        type: "bumper",
        x: -4.2,
        y: 16.2,
        radius: 0.2,
        force: 0.04,
        score: 2500,
      },
    ],

    elements: [
      // FUEL — colonne gauche
      {
        id: "fuel_f",
        type: "letter",
        value: "F",
        x: -3.8,
        y: 10.5,
        group: "FUEL",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "fuel_u",
        type: "letter",
        value: "U",
        x: -3.8,
        y: 9.8,
        group: "FUEL",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "fuel_e",
        type: "letter",
        value: "E",
        x: -3.8,
        y: 9.1,
        group: "FUEL",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "fuel_l",
        type: "letter",
        value: "L",
        x: -3.8,
        y: 8.4,
        group: "FUEL",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },

      // TECH — colonne droite
      {
        id: "tech_t",
        type: "letter",
        value: "T",
        x: 4.2,
        y: 12.5,
        group: "TECH",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "tech_e",
        type: "letter",
        value: "E",
        x: 4.2,
        y: 11.8,
        group: "TECH",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "tech_c",
        type: "letter",
        value: "C",
        x: 4.2,
        y: 11.1,
        group: "TECH",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },
      {
        id: "tech_h",
        type: "letter",
        value: "H",
        x: 4.2,
        y: 10.4,
        group: "TECH",
        blink: true,
        size: 0.55,
        borderColor: "#ff4444",
      },

      // SUN — droite milieu
      {
        id: "sun_s",
        type: "letter",
        value: "S",
        x: 3.3,
        y: 10.8,
        group: "SUN",
        blink: true,
        size: 0.5,
        borderColor: "#ff4444",
      },
      {
        id: "sun_u",
        type: "letter",
        value: "U",
        x: 3.3,
        y: 10.1,
        group: "SUN",
        blink: true,
        size: 0.5,
        borderColor: "#ff4444",
      },
      {
        id: "sun_n",
        type: "letter",
        value: "N",
        x: 3.3,
        y: 9.4,
        group: "SUN",
        blink: true,
        size: 0.5,
        borderColor: "#ff4444",
      },

      // Targets ovales haut (ITEM) — cercles visuels
      {
        id: "target_i",
        type: "circle",
        x: -1.8,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.45,
        borderColor: "#888",
      },
      {
        id: "target_t",
        type: "circle",
        x: -0.6,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.45,
        borderColor: "#888",
      },
      {
        id: "target_e",
        type: "circle",
        x: 0.9,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.45,
        borderColor: "#888",
      },
      {
        id: "target_m",
        type: "circle",
        x: 2.3,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.45,
        borderColor: "#888",
      },

      // Bumpers rouges "50" — PNG (imgOff/imgOn à remplacer par tes imports)
      {
        id: "bumper_left",
        type: "bumper",
        x: -1.5,
        y: 11,
        blink: true,
        size: 1.2,
      },
      {
        id: "bumper_right",
        type: "bumper",
        x: 0.5,
        y: 9,
        blink: true,
        size: 1.2,
      },

      // Flèches grises directionnelles gauche
      {
        id: "arrow_1",
        type: "arrow",
        x: -2.8,
        y: 9.5,
        blink: true,
        size: 0.6,
        borderColor: "#888",
      },
      {
        id: "arrow_2",
        type: "arrow",
        x: -2.5,
        y: 8.8,
        blink: true,
        size: 0.6,
        borderColor: "#888",
      },
      {
        id: "arrow_3",
        type: "arrow",
        x: -2.2,
        y: 8.1,
        blink: true,
        size: 0.6,
        borderColor: "#888",
      },

      // Flèches rouges EXTRA BALL / JACKPOT
      {
        id: "arrow_extraball",
        type: "arrow",
        x: -1.2,
        y: 7.5,
        blink: true,
        size: 0.55,
        borderColor: "#FF0004",
      },
      {
        id: "arrow_jackpot",
        type: "arrow",
        x: -0.8,
        y: 8.2,
        blink: true,
        size: 0.55,
        borderColor: "#FF0004",
      },

      // Flèches DOUBLE BONUS droite
      {
        id: "arrow_dbonus_1",
        type: "arrow",
        x: 3.0,
        y: 8.5,
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },
      {
        id: "arrow_dbonus_2",
        type: "arrow",
        x: 3.3,
        y: 7.8,
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },

      // Multiplicateurs haut (X2 X3 X4 X6 X8)
      {
        id: "mult_x2",
        type: "letter",
        value: "X2",
        x: -2.5,
        y: 18.5,
        group: "MULT",
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },
      {
        id: "mult_x3",
        type: "letter",
        value: "X3",
        x: -1.3,
        y: 18.8,
        group: "MULT",
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },
      {
        id: "mult_x4",
        type: "letter",
        value: "X4",
        x: -0.1,
        y: 19.0,
        group: "MULT",
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },
      {
        id: "mult_x6",
        type: "letter",
        value: "X6",
        x: 1.1,
        y: 18.8,
        group: "MULT",
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },
      {
        id: "mult_x8",
        type: "letter",
        value: "X8",
        x: 2.4,
        y: 18.5,
        group: "MULT",
        blink: true,
        size: 0.6,
        borderColor: "#FF0004",
      },

      // Flippers principaux bas — PNG (imgOff/imgOn à remplacer par tes imports)
      { id: "flipper_left", type: "flipper", x: -1.2, y: 2.2, size: 2.2 },
      { id: "flipper_right", type: "flipper", x: 1.2, y: 2.2, size: 2.2 },
      // Mini-flippers haut gauche
      { id: "mini_flipper_left", type: "flipper", x: -3.5, y: 13.5, size: 1.2 },
      {
        id: "mini_flipper_right",
        type: "flipper",
        x: -2.8,
        y: 13.5,
        size: 1.2,
      },

      // Trou REBOOT EXTRA-BALL
      {
        id: "hole_reboot",
        type: "hole",
        x: 0,
        y: 3.5,
        blink: true,
        size: 1.4,
        borderColor: "#FF0004",
      },

      // Scores latéraux gauche (cercles décoratifs)
      {
        id: "score_50",
        type: "circle",
        x: -4.0,
        y: 10.2,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_100",
        type: "circle",
        x: -4.0,
        y: 11.0,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_250",
        type: "circle",
        x: -4.0,
        y: 11.8,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_500",
        type: "circle",
        x: -4.0,
        y: 12.6,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_750",
        type: "circle",
        x: -4.0,
        y: 13.4,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_1000",
        type: "circle",
        x: -4.0,
        y: 14.2,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
      {
        id: "score_2500",
        type: "circle",
        x: -4.0,
        y: 15.0,
        size: 0.3,
        alwaysOn: true,
        color: "#ccc",
      },
    ],

    scoring: { multiplierMax: 8 },
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: ExtraBallAiRobot,
    },
  },

  // ───────────────────────────────────────────
  // MYTHOLOGY
  // ───────────────────────────────────────────
  Mythology: {
    key: "Mythology",
    title: "Mythology",
    img: MythologyImg,
    ballImg: ball2,
    themeColor: "#FFD000",
    musicPreview: IntroMythology,
    musicGame: MythologyMusic,
    musicEnd: EndMythology,
    launch: LaunchMythology,

    physics: { gravity: -0.004, bounce: 0.8 },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    elements: [
      {
        id: "m",
        type: "letter",
        value: "M",
        x: -2.5,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "y1",
        type: "letter",
        value: "Y",
        x: -1.9,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "t",
        type: "letter",
        value: "T",
        x: -1.4,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "h",
        type: "letter",
        value: "H",
        x: -0.85,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "o1",
        type: "letter",
        value: "O",
        x: -0.26,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "l",
        type: "letter",
        value: "L",
        x: 0.26,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "o2",
        type: "letter",
        value: "O",
        x: 0.82,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "g",
        type: "letter",
        value: "G",
        x: 1.45,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "y2",
        type: "letter",
        value: "Y",
        x: 1.94,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
        size: 0.55,
        borderColor: "#8D750D",
      },
      {
        id: "arrow1",
        type: "arrow",
        x: -4,
        y: 10,
        alwaysOn: true,
        size: 0.9,
        borderColor: "#ffaa00",
      },
      {
        id: "special",
        type: "custom",
        x: 4.2,
        y: 19,
        size: 1.0,
        borderColor: "#ffaa00",
      },
    ],

    scoring: { multiplierMax: 10 },
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: ExtraBallMythology,
    },
  },

  // ───────────────────────────────────────────
  // ENTITY
  // ───────────────────────────────────────────
  Entity: {
    key: "Entity",
    title: "Entity",
    img: EntityImg,
    ballImg: ball3,
    themeColor: "#FF0000",
    musicPreview: IntroEntity,
    musicGame: EntityGame,
    musicEnd: EndEntity,
    launch: LaunchEntity,

    physics: { gravity: -0.004, bounce: 0.8 },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    elements: [
      {
        id: "e",
        type: "letter",
        value: "E",
        x: -1.45,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "n",
        type: "letter",
        value: "N",
        x: -0.9,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "t1",
        type: "letter",
        value: "T",
        x: -0.38,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "i",
        type: "letter",
        value: "I",
        x: 0,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "t2",
        type: "letter",
        value: "T",
        x: 0.36,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "y",
        type: "letter",
        value: "Y",
        x: 0.84,
        y: 4.8,
        group: "ENTITY",
        blink: true,
        size: 0.6,
        borderColor: "#008F62",
      },
      {
        id: "bonus1",
        type: "circle",
        x: 0,
        y: 10,
        group: "BONUS",
        blink: true,
        size: 0.4,
        borderColor: "#cc0000",
      },
      {
        id: "bonus2",
        type: "circle",
        x: 1,
        y: 11,
        group: "BONUS",
        blink: true,
        size: 0.4,
        borderColor: "#cc0000",
      },
      {
        id: "arrow1",
        type: "arrow",
        x: -2,
        y: 10,
        alwaysOn: true,
        size: 0.8,
        borderColor: "#cc0000",
      },
      {
        id: "special",
        type: "custom",
        x: 2,
        y: 12,
        size: 0.9,
        borderColor: "#cc0000",
      },
    ],

    scoring: { multiplierMax: 10 },
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: ExtraBallEntity,
    },
  },

  // ───────────────────────────────────────────
  // GOLDWHEEL
  // ───────────────────────────────────────────
  GoldWheel: {
    key: "GoldWheel",
    title: "GoldWheel",
    img: GoldWheelImg,
    ballImg: ball1,
    themeColor: "#AC732E",
    musicPreview: SteelWheelMusic,
    musicGame: SteelWheelMusic,
    musicEnd: SteelWheelMusic,
    launch: launcherImg,

    physics: { gravity: -0.004, bounce: 0.8 },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    elements: [
      {
        id: "g",
        type: "letter",
        value: "G",
        x: -2.27,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "o",
        type: "letter",
        value: "o",
        x: -1.7,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "l1",
        type: "letter",
        value: "l",
        x: -1.33,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "d",
        type: "letter",
        value: "d",
        x: -0.93,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "w",
        type: "letter",
        value: "W",
        x: -0.02,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "h",
        type: "letter",
        value: "h",
        x: 0.7,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "e1",
        type: "letter",
        value: "e",
        x: 1.2,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "e2",
        type: "letter",
        value: "e",
        x: 1.73,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "l2",
        type: "letter",
        value: "l",
        x: 2.1,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
        size: 0.55,
        borderColor: "#7C2F00",
      },
      {
        id: "bonus1",
        type: "circle",
        x: 0,
        y: 10,
        group: "BONUS",
        blink: true,
        size: 0.4,
        borderColor: "#d4a050",
      },
      {
        id: "bonus2",
        type: "circle",
        x: 1,
        y: 11,
        group: "BONUS",
        blink: true,
        size: 0.4,
        borderColor: "#d4a050",
      },
      {
        id: "arrow1",
        type: "arrow",
        x: 1.8,
        y: 16,
        alwaysOn: true,
        size: 0.9,
        borderColor: "#d4a050",
      },
      {
        id: "special",
        type: "custom",
        x: 2,
        y: 12,
        size: 0.9,
        borderColor: "#d4a050",
      },
    ],

    scoring: { multiplierMax: 7 },
    fx: { bumper: bumperFx, flipper: flipperFx, hole: holeFx, fxReady: holeFx },
  },
};