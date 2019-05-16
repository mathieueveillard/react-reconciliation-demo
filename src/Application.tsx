import React, { useState } from "react";
import { scenarii } from "./scenarii";
import { Parent as StatelessParent } from "./stateless/Parent";
import { Parent as PureParent } from "./pure/Parent";
import { Parent as StatefullParent } from "./statefull/Parent";
import { DisplayProps } from "./DisplayProps";
import { DisplayPropsDiff } from "./DisplayPropsDiff";
import { SelectScenario } from "./SelectScenario";
import { SelectComponentType } from "./SelectComponentType";
import "./Application.scss";

export enum ComponentType {
  STATELESS = "STATELESS",
  PURE = "PURE",
  STATEFULL = "STATEFULL"
}

export function Application(): React.ReactElement {
  const [componentType, setComponentType] = useState(ComponentType.STATELESS);
  const [scenario, setScenario] = useState(scenarii.UPDATE_PARENT);
  const [props, setProps] = useState(scenario.actualProps);
  const [forceRerender, reset] = useState(0);
  return (
    <div>
      <div className="action">
        <SelectComponentType
          componentType={componentType}
          onChange={(value: ComponentType) => {
            setComponentType(value);
            setProps(scenario.actualProps);
          }}
        />
        <SelectScenario
          scenario={scenario}
          scenarii={scenarii}
          onChange={(value: string) => {
            setScenario(scenarii[value]);
            setProps(scenario.actualProps);
          }}
        />
        <div>
          <button
            className="mdl-button mdl-js-button mdl-button--raised"
            onClick={() => {
              reset(1 - forceRerender);
              setProps(scenario.actualProps);
            }}
          >
            Reset
          </button>{" "}
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
            onClick={() => setProps(scenario.newProps)}
          >
            Apply new props
          </button>
        </div>
      </div>
      {forceRerender === 0 && (
        <div>
          {componentType === ComponentType.STATELESS && (
            <StatelessParent value={props.value} children={props.children} />
          )}
          {componentType === ComponentType.PURE && <PureParent value={props.value} children={props.children} />}
          {componentType === ComponentType.STATEFULL && (
            <StatefullParent value={props.value} children={props.children} />
          )}
        </div>
      )}
      {forceRerender === 1 && (
        <div>
          {componentType === ComponentType.STATELESS && (
            <StatelessParent value={props.value} children={props.children} />
          )}
          {componentType === ComponentType.PURE && <PureParent value={props.value} children={props.children} />}
          {componentType === ComponentType.STATEFULL && (
            <StatefullParent value={props.value} children={props.children} />
          )}
        </div>
      )}
      <div className="props-container">
        <DisplayProps title="Actual props" props={scenario.actualProps} />
        <DisplayProps title="New props" props={scenario.newProps} />
        <DisplayPropsDiff actualProps={scenario.actualProps} newProps={scenario.newProps} />
      </div>
    </div>
  );
}
