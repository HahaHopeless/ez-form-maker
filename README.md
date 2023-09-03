
# ez-form-maker

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


This library simplifies form creation in React apps by allowing you to define forms using a JSON structure.


sample input:

[
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
]