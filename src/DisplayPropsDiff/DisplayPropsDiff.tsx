import React from "react";
import { ParentProps } from "../ParentProps";
import "./DisplayPropsDiff.scss";

interface Props {
  actualProps: ParentProps;
  newProps: ParentProps;
}

export function DisplayPropsDiff({ actualProps, newProps }: Props): React.ReactElement {
  const isTrue = <span className="true">true</span>;
  const isFalse = <span className="false">false</span>;
  return (
    <div className="props">
      <div>
        <h5>Diff</h5>
      </div>
      <div>
        <pre>actualProps === newProps : {actualProps === newProps ? isTrue : isFalse}</pre>
        <pre>actualProps.value === newProps.value : {actualProps.value === newProps.value ? isTrue : isFalse}</pre>
        <pre>
          actualProps.children === newProps.children : {actualProps.children === newProps.children ? isTrue : isFalse}
        </pre>
        {actualProps.children !== newProps.children && (
          <div>
            <pre>
              actualProps.children[0] === newProps.children[0] :{" "}
              {actualProps.children[0] === newProps.children[0] ? isTrue : isFalse}
            </pre>
            <pre>
              actualProps.children[1] === newProps.children[1] :{" "}
              {actualProps.children[1] === newProps.children[1] ? isTrue : isFalse}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
