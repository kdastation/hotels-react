import React from "react";
import { Router } from "./router/router";
import { useCheckAuth } from "./hooks/check-auth-hook";

function App() {
  useCheckAuth();
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
