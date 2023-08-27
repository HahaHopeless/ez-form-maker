import React from "react";
import TextField from "../TextField/TextField";
import DropDown from "../DropDown/DropDown";
import CheckBox from "../CheckBox/CheckBox";
import RadioButton from "../RadioButton/RadioButton";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";

export default function Result() {
  return (
    <form className='App'>
      <TextField
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <TextArea
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <DropDown />
      <CheckBox />
      <RadioButton />
      <Button>Button</Button>
    </form>
  );
}
