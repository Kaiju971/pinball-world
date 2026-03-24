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

export interface LettersConfig {
  word: string;
  positions: { x: number; y: number }[];
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

  letters: LettersConfig;

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
      gravity: -0.002,
      bounce: 0.8,
    },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    letters: {
      word: "ROBOT",
      positions: [
        { x: -2, y: 12 },
        { x: -1, y: 13 },
        { x: 0, y: 14 },
        { x: 1, y: 13 },
        { x: 2, y: 12 },
      ],
    },

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
      gravity: -0.002,
      bounce: 0.8,
    },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    letters: {
      word: "MYTHOLOGY",
      positions: [
        { x: -2, y: 12 },
        { x: -1, y: 13 },
        { x: 0, y: 14 },
        { x: 1, y: 13 },
        { x: 2, y: 12 },
        { x: 3, y: 11 },
        { x: 4, y: 10 },
        { x: 5, y: 9 },
        { x: 6, y: 8 },
      ],
    },

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
      gravity: -0.0015,
      bounce: 0.8,
    },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    letters: {
      word: "ENTITY",
      positions: [
        { x: -2, y: 12 },
        { x: -1, y: 13 },
        { x: 0, y: 14 },
        { x: 1, y: 13 },
        { x: 2, y: 12 },
        { x: 3, y: 11 },
      ],
    },

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
      gravity: -0.002,
      bounce: 0.8,
    },

    colliders: [
      { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
      { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
    ],

    letters: {
      word: "GOLDWHEEL",
      positions: [
        { x: -2, y: 12 },
        { x: -1, y: 13 },
        { x: 0, y: 14 },
        { x: 1, y: 13 },
        { x: 2, y: 12 },
        { x: 3, y: 11 },
      ],
    },

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
