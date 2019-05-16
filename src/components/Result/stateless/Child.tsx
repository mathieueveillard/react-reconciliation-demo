import React from "react";
import { Value } from "../Value";
import { ChildProps } from "../../../interfaces/ChildProps";
import "./Child.scss";

export const Child: React.StatelessComponent<ChildProps> = ({
  value
}: ChildProps) => {
  return (
    <div className="child">
      <Value value={value} />
    </div>
  );
};
