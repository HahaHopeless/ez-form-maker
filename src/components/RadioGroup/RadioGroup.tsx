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
      {options.map((item: OptionsProps, idx) => (
        <>
          <input {...props} name={id} type='radio' value={item.value} />
          <label key={idx}>{item.label}</label>
        </>
      ))}
    </div>
  );
};

export default RadioGroup;
