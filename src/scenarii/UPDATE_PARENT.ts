import { Scenario } from "../interfaces/Scenario";
import { ParentProps } from "../interfaces/ParentProps";

const actualProps: ParentProps = {
  value: 0,
  children: [
    {
      id: "bb2c10b5-6c08-4d91-b85c-d182e1f235a2",
      value: 0
    },
    {
      id: "7e23749d-20d5-49cf-87fd-b80d7898eff9",
      value: 0
    }
  ]
};

const newProps: ParentProps = {
  ...actualProps,
  value: 1000
};

export const UPDATE_PARENT: Scenario = {
  name: "UPDATE_PARENT",
  actualProps,
  newProps
};
