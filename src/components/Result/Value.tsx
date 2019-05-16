import React from "react";
import { getTimeStamp } from "../../util/time";
import "./Value.scss";

interface Props {
  value: number;
}

export function Value({ value }: Props): React.ReactElement {
  return (
    <div className="value-container">
      <div className="value">{value}</div>
      <div className="timestamp">{getTimeStamp()}</div>
    </div>
  );
}
