// src/pinball/pinballData.ts
import AiRobotImg from "../assets/images/AI PINBALL PINBALL.png";
import MythologyImg from "../assets/images/Mythology.png";
import EntityImg from "../assets/images/Entity.png";
import GoldWheelImg from "../assets/images/GoldWheel.png";

import BeatBoxMusic from "../assets/audio/GameBeatBox.mp3";
import IgnitionMusic from "../assets/audio/GameIgnition.mp3";
import NightmareMusic from "../assets/audio/GameNightmare.mp3";
import SteelWheelMusic from "../assets/audio/GameSteelWheel.mp3";

export type PinballKey = "AiRobot" | "BeatBox" | "Nightmare" | "SteelWheel";

export interface PinballConfig {
  key: PinballKey | string;
  title: string;
  img: string;
  themeColor: string;
  music?: string; // chemin vers musique d'ambiance (optionnel)
  fx?: {
    bumper?: string;
    flipper?: string;
    launch?: string;
    hole?: string;
  };
}

export const pinballData: Record<string, PinballConfig> = {
  AiRobot: {
    key: "AiRobot",
    title: "AiRobot",
    img: AiRobotImg,
    themeColor: "#b30000",
    music: IgnitionMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  Mythology: {
    key: "Mythology",
    title: "Mythology",
    img: MythologyImg,
    themeColor: "#ff8c00",
    music: BeatBoxMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  Entity: {
    key: "Entity",
    title: "Entity",
    img: EntityImg,
    themeColor: "#244659",
    music: NightmareMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  GoldWheel: {
    key: "GoldWheel",
    title: "GoldWheel",
    img: GoldWheelImg,
    themeColor: "#7a4b2a",
    music: SteelWheelMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
};
