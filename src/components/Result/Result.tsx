import React, { useContext, useEffect, useState } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import DropDown from "../DropDown/DropDown";
import RadioGroup from "../RadioGroup/RadioGroup";
import { formDetail, formFields } from "../Config/Config";
import { buttonProps } from "../../types";
import DatePicker from "../DatePicker/DatePicker";
import * as _ from "lodash";
import { AppContext } from "../../context";

interface JSONStateObject {
  [key: string]: {
    value: string;
    required?: boolean;
  };
}

export default function Result() {
  const { formData } = useContext(AppContext);
  const [jsonStateObject, setJsonStateObject] = useState<JSONStateObject>({});
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  const jsonToState = () => {
    //Have a fresh empty JSON to fill it with key:value
    const jsonObject: JSONStateObject = {};
    //Iterate over the formFields array and look for a key named id
    //then have a key with the same name as id and set it as empty string (for now. Will deal with bool later)
    formFields.forEach((field) => {
      if (field.control !== "button") {
        jsonObject[field.id] = { value: "", required: field.required };
      }
    });
    //Finally update the json state variable
    setJsonStateObject(jsonObject);
  };

  useEffect(() => {
    jsonToState();
  }, []);

  const onChange = (fieldName: string, value: string) => {
    const updatedJson = { ...jsonStateObject };
    updatedJson[fieldName] = { ...updatedJson[fieldName], value: value };
    setJsonStateObject(updatedJson);
  };

  const validateForm = () => {
    const requiredItemsEmpty = _.some(
      jsonStateObject,
      (item) =>
        item.required &&
        (_.isEmpty(item.value) || !_.isString(item.value.trim()))
    );
    if (requiredItemsEmpty) {
      setIsFormDirty(true);
    } else {
      setIsFormDirty(false);
    }
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
          jsonStateObject[item.id] && (
            <TextField
              {...commonProps}
              onChange={(e) => {
                onChange(item.id, e.target.value);
              }}
              value={jsonStateObject[item.id].value}
              error={isFormDirty && !jsonStateObject[item.id].value}
            />
          )
        );
      case "textarea":
        return (
          jsonStateObject[item.id] && (
            <TextArea
              {...commonProps}
              onChange={(e) => {
                onChange(item.id, e.target.value);
              }}
              value={jsonStateObject[item.id].value}
              error={isFormDirty && !jsonStateObject[item.id].value}
            />
          )
        );
      case "button":
        return (
          <Button
            {...buttonProps(item, idx)}
            onClick={() => {
              validateForm();
            }}
          >
            {item.label}
          </Button>
        );
      case "dropdown":
        return (
          jsonStateObject[item.id] && (
            <DropDown
              {...commonProps}
              options={item.options}
              onChange={(e) => {
                onChange(item.id, e.target.value);
              }}
              value={jsonStateObject[item.id].value}
              error={isFormDirty && !jsonStateObject[item.id].value}
            />
          )
        );
      case "radiogroup":
        return (
          jsonStateObject[item.id] && (
            <RadioGroup
              {...commonProps}
              options={item.options}
              onChange={(e) => {
                onChange(item.id, e.target.value);
              }}
              value={jsonStateObject[item.id].value}
              error={isFormDirty && !jsonStateObject[item.id].value}
            />
          )
        );
      case "date":
        return (
          jsonStateObject[item.id] && (
            <DatePicker
              {...commonProps}
              onChange={(e) => {
                onChange(item.id, e.target.value);
              }}
              value={jsonStateObject[item.id].value}
              error={isFormDirty && !jsonStateObject[item.id].value}
            />
          )
        );
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{formDetail.title}</h2>
      <form>
        {formData.map((item, idx) => {
          return jsonStateObject && renderControl(item, idx);
        })}
      </form>
    </div>
  );
}
