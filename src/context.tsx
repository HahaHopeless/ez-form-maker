import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AppContextProps {
  tab: string;
  setTab: (value: string) => void;
  formData: Array<{}>;
  setFormData: (value: Array<{}>) => void;
  formString: string;
  setFormString: (value: string) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [tab, setTab] = useState("result");
  const [formData, setFormData] = useState<Array<{}>>([
    {
      control: "textfield",
      id: "textfield",
      label: "Text Field",
      required: "true",
    },
    {
      control: "textarea",
      id: "textarea",
      label: "Text Area",
    },
    {
      control: "dropdown",
      id: "dropdown",
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
      id: "radiogroup",
      label: "Radio Group",
      options: [
        {
          value: "3",
          label: "Radio 1",
        },
        {
          value: "4",
          label: "Radio 2",
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
  ]);
  const [formString, setFormString] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ tab, setTab, formData, setFormData, formString, setFormString }}
    >
      {children}
    </AppContext.Provider>
  );
};
