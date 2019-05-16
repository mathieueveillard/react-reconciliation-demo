import React from "react";
import { Child } from "./Child";
import { Value } from "../Value";
import { ParentProps } from "../../../interfaces/ParentProps";
import "./Parent.scss";

export function Parent({ value, children }: ParentProps): React.ReactElement {
  return (
    <div className="parent-container">
      <div className="own-value">
        <Value value={value} />
      </div>
      {children.map(({ id, value }) => (
        <Child key={id} value={value} />
      ))}
    </div>
  );
}
