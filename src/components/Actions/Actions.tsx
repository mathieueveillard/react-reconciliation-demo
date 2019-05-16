import React from "react";

interface Props {
  onReset(): void;
  onApplyNewProps(): void;
}

export const Actions: React.StatelessComponent<Props> = ({
  onReset,
  onApplyNewProps
}: Props) => {
  return (
    <div className="actions">
      <button
        className="mdl-button mdl-js-button mdl-button--raised"
        onClick={onReset}
      >
        Reset
      </button>{" "}
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        onClick={onApplyNewProps}
      >
        Apply new props
      </button>
    </div>
  );
};
