import React from "react";
import { Router } from "./router/router";
import { useCheckAuth } from "./hooks/check-auth-hook";
import "./App.css";

function App() {
  useCheckAuth();
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
