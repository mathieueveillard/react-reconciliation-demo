import React from "react";
import { Child } from "./Child";
import { Value } from "../Value";
import { getTimeStamp } from "../util";
import { ParentProps } from "../ParentProps";
import "./Parent.scss";

export function Parent({ value, children }: ParentProps): React.ReactElement {
  return (
    <div className="parent">
      <Value value={value} />
      <div>{getTimeStamp()}</div>
      <div className="children">
        {children.map(({ id, value }) => (
          <Child key={id} value={value} />
        ))}
      </div>
    </div>
  );
}
