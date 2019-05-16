import React from "react";
import { Parent as StatelessParent } from "./stateless/Parent";
import { Parent as PureParent } from "./pure/Parent";
import { Parent as StatefullParent } from "./statefull/Parent";
import { ComponentType } from "../../interfaces/ComponentType";
import { ParentProps } from "../../interfaces/ParentProps";
import "./Result.scss";

interface Props {
  componentType: ComponentType;
  propsToApply: ParentProps;
}

export const Result: React.StatelessComponent<Props> = ({
  componentType,
  propsToApply: { value, children }
}: Props) => {
  return (
    <div>
      {componentType === ComponentType.STATELESS && (
        <StatelessParent value={value} children={children} />
      )}
      {componentType === ComponentType.PURE && (
        <PureParent value={value} children={children} />
      )}
      {componentType === ComponentType.STATEFULL && (
        <StatefullParent value={value} children={children} />
      )}
    </div>
  );
};
