import React from "react";
import { ComponentType } from "../../interfaces/ComponentType";
import "./SelectComponentType.scss";

interface Props {
  componentType: ComponentType;
  onChange(value: string): void;
}

export const SelectComponentType: React.StatelessComponent<Props> = ({
  componentType,
  onChange
}: Props) => {
  return (
    <div className="select-component-type-container">
      <h5>Component type</h5>
      <select
        value={componentType}
        onChange={event => onChange(event.target.value)}
      >
        <option value={ComponentType.STATELESS}>
          {ComponentType.STATELESS}
        </option>
        <option value={ComponentType.PURE}>{ComponentType.PURE}</option>
        <option value={ComponentType.STATEFULL}>
          {ComponentType.STATEFULL}
        </option>
      </select>
    </div>
  );
};
