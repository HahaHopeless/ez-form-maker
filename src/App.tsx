import "./App.css";
import React, { useContext, useState } from "react";
import Result from "./components/Result/Result";
import Config from "./components/Config/Config";
import { AppContext } from "./context";

function App() {
  const { tab, setTab } = useContext(AppContext);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className={`app-tab ${tab === "config" && "active"}`}
          onClick={() => {
            setTab("config");
          }}
        >
          Config
        </div>
        <div
          className={`app-tab ${tab === "result" && "active"}`}
          onClick={() => {
            setTab("result");
          }}
        >
          Result
        </div>
      </div>
      <div style={{ height: "1px", background: "rgba(0,0,0,0.2)" }}></div>
      <div>{tab === "result" && <Result />}</div>
      <div>{tab === "config" && <Config />}</div>
    </>
  );
}

export default App;
