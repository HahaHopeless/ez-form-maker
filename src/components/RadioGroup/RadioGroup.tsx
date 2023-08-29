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
      <p>
        {label}
        {required && "*"}
      </p>
      {options &&
        options.map((item: OptionsProps, idx) => (
          <div key={`radio_${idx}`}>
            <input
              {...props}
              key={`input_${idx}`}
              name={id}
              type='radio'
              value={item.value}
              onChange={props.onChange}
            />
            <label key={`label_${idx}`}>{item.label}</label>
          </div>
        ))}
    </div>
  );
};

export default RadioGroup;
