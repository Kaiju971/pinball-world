import { PinballConfig } from "./pinballTypes";
import AiRobotImg from "../assets/images/AI PINBALL PINBALL2.webp";
import ball3 from "../assets/images/ball3.webp";
// Ressort
import SpringImg from "../assets/images/ressor.webp";

import bumperFx from "../assets/audio/bumper.wav";
import flipperFx from "../assets/audio/flipper.wav";
import holeFx from "../assets/audio/hole.wav";

// Lettres ROBOT
import R_OnImg from "../assets/images/elements/AiRobot/R-On.png";
import R_OffImg from "../assets/images/elements/AiRobot/R-Off.png";
import O_OnImg from "../assets/images/elements/AiRobot/O-On.png";
import O_OffImg from "../assets/images/elements/AiRobot/O-Off.png";
import B_OnImg from "../assets/images/elements/AiRobot/B-On.png";
import B_OffImg from "../assets/images/elements/AiRobot/B-Off.png";
import T_OnImg from "../assets/images/elements/AiRobot/T-On.png";
import T_OffImg from "../assets/images/elements/AiRobot/T-Off.png";
// Flèches AI ROBOT
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

// Ellipses BLEU
import ELLIPSEBLEUOn from "../assets/images/elements/AiRobot/EllipseBleuOn.png";
import ELLIPSEBLEUOff from "../assets/images/elements/AiRobot/EllipseBleuOff.png";
// Ellipses ROUGE
import ELLIPSEROUGEOn from "../assets/images/elements/AiRobot/EllipseRougeOn.png";
import ELLIPSEROUGEOff from "../assets/images/elements/AiRobot/EllipseRougeOff.png";
// Ellipses BUMPERS
import EllipseBumperOn from "../assets/images/elements/AiRobot/EllipseBumperOn.png";
import EllipseBumperOff from "../assets/images/elements/AiRobot/EllipseBumperOff.png";
// Ellipses WHITE
import ELLIPSEWHITEOn from "../assets/images/elements/AiRobot/EllipseWhiteOn.png";
import ELLIPSEWHITEOff from "../assets/images/elements/AiRobot/EllipseWhiteOff.png";
// Ellipses HOLE BONUS
import HOLEBONUSOn from "../assets/images/elements/AiRobot/HoleBonusOn.png";
import HOLEBONUSOff from "../assets/images/elements/AiRobot/HoleBonusOff.png";
// Bonus 500 Rouge
import BONUSROUGEOn from "../assets/images/elements/AiRobot/B-BONUSRougeOn.png";
import BONUSROUGEOff from "../assets/images/elements/AiRobot/B-BONUSRougeOff.png";
// Ellipses Bonus chiffres
// Ellipses Bonus 50
import BONUS50On from "../assets/images/elements/AiRobot/B-BONUS50-On.png";
import BONUS50Off from "../assets/images/elements/AiRobot/B-BONUS50-Off.png";
// Ellipses Bonus 100
import BONUS100On from "../assets/images/elements/AiRobot/B-BONUS100-On.png";
import BONUS100Off from "../assets/images/elements/AiRobot/B-BONUS100-Off.png";
// Ellipses Bonus 250
import BONUS250On from "../assets/images/elements/AiRobot/B-BONUS250-On.png";
import BONUS250Off from "../assets/images/elements/AiRobot/B-BONUS250-Off.png";
// Ellipses Bonus 500
import BONUS500On from "../assets/images/elements/AiRobot/B-BONUS500-On.png";
import BONUS500Off from "../assets/images/elements/AiRobot/B-BONUS500-Off.png";
// Ellipses Bonus 750
import BONUS750On from "../assets/images/elements/AiRobot/B-BONUS750-On.png";
import BONUS750Off from "../assets/images/elements/AiRobot/B-BONUS750-Off.png";
// Ellipses Bonus 1000
import BONUS1000On from "../assets/images/elements/AiRobot/B-BONUS1000-On.png";
import BONUS1000Off from "../assets/images/elements/AiRobot/B-BONUS1000-Off.png";
// Ellipses Bonus 2500
import BONUS2500On from "../assets/images/elements/AiRobot/B-BONUS2500-On.png";
import BONUS2500Off from "../assets/images/elements/AiRobot/B-BONUS2500-Off.png";

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

