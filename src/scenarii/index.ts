import { Scenario } from "../interfaces/Scenario";
import { ADD_NEW_CHILD } from "./ADD_NEW_CHILD";
import { UPDATE_CHILD } from "./UPDATE_CHILD";
import { UPDATE_PARENT } from "./UPDATE_PARENT";

export const scenarii: Record<string, Scenario> = {
  ADD_NEW_CHILD,
  UPDATE_CHILD,
  UPDATE_PARENT
};
