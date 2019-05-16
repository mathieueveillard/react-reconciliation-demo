import React from "react";
import { getTimeStamp } from "../util";
import { Value } from "../Value";
import { ChildProps } from "../ChildProps";
import "./Child.scss";

export class Child extends React.PureComponent<ChildProps, {}, undefined> {
  constructor(props: ChildProps) {
    super(props);
  }

  render() {
    return (
      <div className="child">
        <Value value={this.props.value} />
        <div>{getTimeStamp()}</div>
      </div>
    );
  }
}
