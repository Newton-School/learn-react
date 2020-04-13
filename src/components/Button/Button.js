import React from "react";
import style from "./style.module.css";

class Button extends React.PureComponent {
  render() {
    const { label, onClick } = this.props;

    return (
      <button
        type="button"
        className={`${style.button} ${label ? style.btn : ""}`}
        onClick={onClick}
      >
        {label || "No Label"}
      </button>
    );
  }
}

export default Button;
