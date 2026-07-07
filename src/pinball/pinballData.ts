import { pinballDataAiRobot } from "./pinballDataAiRobot";
import { pinballDataEntity } from "./pinballDataEntity";
import { pinballDataGoldWheel } from "./pinballDataGoldWheel";
import { pinballDataMythology } from "./pinballDataMythology";
import { PinballConfig, PinballKey } from "./pinballTypes";

export const pinballData: Record<PinballKey, PinballConfig> = {
  AiRobot: pinballDataAiRobot,

  Entity: pinballDataEntity,

  GoldWheel: pinballDataGoldWheel,

  Mythology: pinballDataMythology,
};

export type {
  Collider,
  PinballConfig,
  LightElement,
  PinballKey,
  FlipperPhysics,
  TableBounds,
  LaneConfig,
  PhysicsConfig,
} from "./pinballTypes";
