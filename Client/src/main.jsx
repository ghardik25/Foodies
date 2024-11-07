import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Authstate from "../context/AuthContext.jsx";
import DataManipulation from "../context/InsertDeleteContext.jsx";
import Timer from "../context/TimerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authstate>
      <DataManipulation>
        <Timer>
          <App />
        </Timer>
      </DataManipulation>
    </Authstate>
  </React.StrictMode>
);
