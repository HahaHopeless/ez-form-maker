import React from "react";
import { RadioButtonProps } from "../../types";

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  onChange,
  disabled,
  className,
  style,
}) => {
  return (
    <div>
      <input type='radio' id='html' name='fav_language' value='HTML' />
      <label>HTML</label>
      <br />
      <input type='radio' id='css' name='fav_language' value='CSS' />
      <label>CSS</label>
      <br />
      <input
        type='radio'
        id='javascript'
        name='fav_language'
        value='JavaScript'
      />
      <label>JavaScript</label>
    </div>
  );
};

export default RadioButton;
