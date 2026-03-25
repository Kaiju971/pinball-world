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

export interface LightElement {
  id: string;
  type: "letter" | "arrow" | "circle" | "custom";

  /** affichage */
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

  /** style — size = taille du PlaneGeometry (ex: 0.6, 0.9, 1.2) */
  color?: string;
  borderColor?: string; // ✅ nouveau
  size?: number; // taille individuelle du mesh
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
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    elements: [
      {
        id: "r",
        type: "letter",
        value: "R",
        x: -1.4,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.7,
        borderColor: "#ff4444",
      },
      {
        id: "o1",
        type: "letter",
        value: "O",
        x: -0.7,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.7,
        borderColor: "#ff4444",
      },
      {
        id: "b",
        type: "letter",
        value: "B",
        x: -0.09,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.7,
        borderColor: "#ff4444",
      },
      {
        id: "o2",
        type: "letter",
        value: "O",
        x: 0.64,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.7,
        borderColor: "#ff4444",
      },
      {
        id: "t",
        type: "letter",
        value: "T",
        x: 1.26,
        y: 7,
        group: "ROBOT",
        blink: true,
        size: 0.7,
        borderColor: "#ff4444",
      },
      {
        id: "arrow1",
        type: "arrow",
        x: 3,
        y: 8,
        blink: true,
        size: 0.8,
        borderColor: "#ff4444",
      },
      {
        id: "circle1",
        type: "circle",
        x: -3,
        y: 6,
        blink: true,
        size: 0.5,
        borderColor: "#ff4444",
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
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
    },
  },
};
