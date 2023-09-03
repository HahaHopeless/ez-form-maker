
# ez-form-maker

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


This library simplifies form creation in React apps by allowing you to define forms using a JSON structure.


sample input:
[
  {
    control: "textfield",
    id: "textfield",
    label: "Text Field",
  },
  {
    control: "textarea",
    id: "textarea",
    label: "Text Area",
  },
  {
    control: "dropdown",
    type: "dropdown",
    label: "Dropdown",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
    ],
  },
  {
     control: "radiogroup",
    type: "radiogroup",
    label: "Radio Group",
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
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
    id: "button",
    label: "Button",
  },
]


Control types: 
- textfield
- textarea
- dropdown
- radiogroup
- date
- button