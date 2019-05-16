import React from "react";
import { getTimeStamp } from "../util";
import { Value } from "../Value";
import { ChildProps } from "../ChildProps";
import "./Child.scss";

export class Child extends React.Component<ChildProps, {}, undefined> {
  constructor(props: ChildProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: ChildProps): boolean {
    return nextProps.value !== this.props.value;
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
