import React from "react";
import { getTimeStamp } from "../../util/time";
import "./Value.scss";

interface Props {
  value: number;
}

export const Value: React.StatelessComponent<Props> = ({ value }: Props) => {
  return (
    <div className="value-container">
      <div className="value">{value}</div>
      <div className="timestamp">{getTimeStamp()}</div>
    </div>
  );
};
