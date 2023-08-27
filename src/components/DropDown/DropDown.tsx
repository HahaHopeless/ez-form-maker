import React from "react";
import { DropdownProps } from "../../types";

interface OptionsProps {
  value: string;
  label: string;
}

const DropDown: React.FC<DropdownProps> = ({ label, options, ...props }) => {
  return (
    <>
      <p>{label}</p>
      <select {...props}>
        {options.map((item: OptionsProps, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
