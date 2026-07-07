import { PinballConfig } from "./pinballTypes";
import GoldWheelImg from "../assets/images/GOLDWHEEL PINBALL.png";
import ball1 from "../assets/images/ball1.png";

// Ressort
import SpringImg from "../assets/images/ressor.png";
import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";
// 🎵 musiques GOLDWHEEL
import GameGoldWheel from "../assets/audio/GameGoldWheel.mp3";
import IntroGoldWheel from "../assets/audio/IntroGoldWheel.mp3";
import EndGoldWheel from "../assets/audio/EndGoldWheel.mp3";
import ExtraballGoldWheel from "../assets/audio/BonusExtraGoldWheel.mp3";
import LaunchGoldWheel from "../assets/audio/LaunchGoldWheel.mp3";

export const pinballDataGoldWheel: PinballConfig = {
  // ───────────────────────────────────────────────────────
  // GOLD WHEEL
  // x ∈ [-5, 5]   y ∈ [0, 20]   origine = bas centre
  // ───────────────────────────────────────────────────────

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
  // ✅ Balle + caméra GoldWheel
  ballStartX: 4.3,
  ballStartY: 2.8,
  cameraFocusY: 2.0,
  colliders: [
    { type: "bumper", x: 2, y: 10, radius: 0.5, force: 0.08, score: 100 },
    { type: "hole", x: -1, y: 5, radius: 0.6, score: 500 },
  ],

  // pinballDataAiRobot.ts
  lane: {
    exitY: 18.5,
    entryVelX: -0.05,
  },
  bounds: {
    left: -4.7,
    right: 4.2,
    top: 19.8,
  },
  flipperPhysics: {
    halfLen: 0.95,
    thickness: 0.45,
    kickVY: 0.22,
    kickVX: 0.12,
    passiveBounce: 0.25,
  },
  elements: [
    {
      id: "spring",
      type: "spring",
      x: 4.3,
      y: 1.5,
      alwaysOn: true,
      width: 0.6,
      height: 1.2,
      imgOff: SpringImg,
    },
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
};
