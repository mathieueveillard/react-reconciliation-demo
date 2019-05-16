import React from "react";
import { getTimeStamp } from "../../../util/time";
import { Value } from "../../../Value";
import { ChildProps } from "../../../interfaces/ChildProps";
import "./Child.scss";

export function Child({ value }: ChildProps): React.ReactElement {
  return (
    <div className="child">
      <Value value={value} />
      <div>{getTimeStamp()}</div>
    </div>
  );
}
