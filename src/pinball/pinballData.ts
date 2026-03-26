// import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
// import R from "../assets/images/elements/AiRobot/R.png";
// import O from "../assets/images/elements/AiRobot/O.png";
// import B from "../assets/images/elements/AiRobot/B.png";
// import T from "../assets/images/elements/AiRobot/T.png";

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
// import GameGoldWheel from "../assets/audio/GameGoldWheel.mp3";
// import IntroGoldWheel from "../assets/audio/IntroGoldWheel.mp3";
// import EndGoldWheel from "../assets/audio/EndGoldWheel.mp3";
// import ExtraballGoldWheel from "../assets/audio/BonusExtraGoldWheel.mp3";
// import LaunchGoldWheel from "../assets/audio/LaunchGoldWheel.mp3";

// // import launcherImg from "../assets/images/launcher.png";
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

// // ✅ Union complète — bumper / flipper / hole ajoutés
// export type LightElementType =
//   | "letter"
//   | "arrow"
//   | "circle"
//   | "custom"
//   | "bumper"
//   | "flipper"
//   | "hole";

// export interface LightElement {
//   id: string;
//   type: LightElementType;

//   /** affichage texte (lettres) */
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

//   /** style */
//   color?: string;
//   borderColor?: string;
//   size?: number;

//   // ✅ PNG off/on pour bumpers, flippers, trous
//   imgOff?: string;
//   imgOn?: string;
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

// export const pinballData: Record<PinballKey, PinballConfig> = {
//   // ───────────────────────────────────────────
//   // AI ROBOT
//   // x ∈ [-5, 5]  y ∈ [0, 20]  origine = bas centre
//   // ───────────────────────────────────────────
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

//     physics: { gravity: -0.004, bounce: 0.8 },

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
//       // Scores latéraux gauche
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

//     elements: [
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

//       // TECH — colonne droite
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

//       // SUN — droite milieu
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

//       // Targets ovales haut (ITEM) — cercles visuels
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

//       // Bumpers rouges "50" — PNG (imgOff/imgOn à remplacer par tes imports)
//       {
//         id: "bumper_left",
//         type: "bumper",
//         x: -1.5,
//         y: 11,
//         blink: true,
//         size: 1.2,
//       },
//       {
//         id: "bumper_right",
//         type: "bumper",
//         x: 0.5,
//         y: 9,
//         blink: true,
//         size: 1.2,
//       },

//       // Flèches grises directionnelles gauche
//       {
//         id: "arrow_1",
//         type: "arrow",
//         x: -2.8,
//         y: 9.5,
//         blink: true,
//         size: 0.6,
//         borderColor: "#888",
//       },
//       {
//         id: "arrow_2",
//         type: "arrow",
//         x: -2.5,
//         y: 8.8,
//         blink: true,
//         size: 0.6,
//         borderColor: "#888",
//       },
//       {
//         id: "arrow_3",
//         type: "arrow",
//         x: -2.2,
//         y: 8.1,
//         blink: true,
//         size: 0.6,
//         borderColor: "#888",
//       },

//       // Flèches rouges EXTRA BALL / JACKPOT
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

//       // Flèches DOUBLE BONUS droite
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

//       // Multiplicateurs haut (X2 X3 X4 X6 X8)
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

//       // Flippers principaux bas — PNG (imgOff/imgOn à remplacer par tes imports)
//       { id: "flipper_left", type: "flipper", x: -1.2, y: 2.2, size: 2.2 },
//       { id: "flipper_right", type: "flipper", x: 1.2, y: 2.2, size: 2.2 },
//       // Mini-flippers haut gauche
//       { id: "mini_flipper_left", type: "flipper", x: -3.5, y: 13.5, size: 1.2 },
//       {
//         id: "mini_flipper_right",
//         type: "flipper",
//         x: -2.8,
//         y: 13.5,
//         size: 1.2,
//       },

//       // Trou REBOOT EXTRA-BALL
//       {
//         id: "hole_reboot",
//         type: "hole",
//         x: 0,
//         y: 3.5,
//         blink: true,
//         size: 1.4,
//         borderColor: "#FF0004",
//       },

