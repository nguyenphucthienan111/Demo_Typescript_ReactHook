import { useState } from "react";
import "./App.css";
import TypeScriptDemo from "./components/TypeScriptDemo";
import HooksDemo from "./components/HooksDemo";
import { UserProvider } from "./components/context/Context";

function App() {
  const [activeTab, setActiveTab] = useState<"typescript" | "hooks">(
    "typescript"
  );

  return (
    <div className="container">
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default App;
