import "./App.css";
import React, { useState } from "react";
import Result from "./components/Result/Result";
import Config from "./components/Config/Config";

function App() {
  const [tab, setTab] = useState("result");
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
