import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
import MythologyImg from "../assets/images/MYTHOLOGY PINBALL.png";
import EntityImg from "../assets/images/ENTITY PINBALL.png";
import GoldWheelImg from "../assets/images/GOLDWHEEL PINBALL.png";

import BeatBoxMusic from "../assets/audio/Rise Of The Hero 11-02-2026 12-48_1.wav";



import IgnitionMusic from "../assets/audio/GameIgnition.mp3";



import NightmareMusic from "../assets/audio/GameNightmare.mp3";
import IntroEntity from "../assets/audio/intro pinball ENTITY.mp3";



import SteelWheelMusic from "../assets/audio/GameSteelWheel.mp3";

import launcherImg from "../assets/images/launcher.png";
import ball1 from "../assets/images/table_ignition.png";
import ball2 from "../assets/images/ball2.png";
import ball3 from "../assets/images/ball3.png";

import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";

export type PinballKey = "AiRobot" | "Mythology" | "Entity" | "GoldWheel";

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
    ballImg: ball1,
    themeColor: "#b30000",
    musicPreview: IgnitionMusic,
    musicGame: IgnitionMusic,
    musicEnd: IgnitionMusic,
    launch: launcherImg,
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
    },
  },

  Mythology: {
    key: "Mythology",
    title: "Mythology",
    img: MythologyImg,
    ballImg: ball2,
    themeColor: "#ff8c00",
    musicPreview: BeatBoxMusic,
    musicGame: BeatBoxMusic,
    musicEnd: BeatBoxMusic,
    launch: launcherImg,
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
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
    ballImg: ball2,
    themeColor: "#7a4b2a",
    musicPreview: SteelWheelMusic,
    musicGame: SteelWheelMusic,
    musicEnd: SteelWheelMusic,
    launch: launcherImg,
    fx: {
      bumper: bumperFx,
      flipper: flipperFx,
      hole: holeFx,
      fxReady: holeFx,
    },
  },
};
