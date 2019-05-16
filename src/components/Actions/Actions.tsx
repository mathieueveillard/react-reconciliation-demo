import React from "react";
import "./Actions.scss";

interface Props {
  onReset(): void;
  onApplyNewProps(): void;
}

export const Actions: React.StatelessComponent<Props> = ({
  onReset,
  onApplyNewProps
}: Props) => {
  return (
    <div className="actions-container">
      <button
        className="mdl-button mdl-js-button mdl-button--raised"
        onClick={onReset}
      >
        Reset
      </button>
      <div className="separator" />
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        onClick={onApplyNewProps}
      >
        Apply new props
      </button>
    </div>
  );
};