// 🎵 musiques AI-ROBOT
import AiRobotMusic from "../assets/audio/GameAiRobot.mp3";
import IntroAiRobot from "../assets/audio/IntroAiRobot.mp3";
import LaunchAiRobot from "../assets/audio/LaunchIgnition.mp3";
import EndAiRobot from "../assets/audio/EndAiRobot.mp3";
import ExtraBallAiRobot from "../assets/audio/BonusExtraBallAiRobot.mp3";

export const pinballDataAiRobot: PinballConfig = {
  // ───────────────────────────────────────────────────────
  // AI ROBOT
  // x ∈ [-5, 5]   y ∈ [0, 20]   origine = bas centre
  // ───────────────────────────────────────────────────────

  key: "AiRobot",
  title: "AiRobot",
  img: AiRobotImg,
  ballImg: ball3,
  themeColor: "#FF0004",
  musicPreview: IntroAiRobot,
  musicGame: AiRobotMusic,
  musicEnd: EndAiRobot,
  launch: LaunchAiRobot,

  physics: {
    gravity: -0.004,
    bounce: 0.8,
    springMaxForce: 0.3,
    springMinForce: 0.1,
  },
  // ✅ Balle + caméra AiROBOT
  ballStartX: 4.8,
  ballStartY: 1.2,
  cameraFocusY: 0,

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
    // {
    //   id: "spring",
    //   type: "spring",
    //   x: 4.77,
    //   y: 0.43,
    //   alwaysOn: true,
    //   size: 5,
    //   imgOff: ball3,
    // },
    // ── RESSORT PNG — id obligatoire "spring" ──
    {
      id: "spring",
      type: "spring",
      x: 4.77,
      y: 0.43,
      alwaysOn: true,
      width: 0.26,
      height: 1,
      imgOff: SpringImg,
    },
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
      x: -1.3,
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
    // ── Hole Bonus (Off/On) ──
    {
      id: "hole_bonus",
      type: "circle",
      x: -3.23,
      y: 13.6,
      blink: true,
      size: 0.55,
      imgOff: HOLEBONUSOff,
      imgOn: HOLEBONUSOn,
    },

    // ── Flippers principaux bas (PNG unique, alwaysOn) ──
    {
      id: "flipper_left",
      type: "flipper",
      x: -1.35,
      y: 2.2,
      alwaysOn: true,
      // size: 2.2,
      width: 1.8, // ← largeur
      height: 0.8, // ← hauteur
      imgOff: FlipperLeftImg,
      rotation: 15, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "flipper_right",
      type: "flipper",
      x: 1.2,
      y: 2.1,
      alwaysOn: true,
      // size: 2.2,
      width: 1.7, // ← largeur
      height: 0.8, // ← hauteur
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
    // ── Ellipse Bleue (Off/On) ──
    {
      id: "ellipse_bleu_1",
      type: "circle",
      x: 3.2,
      y: 6.25,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEBLEUOff,
      imgOn: ELLIPSEBLEUOn,
    },
    {
      id: "ellipse_bleu_2",
      type: "circle",
      x: -3.4,
      y: 6.2,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEBLEUOff,
      imgOn: ELLIPSEBLEUOn,
    },
    // ── Ellipse Rouge (Off/On) ──
    {
      id: "ellipse_rouge_1",
      type: "circle",
      x: 0.13,
      y: 9.3,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEROUGEOff,
      imgOn: ELLIPSEROUGEOn,
    },
    {
      id: "ellipse_rouge_2",
      type: "circle",
      x: -0.35,
      y: 9.7,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEROUGEOff,
      imgOn: ELLIPSEROUGEOn,
    },
    {
      id: "ellipse_rouge_3",
      type: "circle",
      x: -0.75,
      y: 10.15,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEROUGEOff,
      imgOn: ELLIPSEROUGEOn,
    },
    // ── Ellipse Bumpers (Off/On) ──
    {
      id: "ellipse_Bumper_1",
      type: "circle",
      x: 2.55,
      y: 5.35,
      blink: true,
      size: 0.4,
      imgOff: EllipseBumperOff,
      imgOn: EllipseBumperOn,
    },
    {
      id: "ellipse_Bumper_2",
      type: "circle",
      x: -2.7,
      y: 5.35,
      blink: true,
      size: 0.4,
      imgOff: EllipseBumperOff,
      imgOn: EllipseBumperOn,
    },
    // ── Ellipse White (Off/On) ──
    {
      id: "ellipse_white_1",
      type: "circle",
      x: -2.83,
      y: 14.2,
      blink: true,
      size: 0.3,
      imgOff: ELLIPSEWHITEOff,
      imgOn: ELLIPSEWHITEOn,
    },
    {
      id: "ellipse_white_2",
      type: "circle",
      x: -2.7,
      y: 13.74,
      blink: true,
      size: 0.3,
      imgOff: ELLIPSEWHITEOff,
      imgOn: ELLIPSEWHITEOn,
    },
    {
      id: "ellipse_white_3",
      type: "circle",
      x: -2.55,
      y: 13.25,
      blink: true,
      size: 0.3,
      imgOff: ELLIPSEWHITEOff,
      imgOn: ELLIPSEWHITEOn,
    },
    {
      id: "ellipse_white_4",
      type: "circle",
      x: -2.45,
      y: 12.8,
      blink: true,
      size: 0.3,
      imgOff: ELLIPSEWHITEOff,
      imgOn: ELLIPSEWHITEOn,
    },
    {
      id: "ellipse_white_5",
      type: "circle",
      x: -2.58,
      y: 8,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSEWHITEOff,
      imgOn: ELLIPSEWHITEOn,
    },
    // ── Bonus Rouge (Off/On) ──
    {
      id: "bonus_rouge_bas_1",
      type: "custom",
      x: -3.05,
      y: 15.8,
      blink: true,
      // size: 0.4,
      width: 0.6, // ← largeur
      height: 0.3, // ← hauteur
      imgOff: BONUSROUGEOff,
      imgOn: BONUSROUGEOn,
      rotation: 140, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "bonus_rouge_haut_2",
      type: "custom",
      x: -2.79,
      y: 16.5,
      blink: true,
      // size: 0.4,
      width: 0.6, // ← largeur
      height: 0.3, // ← hauteur
      imgOff: BONUSROUGEOff,
      imgOn: BONUSROUGEOn,
      rotation: 140, // ← tourne de 90° dans le sens horaire
    },
    // ── Ellipses Bonus chiffres  (Off/On) ──
    {
      id: "ellipse_bonnus_50",
      type: "circle",
      x: -4,
      y: 13.15,
      blink: true,
      size: 0.4,
      imgOff: BONUS50Off,
      imgOn: BONUS50On,
    },
    {
      id: "ellipse_bonnus_100",
      type: "circle",
      x: -4.15,
      y: 13.75,
      blink: true,
      size: 0.4,
      imgOff: BONUS100Off,
      imgOn: BONUS100On,
    },
    {
      id: "ellipse_bonnus_250",
      type: "circle",
      x: -4.2,
      y: 14.5,
      blink: true,
      size: 0.4,
      imgOff: BONUS250Off,
      imgOn: BONUS250On,
    },
    {
      id: "ellipse_bonnus_500",
      type: "circle",
      x: -4.15,
      y: 15.3,
      blink: true,
      size: 0.4,
      imgOff: BONUS500Off,
      imgOn: BONUS500On,
    },
    {
      id: "ellipse_bonnus_750",
      type: "circle",
      x: -3.95,
      y: 16.05,
      blink: true,
      size: 0.4,
      imgOff: BONUS750Off,
      imgOn: BONUS750On,
    },
    {
      id: "ellipse_bonnus_1000",
      type: "circle",
      x: -3.7,
      y: 16.75,
      blink: true,
      size: 0.4,
      imgOff: BONUS1000Off,
      imgOn: BONUS1000On,
    },
    {
      id: "ellipse_bonnus_2500",
      type: "circle",
      x: -3.45,
      y: 17.25,
      blink: true,
      size: 0.4,
      imgOff: BONUS2500Off,
      imgOn: BONUS2500On,
    },
  ],

  scoring: { multiplierMax: 8 },
  fx: {
    bumper: bumperFx,
    flipper: flipperFx,
    hole: holeFx,
    fxReady: ExtraBallAiRobot,
  },
};
