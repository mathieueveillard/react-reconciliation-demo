import React from "react";
import { Value } from "../Value";
import { ChildProps } from "../../../interfaces/ChildProps";
import "./Child.scss";

export class Child extends React.PureComponent<ChildProps, {}, undefined> {
  constructor(props: ChildProps) {
    super(props);
  }

  render() {
    return (
      <div className="child-container">
        <div className="who-am-i">Child</div>
        <Value value={this.props.value} />
      </div>
    );
  }
}
