import React from "react";
import { ParentProps } from "../../interfaces/ParentProps";
import "./DisplayPropsDiff.scss";

interface Props {
  actualProps: ParentProps;
  newProps: ParentProps;
}

export const DisplayPropsDiff: React.StatelessComponent<Props> = ({
  actualProps,
  newProps
}: Props) => {
  const isTrue = <span className="true">true</span>;
  const isFalse = <span className="false">false</span>;
  return (
    <div className="display-props-diff-container">
      <div>
        <h5>Diff</h5>
      </div>
      <div className="code">
        <pre>
          actualProps === newProps :{" "}
          {actualProps === newProps ? isTrue : isFalse}
        </pre>
        <pre>
          actualProps.value === newProps.value :{" "}
          {actualProps.value === newProps.value ? isTrue : isFalse}
        </pre>
        <pre>
          actualProps.children === newProps.children :{" "}
          {actualProps.children === newProps.children ? isTrue : isFalse}
        </pre>
        {actualProps.children !== newProps.children && (
          <div>
            <pre>
              actualProps.children[0] === newProps.children[0] :{" "}
              {actualProps.children[0] === newProps.children[0]
                ? isTrue
                : isFalse}
            </pre>
            <pre>
              actualProps.children[1] === newProps.children[1] :{" "}
              {actualProps.children[1] === newProps.children[1]
                ? isTrue
                : isFalse}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
