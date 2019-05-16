import React from "react";
import { Value } from "../Value";
import { ChildProps } from "../../../interfaces/ChildProps";
import "./Child.scss";

export const Child: React.StatelessComponent<ChildProps> = ({
  value
}: ChildProps) => {
  return (
    <div className="child-container">
      <div className="who-am-i">Child</div>
      <Value value={value} />
    </div>
  );
};
