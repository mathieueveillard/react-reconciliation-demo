import React from "react";
import { Scenario } from "../../interfaces/Scenario";
import { scenarii } from "../../scenarii";
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
        {Object.keys(scenarii).map((key: string) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
