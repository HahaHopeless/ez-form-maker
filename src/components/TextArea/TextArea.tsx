import React from "react";
import { TextAreaProps } from "../../types";

const TextArea: React.FC<TextAreaProps> = ({ required, label, ...props }) => {
  return (
    <>
      <p>
        {label}
        {required && "*"}
      </p>
      <textarea {...props}></textarea>
    </>
  );
};

export default TextArea;
