import React from "react";
import { ComponentType } from "../Application";

interface Props {
  componentType: ComponentType;
  onChange(value: string): void;
}

export function SelectComponentType({ componentType, onChange }: Props): React.ReactElement {
  return (
    <div style={{ display: "inline-block" }}>
      <h5>Component type</h5>
      <select onChange={event => onChange(event.target.value)}>
        <option value={ComponentType.STATELESS} selected={componentType === ComponentType.STATELESS}>
          {ComponentType.STATELESS}
        </option>
        <option value={ComponentType.PURE} selected={componentType === ComponentType.PURE}>
          {ComponentType.PURE}
        </option>
        <option value={ComponentType.STATEFULL} selected={componentType === ComponentType.STATEFULL}>
          {ComponentType.STATEFULL}
        </option>
      </select>
    </div>
  );
}
