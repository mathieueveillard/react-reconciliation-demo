import React from "react";
import { Child } from "./Child";
import { Value } from "../../../Value";
import { getTimeStamp } from "../../../util/time";
import { ParentProps } from "../../../interfaces/ParentProps";
import "./Parent.scss";

export class Parent extends React.Component<ParentProps, {}, undefined> {
  constructor(props: ParentProps) {
    super(props);
  }

  render() {
    return (
      <div className="parent">
        <Value value={this.props.value} />
        <div>{getTimeStamp()}</div>
        <div className="children">
          {this.props.children.map(({ id, value }) => (
            <Child key={id} value={value} />
          ))}
        </div>
      </div>
    );
  }
}