//       // Scores latéraux gauche (cercles décoratifs)
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

//     scoring: { multiplierMax: 8 },
//     fx: {
//       bumper: bumperFx,
//       flipper: flipperFx,
//       hole: holeFx,
//       fxReady: ExtraBallAiRobot,
//     },
//   },

//   // ───────────────────────────────────────────
//   // MYTHOLOGY
//   // ───────────────────────────────────────────
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

//   // ───────────────────────────────────────────
//   // ENTITY
//   // ───────────────────────────────────────────
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

//   // ───────────────────────────────────────────
//   // GOLDWHEEL
//   // ───────────────────────────────────────────
//   GoldWheel: {
//     key: "GoldWheel",
//     title: "GoldWheel",
//     img: GoldWheelImg,
//     ballImg: ball1,
//     themeColor: "#AC732E",
//     musicPreview: IntroGoldWheel,
//     musicGame: GameGoldWheel,
//     musicEnd: EndGoldWheel,
//     launch: LaunchGoldWheel,

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
//       fxReady: ExtraballGoldWheel,
//     },
//   },
// };
import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
import MythologyImg from "../assets/images/MYTHOLOGY PINBALL.png";
import EntityImg from "../assets/images/ENTITY PINBALL.png";
import GoldWheelImg from "../assets/images/GOLDWHEEL PINBALL.png";

// Lettres ROBOT
import RImg from "../assets/images/elements/AiRobot/R.png";
import OImg from "../assets/images/elements/AiRobot/O.png";
import BImg from "../assets/images/elements/AiRobot/B.png";
import TImg from "../assets/images/elements/AiRobot/T.png";

// Flèches
import ArrowBlueLeftOff from "../assets/images/elements/AiRobot/ArrowBlueLeftOff.png";
import ArrowBlueLeftOn from "../assets/images/elements/AiRobot/ArrowBlueLeftOn.png";
import ArrowBlueRightOff from "../assets/images/elements/AiRobot/ArrowBlueRightOff.png";
import ArrowBlueRightOn from "../assets/images/elements/AiRobot/ArrowBlueRightOn.png";
import ArrowGreyOff from "../assets/images/elements/AiRobot/ArrowGreyOff.png";
import ArrowGreyOn from "../assets/images/elements/AiRobot/ArrowGreyOn.png";
import ArrowRedOff from "../assets/images/elements/AiRobot/ArrowRedOff.png";
import ArrowRedOn from "../assets/images/elements/AiRobot/ArrowRedOn.png";

// Ellipses FUEL
import F_FUEL from "../assets/images/elements/AiRobot/F-FUEL.png";
import U_FUEL from "../assets/images/elements/AiRobot/U-FUEL.png";
import E_FUEL from "../assets/images/elements/AiRobot/E-FUEL.png";
import L_FUEL from "../assets/images/elements/AiRobot/L-FUEL.png";

// Ellipses TECH
import C_TECH from "../assets/images/elements/AiRobot/C-TECH.png";
import E_TECH from "../assets/images/elements/AiRobot/E-TECH.png";
import H_TECH from "../assets/images/elements/AiRobot/H-TECH.png";
import T_TECH from "../assets/images/elements/AiRobot/T-TECH.png";

// Ellipses SUN
import S_SUN from "../assets/images/elements/AiRobot/S-SUN.png";
import U_SUN from "../assets/images/elements/AiRobot/U-SUN.png";
import N_SUN from "../assets/images/elements/AiRobot/N-SUN.png";

// Ellipses ITEM
import I_ITEM from "../assets/images/elements/AiRobot/I-ITEM.png";
import T_ITEM from "../assets/images/elements/AiRobot/T-ITEM.png";
import E_ITEM from "../assets/images/elements/AiRobot/E-ITEM.png";
import M_ITEM from "../assets/images/elements/AiRobot/M-ITEM.png";

