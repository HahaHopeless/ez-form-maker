import React from "react";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import DropDown from "../../components/DropDown/DropDown";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { formDetail, formFields } from "../Config/Config";
import { textFieldProps, buttonProps } from "../../types";
import DatePicker from "../../components/DatePicker/DatePicker";

const renderControl = (item: any, idx: number) => {
  const commonProps = {
    key: idx,
    label: item.label,
    value: item.value,
    defaultValue: item.defaultValue,
    disabled: item.disabled,
    onChange: item.onChange,
    onBlur: item.onBlur,
    onFocus: item.onFocus,
    placeholder: item.placeholder,
    maxLength: item.maxLength,
    minLength: item.minLength,
    className: item.className,
    style: item.style,
    id: item.id,
    name: item.name,
    autoComplete: item.autoComplete,
    autoFocus: item.autoFocus,
    readOnly: item.readOnly,
    required: item.required,
    pattern: item.pattern,
    inputMode: item.inputMode,
  };
  switch (item.control) {
    case "textfield":
      return <TextField {...textFieldProps(item, idx)} />;
    case "textarea":
      return <TextArea {...commonProps} />;
    case "button":
      return <Button {...buttonProps(item, idx)}>{item.label}</Button>;
    case "dropdown":
      return <DropDown {...commonProps} options={item.options} />;
    case "radiogroup":
      return <RadioGroup {...commonProps} options={item.options} />;
    case "date":
      return <DatePicker {...commonProps} />;
    default:
      break;
  }
};

export default function Result() {
  return (
    <div>
      <h2>{formDetail.title}</h2>
      <form>
        {formDetail.formFields.map((item, idx) => {
          return renderControl(item, idx);
        })}
      </form>
    </div>
  );
}
