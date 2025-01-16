import { useState } from "react";
import "./App.css";
import TypeScriptDemo from "./components/TypeScriptDemo";
import HooksDemo from "./components/HooksDemo";

function App() {
  const [activeTab, setActiveTab] = useState<"typescript" | "hooks">(
    "typescript"
  );

  return (
    <div className="container">
      <h1>React + TypeScript Demo</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === "typescript" ? "active" : ""}
          onClick={() => setActiveTab("typescript")}
        >
          TypeScript Features
        </button>
        <button
          className={activeTab === "hooks" ? "active" : ""}
          onClick={() => setActiveTab("hooks")}
        >
          React Hooks
        </button>
      </div>

      <div className="content">
        {activeTab === "typescript" ? <TypeScriptDemo /> : <HooksDemo />}
      </div>
    </div>
  );
}

export default App;
