import { ParentProps } from "../ParentProps";
import { Scenario } from "./Scenario";

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

const otherChild = {
  id: "dbc97c6a-4154-4b78-bdf1-033b1917415a",
  value: 0
};

const newProps: ParentProps = {
  ...actualProps,
  children: [...actualProps.children, otherChild]
};

export const ADD_NEW_CHILD: Scenario = {
  actualProps,
  newProps
};
