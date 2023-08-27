import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  children,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
