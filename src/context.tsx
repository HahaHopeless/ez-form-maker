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
  const [formData, setFormData] = useState<Array<{}>>([]);
  const [formString, setFormString] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ tab, setTab, formData, setFormData, formString, setFormString }}
    >
      {children}
    </AppContext.Provider>
  );
};
