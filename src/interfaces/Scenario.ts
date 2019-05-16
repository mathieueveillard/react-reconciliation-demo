import { ParentProps } from "./ParentProps";

export interface Scenario {
  name: string;
  actualProps: ParentProps;
  newProps: ParentProps;
}
