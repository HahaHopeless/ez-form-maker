import "./styles.css";
import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`ez-form-maker-button ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
