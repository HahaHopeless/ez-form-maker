import React from "react";
import { TextFieldProps } from "../../types";

const TextField: React.FC<TextFieldProps> = ({
  label,
  required,
  type,
  regex,
  ...props
}) => {
  return (
    <>
      <p>
        {label}
        {required && "*"}
      </p>
      <input {...props}></input>
    </>
  );
};

export default TextField;
