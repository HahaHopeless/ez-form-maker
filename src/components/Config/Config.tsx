import React, { useContext } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context";

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
  const { setTab } = useContext(AppContext);
  return (
    <>
      <TextArea label='Form Config' />
      <br />
      <Button onClick={() => setTab("result")}>Generate Form</Button>
    </>
  );
}

export const formDetail = {
  title: "My Form",
  formFields,
};
