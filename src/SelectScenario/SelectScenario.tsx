import React from "react";
import { Scenario } from "../scenarii/Scenario";

interface Props {
  scenario: Scenario;
  scenarii: Record<string, Scenario>;
  onChange(value: string): void;
}

export function SelectScenario({ scenario, scenarii, onChange }: Props): React.ReactElement {
  return (
    <div style={{ display: "inline-block" }}>
      <h5>Scenario</h5>
      <select onChange={event => onChange(event.target.value)}>
        <option value="UPDATE_PARENT" selected={scenario === scenarii.UPDATE_PARENT}>
          UPDATE_PARENT
        </option>
        <option value="UPDATE_CHILD" selected={scenario === scenarii.UPDATE_CHILD}>
          UPDATE_CHILD
        </option>
        <option value="ADD_NEW_CHILD" selected={scenario === scenarii.ADD_NEW_CHILD}>
          ADD_NEW_CHILD
        </option>
      </select>
    </div>
  );
}
