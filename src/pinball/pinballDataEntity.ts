import { PinballConfig } from "./pinballTypes";
import EntityImg from "../assets/images/ENTITY PINBALL.webp";
import ball3 from "../assets/images/ball3.webp";
// Ressort
import SpringImg from "../assets/images/ressor.webp";

import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";

// 🎵 musiques ENTITY
import IntroEntity from "../assets/audio/intro pinball ENTITY.mp3";
import EndEntity from "../assets/audio/EndEntity.mp3";
import ExtraBallEntity from "../assets/audio/GameNightmare.mp3";
import EntityGame from "../assets/audio/EntityGame.mp3";
import LaunchEntity from "../assets/audio/LaunchEntity.mp3";

export const pinballDataEntity: PinballConfig = {
  // ───────────────────────────────────────────────────────
  // ENTITY
  // x ∈ [-5, 5]   y ∈ [0, 20]   origine = bas centre
  // ───────────────────────────────────────────────────────

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
};
