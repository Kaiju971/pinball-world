import { PinballConfig } from "./pinballTypes";
import MythologyImg from "../assets/images/MYTHOLOGY PINBALL.webp";
import ball2 from "../assets/images/ball2.webp";
// Ressort
import SpringImg from "../assets/images/ressor.webp";
import LaunchSpring from "../assets/audio/MythologyLaunchSpring.mp3";

import bumperFx from "../assets/audio/MythologyBumper.mp3";
import flipperFx from "../assets/audio/MythologyFlipper.mp3";
import holeFx from "../assets/audio/MythologyHole.mp3";
//  Elements MYTHOLOGY
// Lettres MYTHOLOGY
import M_On from "../assets/images/elements/Mythology/M-On.png";
import M_Off from "../assets/images/elements/Mythology/M-Off.png";
import Y_On from "../assets/images/elements/Mythology/Y-On.png";
import Y_Off from "../assets/images/elements/Mythology/Y-Off.png";
import T_On from "../assets/images/elements/Mythology/T-On.png";
import T_Off from "../assets/images/elements/Mythology/T-Off.png";
import H_On from "../assets/images/elements/Mythology/H-On.png";
import H_Off from "../assets/images/elements/Mythology/H-Off.png";
import O_On from "../assets/images/elements/Mythology/O-On.png";
import O_Off from "../assets/images/elements/Mythology/O-Off.png";
import L_On from "../assets/images/elements/Mythology/L-On.png";
import L_Off from "../assets/images/elements/Mythology/L-Off.png";
import G_On from "../assets/images/elements/Mythology/G-On.png";
import G_Off from "../assets/images/elements/Mythology/G-Off.png";
// Flèches longues rouge MYTHOLOGY
import ArrowRedLongLeftOff from "../assets/images/elements/Mythology/ArrowRedLongLeftOff.png";
import ArrowRedLongLeftOn from "../assets/images/elements/Mythology/ArrowRedLongLeftOn.png";
// Flèches petites rouge MYTHOLOGY
import ArrowRedLittleLeftOff from "../assets/images/elements/Mythology/ArrowRedLittleLeftOff.png";
import ArrowRedLittleLeftOn from "../assets/images/elements/Mythology/ArrowRedLittleLeftOn.png";
//flèches Vertes MYTHOLOGY
import ArrowGreenLeftOff from "../assets/images/elements/Mythology/ArrowGreenLeftOff.png";
import ArrowGreenLeftOn from "../assets/images/elements/Mythology/ArrowGreenLeftOn.png";
// Ellipses VERTES MYTHOLOGY
import ARESOff from "../assets/images/elements/Mythology/ECLIPSE ARES_Off.png";
import ARESOn from "../assets/images/elements/Mythology/ECLIPSE ARES_On.png";
import ARTEMISOff from "../assets/images/elements/Mythology/ECLIPSE ARTEMIS_Off.png";
import ARTEMISOn from "../assets/images/elements/Mythology/ECLIPSE ARTEMIS_On.png";
import ATHENAOff from "../assets/images/elements/Mythology/ECLIPSE ATHENA_Off.png";
import ATHENAOn from "../assets/images/elements/Mythology/ECLIPSE ATHENA_On.png";
import HEPHAISTOSOff from "../assets/images/elements/Mythology/ECLIPSE HEPHAISTOS_Off.png";
import HEPHAISTOSOn from "../assets/images/elements/Mythology/ECLIPSE HEPHAISTOS_On.png";
import PERSEPHONEOff from "../assets/images/elements/Mythology/ECLIPSE PERSEPHONE_Off.png";
import PERSEPHONEOn from "../assets/images/elements/Mythology/ECLIPSE PERSEPHONE_On.png";
// Ellipses BLEUES MYTHOLOGY
// Ellipses BLANC CHIFFRE MYTHOLOGY
import ELLIPSE1BLANCOff from "../assets/images/elements/Mythology/ECLIPSE1BLANCOff.png";
import ELLIPSE1BLANCOn from "../assets/images/elements/Mythology/ECLIPSE1BLANCOn.png";
import ELLIPSE2BLANCOff from "../assets/images/elements/Mythology/ECLIPSE2BLANCOff.png";
import ELLIPSE2BLANCOn from "../assets/images/elements/Mythology/ECLIPSE2BLANCOn.png";
import ELLIPSE3BLANCOff from "../assets/images/elements/Mythology/ECLIPSE3BLANCOff.png";
import ELLIPSE3BLANCOn from "../assets/images/elements/Mythology/ECLIPSE3BLANCOn.png";
import ELLIPSE4BLANCOff from "../assets/images/elements/Mythology/ECLIPSE4BLANCOff.png";
import ELLIPSE4BLANCOn from "../assets/images/elements/Mythology/ECLIPSE4BLANCOn.png";
import ELLIPSE5BLANCOff from "../assets/images/elements/Mythology/ECLIPSE5BLANCOff.png";
import ELLIPSE5BLANCOn from "../assets/images/elements/Mythology/ECLIPSE5BLANCOn.png";
import ELLIPSE6BLANCOff from "../assets/images/elements/Mythology/ECLIPSE6BLANCOff.png";
import ELLIPSE6BLANCOn from "../assets/images/elements/Mythology/ECLIPSE6BLANCOn.png";
// Money MYTHOLOGY
import MoneyOff from "../assets/images/elements/Mythology/Money_Off.png";
import MoneyOn from "../assets/images/elements/Mythology/Money_On.png";

