import "./styles.css";
import React from "react";
import { TextFieldProps } from "../../types";

const TextField: React.FC<TextFieldProps> = ({
  label,
  required,
  type,
  regex,
  error,
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
        className={`ez-form-maker-textfeild ${required && error && "--error"} ${
          props.className
        }`}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </>
  );
};

export default TextField;
