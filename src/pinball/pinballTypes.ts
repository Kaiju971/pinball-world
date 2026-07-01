export type PinballKey = "AiRobot" | "Entity" | "GoldWheel" | "Mythology";

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
}
