import React, { createContext, useState } from "react";

interface AppContextProps {
  tab: string;
  setTab: (tab: string) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [tab, setTab] = useState("config");
  return (
    <AppContext.Provider value={{ tab, setTab }}>
      {children}
    </AppContext.Provider>
  );
};
