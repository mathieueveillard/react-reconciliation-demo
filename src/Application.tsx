import React, { useState } from "react";
import { scenarii } from "./scenarii";
import { Parent as StatelessParent } from "./components/Result/stateless/Parent";
import { Parent as PureParent } from "./components/Result/pure/Parent";
import { Parent as StatefullParent } from "./components/Result/statefull/Parent";
import { DisplayProps } from "./components/DisplayProps";
import { DisplayPropsDiff } from "./components/DisplayPropsDiff";
import { SelectScenario } from "./components/SelectScenario";
import { SelectComponentType } from "./components/SelectComponentType";
import { ComponentType } from "./interfaces/ComponentType";
import "./Application.scss";
import { Result } from "./components/Result";
import { Actions } from "./components/Actions";

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
        <Actions
          onReset={() => {
            reset(1 - forceRerender);
            setProps(scenario.actualProps);
          }}
          onApplyNewProps={() => setProps(scenario.newProps)}
        />
      </div>
      {forceRerender === 0 && (
        <Result componentType={componentType} propsToApply={props} />
      )}
      {forceRerender === 1 && (
        <Result componentType={componentType} propsToApply={props} />
      )}
      <div className="props-container">
        <DisplayProps title="Actual props" props={scenario.actualProps} />
        <DisplayProps title="New props" props={scenario.newProps} />
        <DisplayPropsDiff
          actualProps={scenario.actualProps}
          newProps={scenario.newProps}
        />
      </div>
    </div>
  );
}
