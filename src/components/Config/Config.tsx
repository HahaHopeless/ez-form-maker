import "./styles.css";
import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context";
import * as _ from "lodash";

export default function Config() {
  const { setTab, setFormData, formString, setFormString } =
    useContext(AppContext);
  const [isJsonValid, setIsJsonValid] = useState(true);
  return (
    <>
      <TextArea
        rows={20}
        label='Form Config'
        value={formString}
        error={isJsonValid === false}
        onChange={(e) => {
          setFormString(e.target.value);
        }}
      />
      <div className={`error-box ${!isJsonValid && "--visible"}`}>
        <div style={{ padding: "10px" }}>
          Please make sure the following is true for JSON above:
          <ul>
            <li>Double quotes around all values</li>
            <li>Comma after each value</li>
          </ul>
          Here's a sample input JSON:
          {`
          [
            {
    control: "textfield",
    id: "roomTitle",
    label: "First Name",
    className: "txt-fname",
    required: "true",
  },
  {
    control: "button",
    type: "button",
    id: "submit",
    label: "Submit",
    className: "btn-submit",
  },
]`}
        </div>
      </div>
      <br />

      <Button
        onClick={() => {
          try {
            const stringifyJSON = JSON.stringify(formString);
            const toobj = JSON.parse(stringifyJSON);
            const addDoubleQuotes = toobj.replace(/(\w+):/g, '"$1":');
            const removeComma1 = addDoubleQuotes.replace(/,\s*}/g, "}");
            const removeComma2 = removeComma1.replace(/,\s*]/g, "]");
            const finalObj = JSON.parse(removeComma2);
            setFormData(finalObj);
            setTab("result");
          } catch (e) {
            console.log(e);
            setIsJsonValid(false);
          }
        }}
      >
        Generate Form
      </Button>
    </>
  );
}

export const formDetail = {
  title: "My Form",
};
