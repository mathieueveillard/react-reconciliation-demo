import React from "react";
import { ComponentType } from "../../interfaces/ComponentType";

interface Props {
  componentType: ComponentType;
  onChange(value: string): void;
}

export const SelectComponentType: React.StatelessComponent<Props> = ({
  componentType,
  onChange
}: Props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h5>Component type</h5>
      <select onChange={event => onChange(event.target.value)}>
        <option
          value={ComponentType.STATELESS}
          selected={componentType === ComponentType.STATELESS}
        >
          {ComponentType.STATELESS}
        </option>
        <option
          value={ComponentType.PURE}
          selected={componentType === ComponentType.PURE}
        >
          {ComponentType.PURE}
        </option>
        <option
          value={ComponentType.STATEFULL}
          selected={componentType === ComponentType.STATEFULL}
        >
          {ComponentType.STATEFULL}
        </option>
      </select>
    </div>
  );
};
