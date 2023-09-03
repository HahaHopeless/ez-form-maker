import "./styles.css";
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
      <p style={{ margin: 0 }}>{label}</p>
      <input
        {...props}
        name={id}
        type='date'
        onChange={props.onChange}
        className={`ez-form-maker-datepicker ${props.className}`}
      />
    </div>
  );
};

export default DatePicker;
