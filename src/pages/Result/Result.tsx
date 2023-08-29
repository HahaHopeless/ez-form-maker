import React, { useEffect, useState } from "react";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import DropDown from "../../components/DropDown/DropDown";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { formDetail, formFields } from "../Config/Config";
import { textFieldProps, buttonProps } from "../../types";
import DatePicker from "../../components/DatePicker/DatePicker";

export default function Result() {
  const [jsonStateObject, setJsonStateObject] = useState<{
    [key: string]: string;
  }>({});

  const jsonToState = () => {
    //Have a fresh empty JSON to fill it with key:value
    const jsonObject: { [key: string]: string } = {};
    //Iterate over the formFields array and look for a key named id
    //then have a key with the same name as id and set it as empty string (for now. Will deal with bool later)
    formFields.forEach((field) => {
      jsonObject[field.id] = "";
    });
    //Finally update the json state variable
    setJsonStateObject(jsonObject);
  };

  useEffect(() => {
    jsonToState();
  }, []);

  useEffect(() => {
    console.log("newJsonObject: ", jsonStateObject);
  }, [jsonStateObject]);

  const onChange = (fieldName: string, value: string) => {
    const updatedJson = { ...jsonStateObject };
    updatedJson[fieldName] = value;
    setJsonStateObject(updatedJson);
  };

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
        return (
          <TextField
            {...textFieldProps(item, idx)}
            onChange={(e) => {
              onChange(item.id, e.target.value);
            }}
          />
        );
      case "textarea":
        return (
          <TextArea
            {...commonProps}
            onChange={(e) => {
              onChange(item.id, e.target.value);
            }}
          />
        );
      case "button":
        return <Button {...buttonProps(item, idx)}>{item.label}</Button>;
      case "dropdown":
        return (
          <DropDown
            {...commonProps}
            options={item.options}
            onChange={(e) => {
              onChange(item.id, e.target.value);
            }}
          />
        );
      case "radiogroup":
        return (
          <RadioGroup
            {...commonProps}
            options={item.options}
            onChange={(e) => {
              onChange(item.id, e.target.value);
            }}
          />
        );
      case "date":
        return (
          <DatePicker
            {...commonProps}
            onChange={(e) => {
              onChange(item.id, e.target.value);
            }}
          />
        );
      default:
        break;
    }
  };

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
