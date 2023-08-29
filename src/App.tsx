import React, { useState } from "react";
import Result from "./components/Result/Result";
import Config from "./components/Config/Config";

function App() {
  const [tab, setTab] = useState("result");
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100px",
            height: "30px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: tab === "config" ? "#3498DB" : "#FFFFFF",
            color: tab === "config" ? "#FFFFFF" : "#000000",
            fontWeight: tab === "config" ? 800 : 400,
            transition: "background-color 0.1s ease-in",
          }}
          onClick={() => {
            setTab("config");
          }}
        >
          Config
        </div>
        <div
          style={{
            width: "100px",
            height: "30px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: tab === "result" ? "#3498DB" : "#FFFFFF",
            color: tab === "result" ? "#FFFFFF" : "#000000",
            fontWeight: tab === "result" ? 800 : 400,
            transition: "background-color 0.1s ease-in",
          }}
          onClick={() => {
            setTab("result");
          }}
        >
          Result
        </div>
      </div>
      <div>{tab === "result" && <Result />}</div>
      <div>{tab === "config" && <Config />}</div>
    </>
  );
}

export default App;
