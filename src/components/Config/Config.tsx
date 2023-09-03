import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import { AppContext } from "../../context";
import * as _ from "lodash";

export default function Config() {
  const { setTab, setFormData, formString, setFormString } =
    useContext(AppContext);
  return (
    <>
      <TextArea
        rows={20}
        label='Form Config'
        value={formString}
        onChange={(e) => {
          setFormString(e.target.value);
        }}
      />
      <br />
      <Button
        onClick={() => {
          const stringifyJSON = JSON.stringify(formString);
          const toobj = JSON.parse(stringifyJSON);
          const addDoubleQuotes = toobj.replace(/(\w+):/g, '"$1":');
          const removeComma1 = addDoubleQuotes.replace(/,\s*}/g, "}");
          const removeComma2 = removeComma1.replace(/,\s*]/g, "]");
          const finalObj = JSON.parse(removeComma2);
          setFormData(finalObj);
          setTab("result");
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