// Multiplicateurs
import X2Img from "../assets/images/elements/AiRobot/x2.png";
import X3Img from "../assets/images/elements/AiRobot/x3.png";
import X4Img from "../assets/images/elements/AiRobot/x4.png";
import X6Img from "../assets/images/elements/AiRobot/x6.png";
import X8Img from "../assets/images/elements/AiRobot/x8.png";

// Bumper
import BumperImg from "../assets/images/elements/AiRobot/BUMPER.png";

// Flippers
import FlipperLeftImg from "../assets/images/elements/AiRobot/FlipperLeft.png";
import FlipperRightImg from "../assets/images/elements/AiRobot/FlipperRight.png";

// Rebonds
import RebondLeftImg from "../assets/images/elements/AiRobot/RebondLeft.png";
import RebondRightImg from "../assets/images/elements/AiRobot/RebondRight.png";

// Extra Ball
import ExtraBallRedOff from "../assets/images/elements/AiRobot/EXTRABALLRed-Off.png";
import ExtraBallRedOn from "../assets/images/elements/AiRobot/EXTRABALLRed-On.png";

// Revenge AI
import RevengeAiOff from "../assets/images/elements/AiRobot/REVENGE-AI-Off.png";
import RevengeAiOn from "../assets/images/elements/AiRobot/REVENGE-AI-On.png";

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
import GameGoldWheel from "../assets/audio/GameGoldWheel.mp3";
import IntroGoldWheel from "../assets/audio/IntroGoldWheel.mp3";
import EndGoldWheel from "../assets/audio/EndGoldWheel.mp3";
import ExtraballGoldWheel from "../assets/audio/BonusExtraGoldWheel.mp3";
import LaunchGoldWheel from "../assets/audio/LaunchGoldWheel.mp3";

// import launcherImg from "../assets/images/launcher.png";
import ball1 from "../assets/images/ball1.png";
import ball2 from "../assets/images/ball2.png";
import ball3 from "../assets/images/ball3.png";

import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";

// ── PNG éléments AiRobot ──
const BASE = "../assets/images/elements/AiRobot/";

export type PinballKey = "AiRobot" | "Mythology" | "Entity" | "GoldWheel";

export interface Collider {
  type: "bumper" | "hole";
  x: number;
  y: number;
  radius: number;
  force?: number;
  score: number;
}

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
  value?: string;
  x: number;
  y: number;
  blink?: boolean;
  alwaysOn?: boolean;
  group?: string;
  score?: number;
  color?: string;
  borderColor?: string;
  size?: number;
  // PNG states
  imgOff?: string; // état éteint  — utilisé aussi comme état unique si pas de imgOn
  imgOn?: string; // état allumé
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
  scoring: { multiplierMax: number };
  fx?: {
    launch?: string;
    bumper?: string;
    flipper?: string;
    hole?: string;
    fxReady?: string;
  };
}

