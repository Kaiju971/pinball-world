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
import R_OnImg from "../assets/images/elements/AiRobot/R-On.png";
import R_OffImg from "../assets/images/elements/AiRobot/R-Off.png";
import O_OnImg from "../assets/images/elements/AiRobot/O-On.png";
import O_OffImg from "../assets/images/elements/AiRobot/O-Off.png";
import B_OnImg from "../assets/images/elements/AiRobot/B-On.png";
import B_OffImg from "../assets/images/elements/AiRobot/B-Off.png";
import T_OnImg from "../assets/images/elements/AiRobot/T-On.png";
import T_OffImg from "../assets/images/elements/AiRobot/T-Off.png";

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
import F_FUELOn from "../assets/images/elements/AiRobot/F-FUELOn.png";
import F_FUELOff from "../assets/images/elements/AiRobot/F-FUELOff.png";
import U_FUELOn from "../assets/images/elements/AiRobot/U-FUELOn.png";
import U_FUELOff from "../assets/images/elements/AiRobot/U-FUELOff.png";
import E_FUELOn from "../assets/images/elements/AiRobot/E-FUELOn.png";
import E_FUELOff from "../assets/images/elements/AiRobot/E-FUELOff.png";
import L_FUELOn from "../assets/images/elements/AiRobot/L-FUELOn.png";
import L_FUELOff from "../assets/images/elements/AiRobot/L-FUELOff.png";

// Ellipses TECH
import C_TECHOn from "../assets/images/elements/AiRobot/C-TECHOn.png";
import C_TECHOff from "../assets/images/elements/AiRobot/C-TECHOff.png";

import E_TECHOn from "../assets/images/elements/AiRobot/E-TECHOn.png";
import E_TECHOff from "../assets/images/elements/AiRobot/E-TECHOff.png";

import H_TECHOn from "../assets/images/elements/AiRobot/H-TECHOn.png";
import H_TECHOff from "../assets/images/elements/AiRobot/H-TECHOff.png";

import T_TECHOn from "../assets/images/elements/AiRobot/T-TECHOn.png";
import T_TECHOff from "../assets/images/elements/AiRobot/T-TECHOff.png";

// Ellipses SUN
import S_SUNOn from "../assets/images/elements/AiRobot/S-SUNOn.png";
import S_SUNOff from "../assets/images/elements/AiRobot/S-SUNOff.png";

import U_SUNOn from "../assets/images/elements/AiRobot/U-SUNOn.png";
import U_SUNOff from "../assets/images/elements/AiRobot/U-SUNOff.png";

import N_SUNOn from "../assets/images/elements/AiRobot/N-SUNOn.png";
import N_SUNOff from "../assets/images/elements/AiRobot/N-SUNOff.png";

// Ellipses ITEM
import I_ITEMOn from "../assets/images/elements/AiRobot/I-ITEMOn.png";
import I_ITEMOff from "../assets/images/elements/AiRobot/I-ITEMOff.png";

import T_ITEMOn from "../assets/images/elements/AiRobot/T-ITEMOn.png";
import T_ITEMOff from "../assets/images/elements/AiRobot/T-ITEMOff.png";

import E_ITEMOn from "../assets/images/elements/AiRobot/E-ITEMOn.png";
import E_ITEMOff from "../assets/images/elements/AiRobot/E-ITEMOff.png";

import M_ITEMOn from "../assets/images/elements/AiRobot/M-ITEMOn.png";
import M_ITEMOff from "../assets/images/elements/AiRobot/M-ITEMOff.png";

// Multiplicateurs
import X2ImgOn from "../assets/images/elements/AiRobot/x2On.png";
import X2ImgOff from "../assets/images/elements/AiRobot/x2Off.png";

import X3ImgOn from "../assets/images/elements/AiRobot/x3On.png";
import X3ImgOff from "../assets/images/elements/AiRobot/x3Off.png";

import X4ImgOn from "../assets/images/elements/AiRobot/x4On.png";
import X4ImgOff from "../assets/images/elements/AiRobot/x4Off.png";

