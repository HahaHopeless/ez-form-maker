import React from "react";
import { RadioGroupProps, OptionsProps } from "../../types";

const RadioGroup: React.FC<RadioGroupProps> = ({
  required,
  id,
  label,
  value,
  options,
  ...props
}) => {
  return (
    <div>
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
