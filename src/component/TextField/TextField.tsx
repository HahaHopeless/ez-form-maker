import React from "react";
import { TextFieldProps } from "../../types";

const TextField: React.FC<TextFieldProps> = ({ type, regex, ...props }) => {
  return <input {...props}></input>;
};

export default TextField;
