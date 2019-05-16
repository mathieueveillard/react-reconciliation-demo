import React, { useState } from "react";
import { scenarii } from "./scenarii";
import { DisplayProps } from "./components/DisplayProps";
import { DisplayPropsDiff } from "./components/DisplayPropsDiff";
import { SelectScenario } from "./components/SelectScenario";
import { SelectComponentType } from "./components/SelectComponentType";
import { ComponentType } from "./interfaces/ComponentType";
import { Result } from "./components/Result";
import { Actions } from "./components/Actions";
import "./Application.scss";

export function Application(): React.ReactElement {
  const [componentType, setComponentType] = useState(ComponentType.STATELESS);
  const [scenario, setScenario] = useState(scenarii.UPDATE_PARENT);
  const [props, setProps] = useState(scenario.actualProps);
  const [forceRerender, reset] = useState(0);
  return (
    <div className="container">
      <div className="scenario-selection">
        <SelectScenario
          scenario={scenario}
          onChange={(value: string) => {
            setScenario(scenarii[value]);
            setProps(scenario.actualProps);
          }}
        />
      </div>
      <div className="component-type-selection">
        <SelectComponentType
          componentType={componentType}
          onChange={(value: ComponentType) => {
            setComponentType(value);
            setProps(scenario.actualProps);
          }}
        />
      </div>
      <div className="actions">
        <Actions
          onReset={() => {
            reset(1 - forceRerender);
            setProps(scenario.actualProps);
          }}
          onApplyNewProps={() => setProps(scenario.newProps)}
        />
      </div>
      <div className="actual-props">
        <DisplayProps title="Actual props" props={scenario.actualProps} />
      </div>
      <div className="new-props">
        <DisplayProps title="New props" props={scenario.newProps} />
      </div>
      <div className="props-diff">
        <DisplayPropsDiff
          actualProps={scenario.actualProps}
          newProps={scenario.newProps}
        />
      </div>
      <div className="result">
        {forceRerender === 0 && (
          <Result componentType={componentType} propsToApply={props} />
        )}
        {forceRerender === 1 && (
          <Result componentType={componentType} propsToApply={props} />
        )}
      </div>
    </div>
  );
}
