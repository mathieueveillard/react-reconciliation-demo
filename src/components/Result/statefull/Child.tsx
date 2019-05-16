import React from "react";
import { Value } from "../Value";
import { ChildProps } from "../../../interfaces/ChildProps";
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
      </div>
    );
  }
}
