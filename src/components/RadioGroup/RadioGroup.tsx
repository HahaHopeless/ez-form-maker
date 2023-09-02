import "./styles.css";
import React from "react";
import { RadioGroupProps, OptionsProps } from "../../types";

const RadioGroup: React.FC<RadioGroupProps> = ({
  required,
  id,
  label,
  options,
  ...props
}) => {
  return (
    <div
      className={`ez-form-maker-radiogroup ${
        required && !props.value && "--error"
      } ${props.className}`}
    >
      <p style={{ margin: 0 }}>
        {label}
        {required && "*"}
      </p>
      {options &&
        options.map((item: OptionsProps, idx) => (
          <span key={`radio_${idx}`} className={`radio-input`}>
            <input
              {...props}
              key={`input_${idx}`}
              name={id}
              type='radio'
              value={item.value}
              onChange={props.onChange}
            />
            <label key={`label_${idx}`}>{item.label}</label>
          </span>
        ))}
    </div>
  );
};

export default RadioGroup;