// Rails MYTHOLOGY
import RailsLeft from "../assets/images/elements/Mythology/RailLeft.png";
import RailsRight from "../assets/images/elements/Mythology/RailRight.png";

// Flash MYTHOLOGY
import FlashOff from "../assets/images/elements/Mythology/FlashOff.png";
import FlashOn from "../assets/images/elements/Mythology/FlashOn.png";

// Multiplicateurs
import X2mythOn from "../assets/images/elements/Mythology/X2_On.png";
import X2MythOff from "../assets/images/elements/Mythology/X2_Off.png";
import X3mythOn from "../assets/images/elements/Mythology/X3_On.png";
import X3MythOff from "../assets/images/elements/Mythology/X3_Off.png";
import X4mythOn from "../assets/images/elements/Mythology/X4_On.png";
import X4MythOff from "../assets/images/elements/Mythology/X4_Off.png";
import X6mythOn from "../assets/images/elements/Mythology/X6_On.png";
import X6MythOff from "../assets/images/elements/Mythology/X6_Off.png";
import X8mythOn from "../assets/images/elements/Mythology/X8_On.png";
import X8MythOff from "../assets/images/elements/Mythology/X8_Off.png";
import X10mythOn from "../assets/images/elements/Mythology/X10_On.png";
import X10MythOff from "../assets/images/elements/Mythology/X10_Off.png";
//MYTHOLOGY
import HYPPOOff from "../assets/images/elements/Mythology/Hyppocampe_Off.png";
import HYPPOOn from "../assets/images/elements/Mythology/Hyppocampe_On.png";

// 🎵 musiques MYTHOLOGY
import MythologyMusic from "../assets/audio/RiseOfTheHero.mp3";
import IntroMythology from "../assets/audio/IntroMytho.mp3";
import LaunchMythology from "../assets/audio/LaunchMytho.mp3";
import EndMythology from "../assets/audio/EndMytho.mp3";
import ExtraBallMythology from "../assets/audio/BonusExtraBallMytho.mp3";

