import React from "react";
import "./Value.scss";

interface Props {
  value: number;
}

export function Value({ value }: Props): React.ReactElement {
  return <div className="value">{value}</div>;
}
