import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import DropDown from "../DropDown/DropDown";
import RadioGroup from "../RadioGroup/RadioGroup";

const formFields = [
  {
    control: "textfield",
    id: "firstName",
    label: "Model",
    required: true,
  },
  {
    control: "textfield",
    id: "lastName",
    label: "Last Name",
  },
  {
    control: "textarea",
    id: "description",
    label: "Description",
  },
  {
    control: "dropdown",
    id: "description",
    label: "Description",
    options: [
      {
        value: "AU",
        label: "Australia",
      },
      {
        value: "US",
        label: "America",
      },
    ],
  },
  {
    control: "radiogroup",
    id: "taxBracket",
    label: "Tax Bracket",
    options: [
      {
        value: "20",
        label: "20%",
      },
      {
        value: "30",
        label: "30%",
      },
      {
        value: "40",
        label: "40%",
      },
    ],
  },
  {
    control: "button",
    type: "button",
    id: "submit",
    label: "Submit",
    className: "btn-submit",
  },
];

const formDetail = {
  title: "My Form",
  formFields,
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
      return <TextField {...commonProps} />;
    case "textarea":
      return <TextArea {...commonProps} />;
    case "button":
      return <Button {...commonProps}>{item.label}</Button>;
    case "dropdown":
      return <DropDown {...commonProps} options={item.options} />;
    case "radiogroup":
      return <RadioGroup {...commonProps} options={item.options} />;
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