export const pinballDataMythology: PinballConfig = {
  // ───────────────────────────────────────────────────────
  // MYTHOLOGY
  // x ∈ [-5, 5]   y ∈ [0, 20]   origine = bas centre
  // ───────────────────────────────────────────────────────

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
  // ✅ Balle + caméra GoldWheel
  ballStartX: 4.7,
  ballStartY: 1.55,
  cameraFocusY: 0.3,
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
      x: 4.7,
      y: 0.6,
      alwaysOn: true,
      width: 0.35,
      height: 0.85,
      imgOff: SpringImg,
    },
    {
      id: "mythology_m",
      type: "letter",
      x: -2.5,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: M_Off,
      imgOn: M_On,
    },
    {
      id: "mythology_y1",
      type: "letter",
      value: "Y",
      x: -1.9,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: Y_Off,
      imgOn: Y_On,
    },
    {
      id: "mythology_t",
      type: "letter",
      value: "T",
      x: -1.4,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: T_Off,
      imgOn: T_On,
    },
    {
      id: "mythology_h",
      type: "letter",
      value: "H",
      x: -0.85,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: H_Off,
      imgOn: H_On,
    },
    {
      id: "mythology_o1",
      type: "letter",
      value: "O",
      x: -0.26,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: O_Off,
      imgOn: O_On,
    },
    {
      id: "mythology_l",
      type: "letter",
      value: "L",
      x: 0.26,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: L_Off,
      imgOn: L_On,
    },
    {
      id: "mythology_o2",
      type: "letter",
      value: "O",
      x: 0.82,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: O_Off,
      imgOn: O_On,
    },
    {
      id: "mythology_g",
      type: "letter",
      value: "G",
      x: 1.45,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: G_Off,
      imgOn: G_On,
    },
    {
      id: "mythology_y2",
      type: "letter",
      value: "Y",
      x: 1.94,
      y: 4.8,
      group: "MYTHOLOGY",
      blink: true,
      // size: 1,
      width: 0.7, // ← largeur
      height: 1, // ← hauteur
      imgOff: Y_Off,
      imgOn: Y_On,
    },
    {
      id: "flash_1",
      type: "custom",
      x: 4.17,
      y: 13.6,
      blink: true,
      // size: 0.6,
      width: 0.5, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: FlashOff,
      imgOn: FlashOn,
    },
    {
      id: "flash_2",
      type: "custom",
      x: 4.17,
      y: 12.7,
      blink: true,
      // size: 0.6,
      width: 0.5, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: FlashOff,
      imgOn: FlashOn,
    },
    {
      id: "flash_3",
      type: "custom",
      x: 4.17,
      y: 11.9,
      blink: true,
      // size: 0.6,
      width: 0.5, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: FlashOff,
      imgOn: FlashOn,
    },
    {
      id: "arrow_Green_1",
      type: "arrow",
      x: -1.93,
      y: 10.75,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: ArrowGreenLeftOff,
      imgOn: ArrowGreenLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Green_2",
      type: "arrow",
      x: -1.76,
      y: 9.8,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: ArrowGreenLeftOff,
      imgOn: ArrowGreenLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Green_3",
      type: "arrow",
      x: -1.56,
      y: 8.8,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.9, // ← hauteur
      imgOff: ArrowGreenLeftOff,
      imgOn: ArrowGreenLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_1",
      type: "arrow",
      x: -4.35,
      y: 11.6,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.8, // ← hauteur
      imgOff: ArrowRedLongLeftOff,
      imgOn: ArrowRedLongLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_2",
      type: "arrow",
      x: -4.2,
      y: 10.6,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.8, // ← hauteur
      imgOff: ArrowRedLongLeftOff,
      imgOn: ArrowRedLongLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_3",
      type: "arrow",
      x: -4,
      y: 9.7,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.8, // ← hauteur
      imgOff: ArrowRedLongLeftOff,
      imgOn: ArrowRedLongLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_Little_1",
      type: "arrow",
      x: -3.45,
      y: 8.15,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.5, // ← hauteur
      imgOff: ArrowRedLittleLeftOff,
      imgOn: ArrowRedLittleLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_Little_2",
      type: "arrow",
      x: -3.33,
      y: 7.65,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.5, // ← hauteur
      imgOff: ArrowRedLittleLeftOff,
      imgOn: ArrowRedLittleLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "arrow_Red_Little_3",
      type: "arrow",
      x: -3.17,
      y: 7.16,
      blink: true,
      // size: 0.6,
      width: 0.3, // ← largeur
      height: 0.5, // ← hauteur
      imgOff: ArrowRedLittleLeftOff,
      imgOn: ArrowRedLittleLeftOn,
      rotation: 0, // ← tourne de 90° dans le sens horaire
    },
    {
      id: "hyppo_1",
      type: "circle",
      x: 2.85,
      y: 18.35,
      size: 0.5,
      imgOff: HYPPOOff,
      imgOn: HYPPOOn,
    },
    {
      id: "hyppo_2",
      type: "circle",
      x: 3.5,
      y: 18.7,
      group: "hyppocampe",
      blink: true,
      size: 0.5,
      imgOff: HYPPOOff,
      imgOn: HYPPOOn,
    },
    {
      id: "hyppo_3",
      type: "circle",
      x: 4.2,
      y: 19.15,
      group: "hyppocampe",
      blink: true,
      size: 0.5,
      imgOff: HYPPOOff,
      imgOn: HYPPOOn,
    },
    // ── Multiplicateurs haut (PNG unique) ──
    {
      id: "mult_x2",
      type: "custom",
      x: -3.75,
      y: 3.95,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X2MythOff,
      imgOn: X2mythOn,
    },
    {
      id: "mult_x3",
      type: "custom",
      x: -3.3,
      y: 3.6,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X3MythOff,
      imgOn: X3mythOn,
    },
    {
      id: "mult_x4",
      type: "custom",
      x: -2.8,
      y: 3.3,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X4MythOff,
      imgOn: X4mythOn,
    },
    {
      id: "mult_x6",
      type: "custom",
      x: 2.45,
      y: 3.35,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X6MythOff,
      imgOn: X6mythOn,
    },
    {
      id: "mult_x8",
      type: "custom",
      x: 2.9,
      y: 3.67,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X8MythOff,
      imgOn: X8mythOn,
    },
    {
      id: "mult_x10",
      type: "custom",
      x: 3.3,
      y: 4,
      group: "MULT",
      blink: true,
      size: 0.5,
      imgOff: X10MythOff,
      imgOn: X10mythOn,
    },
    // ── Ellipse Blanc à chiffre (Off/On) ──
    {
      id: "ellipse_blanc_1_Left",
      type: "circle",
      x: -0.9,
      y: 9.45,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE1BLANCOff,
      imgOn: ELLIPSE1BLANCOn,
    },
    {
      id: "ellipse_blanc_1_Right",
      type: "circle",
      x: 3.2,
      y: 8.15,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE1BLANCOff,
      imgOn: ELLIPSE1BLANCOn,
    },
    {
      id: "ellipse_blanc_2_Left",
      type: "circle",
      x: -0.9,
      y: 8.8,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE2BLANCOff,
      imgOn: ELLIPSE2BLANCOn,
    },
    {
      id: "ellipse_blanc_2_Right",
      type: "circle",
      x: 3,
      y: 7.5,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE2BLANCOff,
      imgOn: ELLIPSE2BLANCOn,
    },
    {
      id: "ellipse_blanc_3_Left",
      type: "circle",
      x: -0.85,
      y: 8.2,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE3BLANCOff,
      imgOn: ELLIPSE3BLANCOn,
    },
    {
      id: "ellipse_blanc_3_Right",
      type: "circle",
      x: 2.85,
      y: 6.9,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE3BLANCOff,
      imgOn: ELLIPSE3BLANCOn,
    },
    {
      id: "ellipse_blanc_4_Left",
      type: "circle",
      x: -0.8,
      y: 7.53,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE4BLANCOff,
      imgOn: ELLIPSE4BLANCOn,
    },
    {
      id: "ellipse_blanc_4_Right",
      type: "circle",
      x: 2.73,
      y: 6.23,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE4BLANCOff,
      imgOn: ELLIPSE4BLANCOn,
    },
    {
      id: "ellipse_blanc_5_Left",
      type: "circle",
      x: -0.77,
      y: 6.9,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE5BLANCOff,
      imgOn: ELLIPSE5BLANCOn,
    },
    {
      id: "ellipse_blanc_5_Right",
      type: "circle",
      x: 2.6,
      y: 5.6,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE5BLANCOff,
      imgOn: ELLIPSE5BLANCOn,
    },
    {
      id: "ellipse_blanc_6_Left",
      type: "circle",
      x: -0.75,
      y: 6.25,
      blink: true,
      size: 0.45,
      imgOff: ELLIPSE6BLANCOff,
      imgOn: ELLIPSE6BLANCOn,
    },
    {
      id: "ellipse_blanc_6_Right",
      type: "circle",
      x: 2.43,
      y: 4.95,
      blink: true,
      size: 0.4,
      imgOff: ELLIPSE6BLANCOff,
      imgOn: ELLIPSE6BLANCOn,
    },
    // ── Ellipse Vertes (Off/On) ──
    {
      id: "ellipse_verte_1",
      type: "circle",
      x: 1.1,
      y: 11,
      blink: true,
      size: 0.6,
      imgOff: ATHENAOff,
      imgOn: ATHENAOn,
    },
    {
      id: "ellipse_verte_2",
      type: "circle",
      x: 1.05,
      y: 10.2,
      blink: true,
      size: 0.6,
      imgOff: ARTEMISOff,
      imgOn: ARTEMISOn,
    },
    {
      id: "ellipse_verte_3",
      type: "circle",
      x: 1,
      y: 9.4,
      blink: true,
      size: 0.6,
      imgOff: ARESOff,
      imgOn: ARESOn,
    },
    {
      id: "ellipse_verte_4",
      type: "circle",
      x: 0.96,
      y: 8.5,
      blink: true,
      size: 0.6,
      imgOff: HEPHAISTOSOff,
      imgOn: HEPHAISTOSOn,
    },
    {
      id: "ellipse_verte_5",
      type: "circle",
      x: 0.9,
      y: 7.7,
      blink: true,
      size: 0.6,
      imgOff: PERSEPHONEOff,
      imgOn: PERSEPHONEOn,
    },
    // ── Ellipse Blanc à chiffre (Off/On) ──
    {
      id: "money1",
      type: "circle",
      x: -4,
      y: 8.5,
      blink: true,
      size: 0.3,
      imgOff: MoneyOff,
      imgOn: MoneyOn,
    },
    {
      id: "money2",
      type: "circle",
      x: -4.05,
      y: 7.95,
      blink: true,
      size: 0.3,
      imgOff: MoneyOff,
      imgOn: MoneyOn,
    },
    {
      id: "money3",
      type: "circle",
      x: -4.1,
      y: 7.4,
      blink: true,
      size: 0.3,
      imgOff: MoneyOff,
      imgOn: MoneyOn,
    },
    {
      id: "railsLeft",
      type: "spring",
      x: -1.66,
      y: 11.8,
      alwaysOn: true,
      // size: 7,
      width: 6.6,
      height: 12.8,
      imgOff: RailsLeft,
    },
    {
      id: "railsRight",
      type: "spring",
      x: 3.5,
      y: 9,
      alwaysOn: true,
      // size: 7,
      width: 3.05,
      height: 8.4,
      imgOff: RailsRight,
    },
  ],
  scoring: { multiplierMax: 10 },
  fx: {
    launch: LaunchSpring,
    bumper: bumperFx,
    flipper: flipperFx,
    hole: holeFx,
    fxReady: ExtraBallMythology,
  },
};
