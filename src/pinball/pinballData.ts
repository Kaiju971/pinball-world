// src/pinball/pinballData.ts
import IgnitionImg from "../assets/images/Ignition.png";
import BeatBoxImg from "../assets/images/BeatBox.png";
import NightmareImg from "../assets/images/Nightmare.png";
import SteelWheelImg from "../assets/images/SteelWheel.png";

import BeatBoxMusic from "../assets/audio/GameBeatBox.mp3";
import IgnitionMusic from "../assets/audio/GameIgnition.mp3";
import NightmareMusic from "../assets/audio/GameNightmare.mp3";
import SteelWheelMusic from "../assets/audio/GameSteelWheel.mp3";

export type PinballKey = "Ignition" | "BeatBox" | "Nightmare" | "SteelWheel";

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
  Ignition: {
    key: "Ignition",
    title: "Ignition",
    img: IgnitionImg,
    themeColor: "#b30000",
    music: IgnitionMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  BeatBox: {
    key: "BeatBox",
    title: "BeatBox",
    img: BeatBoxImg,
    themeColor: "#ff8c00",
    music: BeatBoxMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  Nightmare: {
    key: "Nightmare",
    title: "Nightmare",
    img: NightmareImg,
    themeColor: "#244659",
    music: NightmareMusic,
    fx: {
      bumper: require("../assets/audio/bumper.wav").default,
      flipper: require("../assets/audio/flipper.wav").default,
      launch: require("../assets/audio/launch.wav").default,
      hole: require("../assets/audio/hole.wav").default,
    },
  },
  SteelWheel: {
    key: "SteelWheel",
    title: "Steel Wheel",
    img: SteelWheelImg,
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