import X6ImgOn from "../assets/images/elements/AiRobot/x6On.png";
import X6ImgOff from "../assets/images/elements/AiRobot/x6Off.png";

import X8ImgOn from "../assets/images/elements/AiRobot/x8On.png";
import X8ImgOff from "../assets/images/elements/AiRobot/x8Off.png";

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
  width?: number; // ✅ largeur individuelle
  height?: number; // ✅ hauteur individuelle
  size?: number;
  // PNG states
  imgOff?: string; // état éteint  — utilisé aussi comme état unique si pas de imgOn
  imgOn?: string; // état allumé
  rotation?: number; // degrés, sens horaire
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
        x: -1.5,
        y: 7.2,
        group: "ROBOT",
        blink: true,
        size: 0.8,
        imgOff: R_OffImg,
        imgOn: R_OnImg,
      },
      {
        id: "robot_o1",
        type: "letter",
        x: -0.8,
        y: 7.2,
        group: "ROBOT",
        blink: true,
        size: 0.8,
        imgOff: O_OffImg,
        imgOn: O_OnImg,
      },
      {
        id: "robot_b",
        type: "letter",
        x: 0.0,
        y: 7.2,
        group: "ROBOT",
        blink: true,
        size: 0.8,
        imgOff: B_OffImg,
        imgOn: B_OnImg,
      },
      {
        id: "robot_o2",
        type: "letter",
        x: 0.8,
        y: 7.2,
        group: "ROBOT",
        blink: true,
        size: 0.8,
        imgOff: O_OffImg,
        imgOn: O_OnImg,
      },
      {
        id: "robot_t",
        type: "letter",
        x: 1.5,
        y: 7.2,
        group: "ROBOT",
        blink: true,
        size: 0.8,
        imgOff: T_OffImg,
        imgOn: T_OnImg,
      },

      // ── FUEL — colonne gauche (PNG unique) ──
      {
        id: "fuel_f",
        type: "letter",
        x: -4.37,
        y: 12.5,
        group: "FUEL",
        blink: true,
        size: 0.43,
        imgOff: F_FUELOff,
        imgOn: F_FUELOn,
      },
      {
        id: "fuel_u",
        type: "letter",
        x: -4.37,
        y: 11.6,
        group: "FUEL",
        blink: true,
        size: 0.43,
        imgOff: U_FUELOff,
        imgOn: U_FUELOn,
      },
      {
        id: "fuel_e",
        type: "letter",
        x: -4.37,
        y: 10.73,
        group: "FUEL",
        blink: true,
        size: 0.43,
        imgOff: E_FUELOff,
        imgOn: E_FUELOn,
      },
      {
        id: "fuel_l",
        type: "letter",
        x: -4.37,
        y: 9.9,
        group: "FUEL",
        blink: true,
        size: 0.43,
        imgOff: L_FUELOff,
        imgOn: L_FUELOn,
      },

      // ── TECH — colonne droite (PNG unique) ──
      {
        id: "tech_t",
        type: "letter",
        x: 3.95,
        y: 16.25,
        group: "TECH",
        blink: true,
        size: 0.43,
        imgOff: T_TECHOff,
        imgOn: T_TECHOn,
      },
      {
        id: "tech_e",
        type: "letter",
        x: 3.999,
        y: 15.5,
        group: "TECH",
        blink: true,
        size: 0.43,
        imgOff: E_TECHOff,
        imgOn: E_TECHOn,
      },
      {
        id: "tech_c",
        type: "letter",
        x: 4.1,
        y: 14.7,
        group: "TECH",
        blink: true,
        size: 0.43,
        imgOff: C_TECHOff,
        imgOn: C_TECHOn,
      },
      {
        id: "tech_h",
        type: "letter",
        x: 4.13,
        y: 13.95,
        group: "TECH",
        blink: true,
        size: 0.43,
        imgOff: H_TECHOff,
        imgOn: H_TECHOn,
      },

      // ── SUN — droite milieu (PNG unique) ──
      {
        id: "sun_s",
        type: "letter",
        x: 2.9,
        y: 13.7,
        group: "SUN",
        blink: true,
        size: 0.4,
        imgOff: S_SUNOff,
        imgOn: S_SUNOn,
      },
      {
        id: "sun_u",
        type: "letter",
        x: 3.2,
        y: 13.22,
        group: "SUN",
        blink: true,
        size: 0.4,
        imgOff: U_SUNOff,
        imgOn: U_SUNOn,
      },
      {
        id: "sun_n",
        type: "letter",
        x: 3.45,
        y: 12.75,
        group: "SUN",
        blink: true,
        size: 0.4,
        imgOff: N_SUNOff,
        imgOn: N_SUNOn,
      },

      // ── ITEM — targets ovales haut (PNG unique) ──
      {
        id: "item_i",
        type: "circle",
        x: -1.8,
        y: 17.45,
        group: "ITEM",
        blink: true,
        size: 0.4,
        imgOff: I_ITEMOff,
        imgOn: I_ITEMOn,
      },
      {
        id: "item_t",
        type: "circle",
        x: -0.19,
        y: 17,
        group: "ITEM",
        blink: true,
        size: 0.4,
        imgOff: T_ITEMOff,
        imgOn: T_ITEMOn,
      },
      {
        id: "item_e",
        type: "circle",
        x: 1.65,
        y: 17,
        group: "ITEM",
        blink: true,
        size: 0.4,
        imgOff: E_ITEMOff,
        imgOn: E_ITEMOn,
      },
      {
        id: "item_m",
        type: "circle",
        x: 3.1,
        y: 17.45,
        group: "ITEM",
        blink: true,
        size: 0.4,
        imgOff: M_ITEMOff,
        imgOn: M_ITEMOn,
      },

      // ── Multiplicateurs haut (PNG unique) ──
      {
        id: "mult_x2",
        type: "custom",
        x: -1.25,
        y: 18.35,
        group: "MULT",
        blink: true,
        size: 0.5,
        imgOff: X2ImgOff,
        imgOn: X2ImgOn,
      },
      {
        id: "mult_x3",
        type: "custom",
        x: -0.4,
        y: 18.75,
        group: "MULT",
        blink: true,
        size: 0.5,
        imgOff: X3ImgOff,
        imgOn: X3ImgOn,
      },
      {
        id: "mult_x4",
        type: "custom",
        x: 0.45,
        y: 19.1,
        group: "MULT",
        blink: true,
        size: 0.5,
        imgOff: X4ImgOff,
        imgOn: X4ImgOn,
      },
      {
        id: "mult_x6",
        type: "custom",
        x: 1.29,
        y: 18.76,
        group: "MULT",
        blink: true,
        size: 0.5,
        imgOff: X6ImgOff,
        imgOn: X6ImgOn,
      },
      {
        id: "mult_x8",
        type: "custom",
        x: 2.3,
        y: 18.4,
        group: "MULT",
        blink: true,
        size: 0.5,
        imgOff: X8ImgOff,
        imgOn: X8ImgOn,
      },

      // ── Bumpers rouges "50" (PNG unique) ──
      {
        id: "bumper_left",
        type: "bumper",
        x: -1.5,
        y: 14.5,
        blink: true,
        size: 2.3,
        imgOff: BumperImg,
      },
      {
        id: "bumper_right",
        type: "bumper",
        x: 0.1,
        y: 12.5,
        blink: true,
        size: 2.3,
        imgOff: BumperImg,
      },

      // ── Flèches grises (Off/On) ──
      {
        id: "arrow_grey_1",
        type: "arrow",
        x: -2.55,
        y: 11.05,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
        rotation: 19, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_grey_2",
        type: "arrow",
        x: -2.28,
        y: 10.2,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
        rotation: 19, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_grey_3",
        type: "arrow",
        x: -3.27,
        y: 10.51,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
        rotation: 17, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_grey_4",
        type: "arrow",
        x: -3,
        y: 9.7,
        blink: true,
        size: 0.6,
        imgOff: ArrowGreyOff,
        imgOn: ArrowGreyOn,
        rotation: 17, // ← tourne de 90° dans le sens horaire
      },

      // ── Flèches rouges EXTRA BALL / JACKPOT (Off/On) ──
      {
        id: "arrow_red_1",
        type: "arrow",
        x: -3.5,
        y: 11.4,
        blink: true,
        size: 0.6,
        imgOff: ArrowRedOff,
        imgOn: ArrowRedOn,
        rotation: 17, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_red_2",
        type: "arrow",
        x: -2,
        y: 9.4,
        blink: true,
        size: 0.6,
        imgOff: ArrowRedOff,
        imgOn: ArrowRedOn,
        rotation: 17, // ← tourne de 90° dans le sens horaire
      },

      // ── Flèches bleues DOUBLE BONUS (Off/On) ──
      {
        id: "arrow_blue_left_1",
        type: "arrow",
        x: -3.8,
        y: 12.3,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueLeftOff,
        imgOn: ArrowBlueLeftOn,
        rotation: 17, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_blue_right_1",
        type: "arrow",
        x: 3.6,
        y: 11.1,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueRightOff,
        imgOn: ArrowBlueRightOn,
        rotation: -20, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_blue_right_2",
        type: "arrow",
        x: 3.3,
        y: 10.33,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueRightOff,
        imgOn: ArrowBlueRightOn,
        rotation: -20, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "arrow_blue_right_3",
        type: "arrow",
        x: 3,
        y: 9.4,
        blink: true,
        size: 0.6,
        imgOff: ArrowBlueRightOff,
        imgOn: ArrowBlueRightOn,
        rotation: -20, // ← tourne de 90° dans le sens horaire
      },

      // ── Extra Ball (Off/On) ──
      {
        id: "extraball",
        type: "custom",
        x: -0.1,
        y: 4.15,
        blink: true,
        // size: 1.2,
        width: 1.6, // ← largeur
        height: 1.1, // ← hauteur
        imgOff: ExtraBallRedOff,
        imgOn: ExtraBallRedOn,
      },

      // ── Revenge AI (Off/On) ──
      {
        id: "revenge_ai",
        type: "custom",
        x: 3.5,
        y: 1,
        blink: true,
        size: 1.1,
        imgOff: RevengeAiOff,
        imgOn: RevengeAiOn,
      },

      // ── Flippers principaux bas (PNG unique, alwaysOn) ──
      {
        id: "flipper_left",
        type: "flipper",
        x: -1.35,
        y: 2.1,
        alwaysOn: true,
        // size: 2.2,
        width: 1.8, // ← largeur
        height: 1, // ← hauteur
        imgOff: FlipperLeftImg,
        rotation: 15, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "flipper_right",
        type: "flipper",
        x: 1.2,
        y: 2,
        alwaysOn: true,
        // size: 2.2,
        width: 1.8, // ← largeur
        height: 1, // ← hauteur
        imgOff: FlipperRightImg,
        rotation: -16, // ← tourne de 90° dans le sens horaire
      },

      // ── Rebonds (PNG unique, alwaysOn) ──
      {
        id: "rebond_left",
        type: "custom",
        x: -2.7,
        y: 5.3,
        alwaysOn: true,
        // size: 3,
        width: 2.6, // ← largeur
        height: 4.7, // ← hauteur
        imgOff: RebondLeftImg,
        rotation: 0, // ← tourne de 90° dans le sens horaire
      },
      {
        id: "rebond_right",
        type: "custom",
        x: 2.5,
        y: 5.3,
        alwaysOn: true,
        // size: 3.5,
        width: 2.6, // ← largeur
        height: 4.7, // ← hauteur
        imgOff: RebondRightImg,
        rotation: 0, // ← tourne de 90° dans le sens horaire
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
