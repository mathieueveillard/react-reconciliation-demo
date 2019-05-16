import React from "react";

interface Props {
  title: string;
  props: any;
}

export function DisplayProps({ title, props }: Props): React.ReactElement {
  return (
    <div className="props">
      <div>
        <h5>{title}</h5>
      </div>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </div>
  );
}
