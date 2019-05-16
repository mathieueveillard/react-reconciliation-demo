import React from "react";

interface Props {
  title: string;
  props: any;
}

export const DisplayProps: React.StatelessComponent<Props> = ({
  title,
  props
}: Props) => {
  return (
    <div className="props">
      <div>
        <h5>{title}</h5>
      </div>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </div>
  );
};
