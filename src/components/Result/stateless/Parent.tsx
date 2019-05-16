import React from "react";
import { Child } from "./Child";
import { Value } from "../Value";
import { ParentProps } from "../../../interfaces/ParentProps";
import "./Parent.scss";

export const Parent: React.StatelessComponent<ParentProps> = ({
  value,
  children
}: ParentProps) => {
  return (
    <div className="parent-container">
      <div className="who-am-i">Parent</div>
      <div className="own-value">
        <Value value={value} />
      </div>
      {children.map(({ id, value }) => (
        <Child key={id} value={value} />
      ))}
    </div>
  );
};
