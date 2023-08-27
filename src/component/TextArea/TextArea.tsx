import React from "react";
import { TextAreaProps } from "../../types";

const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  return <textarea {...props}></textarea>;
};

export default TextArea;
