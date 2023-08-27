import React from "react";
import { TextAreaProps } from "../../types";

const FileInput: React.FC<TextAreaProps> = ({ ...props }) => {
  return <textarea {...props}></textarea>;
};

export default FileInput;
