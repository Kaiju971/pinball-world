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
import NightmareMusic from "../assets/audio/GameNightmare.mp3";
import IntroEntity from "../assets/audio/intro pinball ENTITY.mp3";
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
  group?: string; // ex: "ROBOT", "BONUS", etc.
  score?: number;

  /** style spécifique */
  color?: string;
  size?: number;
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

  // 🎵 musiques
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
    themeColor: "#b30000",
    musicPreview: IntroAiRobot,
    musicGame: AiRobotMusic,
    musicEnd: EndAiRobot,
    launch: LaunchAiRobot,

    physics: {
      gravity: -0.004,
      bounce: 0.8,
    },

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
      },
      {
        id: "o1",
        type: "letter",
        value: "O",
        x: -0.7,
        y: 7,
        group: "ROBOT",
        blink: true,
      },
      {
        id: "b",
        type: "letter",
        value: "B",
        x: -0.09,
        y: 7,
        group: "ROBOT",
        blink: true,
      },
      {
        id: "o2",
        type: "letter",
        value: "O",
        x: 0.64,
        y: 7,
        group: "ROBOT",
        blink: true,
      },
      {
        id: "t",
        type: "letter",
        value: "T",
        x: 1.26,
        y: 7,
        group: "ROBOT",
        blink: true,
      },

      { id: "arrow1", type: "arrow", x: 3, y: 8, blink: true },
      {
        id: "circle1",
        type: "circle",
        x: -3,
        y: 6,
        blink: true,
      },
    ],

    scoring: {
      multiplierMax: 8,
    },
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
    themeColor: "#ff8c00",
    musicPreview: IntroMythology,
    musicGame: MythologyMusic,
    musicEnd: EndMythology,
    launch: LaunchMythology,

    physics: {
      gravity: -0.004,
      bounce: 0.8,
    },

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
      },
      {
        id: "y1",
        type: "letter",
        value: "Y",
        x: -1.9,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "t",
        type: "letter",
        value: "T",
        x: -1.4,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "h",
        type: "letter",
        value: "H",
        x: -0.85,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "o1",
        type: "letter",
        value: "O",
        x: -0.26,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "l",
        type: "letter",
        value: "L",
        x: 0.26,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "o2",
        type: "letter",
        value: "O",
        x: 0.82,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "g",
        type: "letter",
        value: "G",
        x: 1.45,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },
      {
        id: "y2",
        type: "letter",
        value: "Y",
        x: 1.94,
        y: 4.8,
        group: "MYTHOLOGY",
        blink: true,
      },

      { id: "arrow1", type: "arrow", x: -4, y: 10, alwaysOn: true },

      { id: "special", type: "custom", x: 4.2, y: 19 },
    ],

    scoring: {
      multiplierMax: 10,
    },
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
    themeColor: "#244659",
    musicPreview: IntroEntity,
    musicGame: NightmareMusic,
    musicEnd: NightmareMusic,
    launch: launcherImg,

    physics: {
      gravity: -0.004,
      bounce: 0.8,
    },

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
      },
      {
        id: "n",
        type: "letter",
        value: "N",
        x: -0.9,
        y: 4.8,
        group: "ENTITY",
        blink: true,
      },
      {
        id: "t1",
        type: "letter",
        value: "T",
        x: -0.38,
        y: 4.8,
        group: "ENTITY",
        blink: true,
      },
      {
        id: "i",
        type: "letter",
        value: "I",
        x: 0,
        y: 4.8,
        group: "ENTITY",
        blink: true,
      },
      {
        id: "t2",
        type: "letter",
        value: "T",
        x: 0.36,
        y: 4.8,
        group: "ENTITY",
        blink: true,
      },
      {
        id: "y",
        type: "letter",
        value: "Y",
        x: 0.84,
        y: 4.8,
        group: "ENTITY",
        blink: true,
      },
      {
        id: "bonus1",
        type: "circle",
        x: 0,
        y: 10,
        group: "BONUS",
        blink: true,
      },
      {
        id: "bonus2",
        type: "circle",
        x: 1,
        y: 11,
        group: "BONUS",
        blink: true,
      },

      { id: "arrow1", type: "arrow", x: -2, y: 10, alwaysOn: true },

      { id: "special", type: "custom", x: 2, y: 12 },
    ],

    scoring: {
      multiplierMax: 10,
    },
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
    },
  },

  GoldWheel: {
    key: "GoldWheel",
    title: "GoldWheel",
    img: GoldWheelImg,
    ballImg: ball1,
    themeColor: "#7a4b2a",
    musicPreview: SteelWheelMusic,
    musicGame: SteelWheelMusic,
    musicEnd: SteelWheelMusic,
    launch: launcherImg,
    physics: {
      gravity: -0.004,
      bounce: 0.8,
    },

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
      },
      {
        id: "o",
        type: "letter",
        value: "o",
        x: -1.7,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "l1",
        type: "letter",
        value: "l",
        x: -1.33,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "d",
        type: "letter",
        value: "d",
        x: -0.93,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "w",
        type: "letter",
        value: "W",
        x: -0.02,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "h",
        type: "letter",
        value: "h",
        x: 0.7,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "e1",
        type: "letter",
        value: "e",
        x: 1.2,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "e2",
        type: "letter",
        value: "e",
        x: 1.73,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "l2",
        type: "letter",
        value: "l",
        x: 2.1,
        y: 4.2,
        group: "GOLDWHEEL",
        blink: true,
      },
      {
        id: "bonus1",
        type: "circle",
        x: 0,
        y: 10,
        group: "BONUS",
        blink: true,
      },
      {
        id: "bonus2",
        type: "circle",
        x: 1,
        y: 11,
        group: "BONUS",
        blink: true,
      },

      { id: "arrow1", type: "arrow", x: 1.8, y: 16, alwaysOn: true },

      { id: "special", type: "custom", x: 2, y: 12 },
    ],

    scoring: {
      multiplierMax: 7,
    },

    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
    },
  },
};
