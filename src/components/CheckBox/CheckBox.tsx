import React from "react";
import { CheckboxProps } from "../../types";

const RadioButton: React.FC<CheckboxProps> = ({ value, options, ...props }) => {
  return (
    <div {...props}>
      <input type='checkbox' id='html' name='fav_language' value='HTML' />
      <label>HTML</label>
      <br />
      <input type='checkbox' id='css' name='fav_language' value='CSS' />
      <label>CSS</label>
      <br />
      <input
        type='checkbox'
        id='javascript'
        name='fav_language'
        value='JavaScript'
      />
      <label>JavaScript</label>
    </div>
  );
};

export default RadioButton;
