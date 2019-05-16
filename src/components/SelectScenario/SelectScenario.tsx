import React from "react";
import { Scenario } from "../../interfaces/Scenario";
import "./SelectScenario.scss";

interface Props {
  scenario: Scenario;
  onChange(value: string): void;
}

export const SelectScenario: React.StatelessComponent<Props> = ({
  scenario,
  onChange
}: Props) => {
  return (
    <div className="select-scenario-container">
      <h5>Scenario</h5>
      <select
        value={scenario.name}
        onChange={event => onChange(event.target.value)}
      >
        <option value="UPDATE_PARENT">UPDATE_PARENT</option>
        <option value="UPDATE_CHILD">UPDATE_CHILD</option>
        <option value="ADD_NEW_CHILD">ADD_NEW_CHILD</option>
      </select>
    </div>
  );
};
