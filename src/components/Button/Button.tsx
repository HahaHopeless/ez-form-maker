import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
