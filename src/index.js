import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { InfoProvider } from "./components/context/InfoContext";

ReactDOM.render(
  <InfoProvider>
    <Router>
      <App />
    </Router>
  </InfoProvider>,
  document.getElementById("root")
);