export const pinballData: Record<PinballKey, PinballConfig> = {
  // ───────────────────────────────────────────────────────
  // AI ROBOT
  // x ∈ [-5, 5]   y ∈ [0, 20]   origine = bas centre
  // ───────────────────────────────────────────────────────
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
      { type: "bumper", x: -1.5, y: 11, radius: 0.7, force: 0.12, score: 50 },
      { type: "bumper", x: 0.5, y: 9, radius: 0.7, force: 0.12, score: 50 },
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
      { type: "hole", x: 0, y: 3.5, radius: 0.5, score: 500 },
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
      // ── Lettres ROBOT (PNG unique — clignotement par opacité) ──
      {
        id: "robot_r",
        type: "letter",
        x: -1.4,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.65,
        imgOff: RImg,
      },
      {
        id: "robot_o1",
        type: "letter",
        x: -0.7,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.65,
        imgOff: OImg,
      },
      {
        id: "robot_b",
        type: "letter",
        x: 0.0,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.65,
        imgOff: BImg,
      },
      {
        id: "robot_o2",
        type: "letter",
        x: 0.7,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.65,
        imgOff: OImg,
      },
      {
        id: "robot_t",
        type: "letter",
        x: 1.3,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.65,
        imgOff: TImg,
      },

      // ── FUEL — colonne gauche (PNG unique) ──
      {
        id: "fuel_f",
        type: "letter",
        x: -3.8,
        y: 10.5,
        group: "FUEL",
        blink: true,
        size: 0.6,
        imgOff: F_FUEL,
      },
      {
        id: "fuel_u",
        type: "letter",
        x: -3.8,
        y: 9.8,
        group: "FUEL",
        blink: true,
        size: 0.6,
        imgOff: U_FUEL,
      },
      {
        id: "fuel_e",
        type: "letter",
        x: -3.8,
        y: 9.1,
        group: "FUEL",
        blink: true,
        size: 0.6,
        imgOff: E_FUEL,
      },
      {
        id: "fuel_l",
        type: "letter",
        x: -3.8,
        y: 8.4,
        group: "FUEL",
        blink: true,
        size: 0.6,
        imgOff: L_FUEL,
      },

      // ── TECH — colonne droite (PNG unique) ──
      {
        id: "tech_t",
        type: "letter",
        x: 4.2,
        y: 12.5,
        group: "TECH",
        blink: true,
        size: 0.6,
        imgOff: T_TECH,
      },
      {
        id: "tech_e",
        type: "letter",
        x: 4.2,
        y: 11.8,
        group: "TECH",
        blink: true,
        size: 0.6,
        imgOff: E_TECH,
      },
      {
        id: "tech_c",
        type: "letter",
        x: 4.2,
        y: 11.1,
        group: "TECH",
        blink: true,
        size: 0.6,
        imgOff: C_TECH,
      },
      {
        id: "tech_h",
        type: "letter",
        x: 4.2,
        y: 10.4,
        group: "TECH",
        blink: true,
        size: 0.6,
        imgOff: H_TECH,
      },

      // ── SUN — droite milieu (PNG unique) ──
      {
        id: "sun_s",
        type: "letter",
        x: 3.3,
        y: 10.8,
        group: "SUN",
        blink: true,
        size: 0.55,
        imgOff: S_SUN,
      },
      {
        id: "sun_u",
        type: "letter",
        x: 3.3,
        y: 10.1,
        group: "SUN",
        blink: true,
        size: 0.55,
        imgOff: U_SUN,
      },
      {
        id: "sun_n",
        type: "letter",
        x: 3.3,
        y: 9.4,
        group: "SUN",
        blink: true,
        size: 0.55,
        imgOff: N_SUN,
      },

      // ── ITEM — targets ovales haut (PNG unique) ──
      {
        id: "item_i",
        type: "circle",
        x: -1.8,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.5,
        imgOff: I_ITEM,
      },
      {
        id: "item_t",
        type: "circle",
        x: -0.6,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.5,
        imgOff: T_ITEM,
      },
      {
        id: "item_e",
        type: "circle",
        x: 0.9,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.5,
        imgOff: E_ITEM,
      },
      {
        id: "item_m",
        type: "circle",
        x: 2.3,
        y: 16.5,
        group: "ITEM",
        blink: true,
        size: 0.5,
        imgOff: M_ITEM,
      },

      // ── Multiplicateurs haut (PNG unique) ──
      {
        id: "mult_x2",
        type: "custom",
        x: -2.5,
        y: 18.5,
        group: "MULT",
        blink: true,
        size: 0.65,
        imgOff: X2Img,
      },
      {
        id: "mult_x3",
        type: "custom",
        x: -1.3,
        y: 18.8,
        group: "MULT",
        blink: true,
        size: 0.65,
        imgOff: X3Img,
      },
      {
        id: "mult_x4",
        type: "custom",
        x: -0.1,
        y: 19.0,
        group: "MULT",
        blink: true,
        size: 0.65,
        imgOff: X4Img,
      },
      {
        id: "mult_x6",
        type: "custom",
        x: 1.1,
        y: 18.8,
        group: "MULT",
        blink: true,
        size: 0.65,
        imgOff: X6Img,
      },
      {
        id: "mult_x8",
        type: "custom",
        x: 2.4,
        y: 18.5,
        group: "MULT",
        blink: true,
        size: 0.65,
        imgOff: X8Img,
      },

      // ── Bumpers rouges "50" (PNG unique) ──
      {
        id: "bumper_left",
        type: "bumper",
        x: -1.5,
        y: 11,
        blink: true,
        size: 1.2,
        imgOff: BumperImg,
      },
      {
        id: "bumper_right",
        type: "bumper",
        x: 0.5,
        y: 9,
        blink: true,
        size: 1.2,
        imgOff: BumperImg,
      },

      // ── Flèches grises (Off/On) ──
      {
        id: "arrow_grey_1",
        type: "arrow",
        x: -2.8,
        y: 9.5,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
      },
      {
        id: "arrow_grey_2",
        type: "arrow",
        x: -2.5,
        y: 8.8,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
      },
      {
        id: "arrow_grey_3",
        type: "arrow",
        x: -2.2,
        y: 8.1,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
      },

      // ── Flèches rouges EXTRA BALL / JACKPOT (Off/On) ──
      {
        id: "arrow_red_1",
        type: "arrow",
        x: -1.2,
        y: 7.5,
        blink: true,
        size: 0.6,
        imgOff: ArrowRedOff,
        imgOn: ArrowRedOn,
      },
      {
        id: "arrow_red_2",
        type: "arrow",
        x: -0.8,
        y: 8.2,
        blink: true,
        size: 0.6,
        imgOff: ArrowRedOff,
        imgOn: ArrowRedOn,
      },

      // ── Flèches bleues DOUBLE BONUS (Off/On) ──
      {
        id: "arrow_blue_left_1",
        type: "arrow",
        x: 3.0,
        y: 8.5,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueLeftOff,
        imgOn: ArrowBlueLeftOn,
      },
      {
        id: "arrow_blue_right_1",
        type: "arrow",
        x: 3.3,
        y: 7.8,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueRightOff,
        imgOn: ArrowBlueRightOn,
      },

      // ── Extra Ball (Off/On) ──
      {
        id: "extraball",
        type: "custom",
        x: 0,
        y: 5.5,
        blink: true,
        size: 1.0,
        imgOff: ExtraBallRedOff,
        imgOn: ExtraBallRedOn,
      },

      // ── Revenge AI (Off/On) ──
      {
        id: "revenge_ai",
        type: "custom",
        x: 4.5,
        y: 1.5,
        blink: true,
        size: 1.1,
        imgOff: RevengeAiOff,
        imgOn: RevengeAiOn,
      },

      // ── Flippers principaux bas (PNG unique, alwaysOn) ──
      {
        id: "flipper_left",
        type: "flipper",
        x: -1.5,
        y: 2.2,
        alwaysOn: true,
        size: 2.2,
        imgOff: FlipperLeftImg,
      },
      {
        id: "flipper_right",
        type: "flipper",
        x: 1.5,
        y: 2.2,
        alwaysOn: true,
        size: 2.2,
        imgOff: FlipperRightImg,
      },

      // ── Rebonds (PNG unique, alwaysOn) ──
      {
        id: "rebond_left",
        type: "custom",
        x: -3.2,
        y: 5.5,
        alwaysOn: true,
        size: 1.0,
        imgOff: RebondLeftImg,
      },
      {
        id: "rebond_right",
        type: "custom",
        x: 3.2,
        y: 5.5,
        alwaysOn: true,
        size: 1.0,
        imgOff: RebondRightImg,
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

  // ───────────────────────────────────────────────────────
  // MYTHOLOGY
  // ───────────────────────────────────────────────────────
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

  // ───────────────────────────────────────────────────────
  // ENTITY
  // ───────────────────────────────────────────────────────
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

  // ───────────────────────────────────────────────────────
  // GOLDWHEEL
  // ───────────────────────────────────────────────────────
  GoldWheel: {
    key: "GoldWheel",
    title: "GoldWheel",
    img: GoldWheelImg,
    ballImg: ball1,
    themeColor: "#AC732E",
    musicPreview: IntroGoldWheel,
    musicGame: GameGoldWheel,
    musicEnd: EndGoldWheel,
    launch: LaunchGoldWheel,
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
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: ExtraballGoldWheel,
    },
  },
};
