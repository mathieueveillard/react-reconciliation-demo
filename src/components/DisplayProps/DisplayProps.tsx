import React from "react";
import "./DisplayProps.scss";

interface Props {
  title: string;
  props: any;
}

export const DisplayProps: React.StatelessComponent<Props> = ({
  title,
  props
}: Props) => {
  return (
    <div className="display-props-container">
      <div>
        <h5>{title}</h5>
      </div>
      <pre className="code">{JSON.stringify(props, undefined, 2)}</pre>
    </div>
  );
};
