import React, { useEffect, useState } from "react";

export const formFields = [
  {
    control: "textfield",
    id: "roomTitle",
    label: "Room Title",
    className: "Test",
    required: true,
  },
  {
    control: "textarea",
    id: "roomDescription",
    label: "Room Description",
  },
  {
    control: "radiogroup",
    id: "roomFloor",
    label: "Room Floor",
    options: [
      {
        value: "3",
        label: "3rd Floor",
      },
      {
        value: "12",
        label: "12th Floor",
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

export const formDetail = {
  title: "My Form",
  formFields,
};
