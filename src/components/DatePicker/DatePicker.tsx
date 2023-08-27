import React from "react";
import { RadioGroupProps, OptionsProps } from "../../types";

const DatePicker: React.FC<RadioGroupProps> = ({
  required,
  id,
  label,
  value,
  options,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} name={id} type='date' />
    </div>
  );
};

export default DatePicker;
