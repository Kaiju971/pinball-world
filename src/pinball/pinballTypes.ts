export type PinballKey = "AiRobot" | "Entity" | "GoldWheel" | "Mythology";

export interface LaneConfig {
  exitY: number; // Y où la balle quitte le lane et entre dans la table
  entryVelX: number; // vitesse X à l'entrée (négatif = courbe vers la gauche)
  entryVelY?: number; // ajustement vitesse Y à l'entrée (optionnel)
}

export interface TableBounds {
  left: number; // mur gauche
  right: number; // mur droit (table principale, hors lane)
  top: number; // plafond
}

export interface FlipperPhysics {
  halfLen: number; // demi-longueur du flipper
  thickness: number; // épaisseur de la zone de contact
  kickVY: number; // force vers le haut (tir actif)
  kickVX: number; // composante horizontale
  passiveBounce: number; // rebond passif
}

export interface Collider {
  type: "bumper" | "hole";
  x: number;
  y: number;
  radius: number;
  force?: number;
  score: number;
}

export type LightElementType =
  | "letter"
  | "arrow"
  | "circle"
  | "custom"
  | "bumper"
  | "flipper"
  | "hole"
  | "spring";

export interface LightElement {
  id: string;

  type: LightElementType;

  value?: string;

  x: number;
  y: number;

  blink?: boolean;
  alwaysOn?: boolean;

  group?: string;

  score?: number;

  color?: string;

  borderColor?: string;

  width?: number;
  height?: number;
  size?: number;

  imgOff?: string;
  imgOn?: string;

  rotation?: number;
}

export interface PhysicsConfig {
  gravity: number;
  bounce: number;
  springMaxForce?: number; // ✅ force max du ressort (défaut 0.30)
  springMinForce?: number; // ✅ force min du ressort (défaut 0.10)
}

export interface PinballConfig {
  key: PinballKey;

  title: string;

  img: string;

  ballImg: string;

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

  ballStartX: number;

  ballStartY: number;

  cameraFocusY: number;

  fx?: {
    launch?: string;
    bumper?: string;
    flipper?: string;
    hole?: string;
    fxReady?: string;
  };
  lane: LaneConfig;
  bounds: TableBounds;
  flipperPhysics: FlipperPhysics;
}
