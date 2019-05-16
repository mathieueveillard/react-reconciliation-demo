import React from "react";
import { Child } from "./Child";
import { Value } from "../Value";
import { ParentProps } from "../../../interfaces/ParentProps";
import "./Parent.scss";

export class Parent extends React.PureComponent<ParentProps, {}, undefined> {
  constructor(props: ParentProps) {
    super(props);
  }

  render() {
    return (
      <div className="parent-container">
        <div className="own-value">
          <Value value={this.props.value} />
        </div>
        {this.props.children.map(({ id, value }) => (
          <Child key={id} value={value} />
        ))}
      </div>
    );
  }
}
