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
      <input
        {...props}
        className={`ez-form-maker-textfeild ${
          required && !props.value && "ez-form-maker-textfeild--error"
        } ${props.className}`}
        onChange={props.onChange}
      ></input>
    </>
  );
};

export default TextField;
