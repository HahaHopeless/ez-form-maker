import React, { useEffect, useState } from "react";

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
    control: "date",
    id: "date",
    label: "Date",
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
  const [newJsonObject, setNewJsonObject] = useState<{ [key: string]: string }>(
    {}
  );

  const jsonToState = () => {
    //Have a fresh empty JSON to fill it with key:value
    const jsonObject: { [key: string]: string } = {};
    //Iterate over the formFields array and look for a key named id
    //then have a key with the same name as id and set it as empty string (for now. Will deal with bool later)
    formFields.forEach((field) => {
      jsonObject[field.id] = "";
    });
    //Finally update the json state variable
    setNewJsonObject(jsonObject);
  };

  useEffect(() => {
    jsonToState();
  }, []);
  useEffect(() => {
    console.log("newJsonObject: ", newJsonObject);
  }, [newJsonObject]);

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
