import { Scenario } from "../interfaces/Scenario";
import { ParentProps } from "../interfaces/ParentProps";

const firstChild = {
  id: "bb2c10b5-6c08-4d91-b85c-d182e1f235a2",
  value: 0
};

const secondChild = {
  id: "7e23749d-20d5-49cf-87fd-b80d7898eff9",
  value: 0
};

const actualProps: ParentProps = {
  value: 0,
  children: [firstChild, secondChild]
};

const newProps: ParentProps = {
  ...actualProps,
  children: [{ ...firstChild, value: 1000 }, secondChild]
};

export const UPDATE_CHILD: Scenario = {
  actualProps,
  newProps
};
