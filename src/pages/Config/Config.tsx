import React from "react";

export default function Config() {
  return (
    <>
      <p>Form Configuration</p>
      <textarea></textarea>
      <br />
      <button>Generate Form</button>
    </>
  );
}

export const formFields = [
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

export const formDetail = {
  title: "My Form",
  formFields,
};
