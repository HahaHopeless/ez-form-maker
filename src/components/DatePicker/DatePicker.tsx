import "./styles.css";
import React from "react";
import { RadioGroupProps, OptionsProps } from "../../types";

const DatePicker: React.FC<RadioGroupProps> = ({
  required,
  id,
  error,
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
        className={`ez-form-maker-datepicker ${
          required && error && "--error"
        } ${error && "--error"} ${props.className}`}
      />
    </div>
  );
};

export default DatePicker;
