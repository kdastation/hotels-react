import { useState } from "react";

export const useMode = (initialValue: boolean) => {
  const [mode, setMode] = useState(initialValue);
  const activateMode = () => {
    setMode(true);
  };
  const deactivateMode = () => {
    setMode(false);
  };
  return {
    mode,
    activateMode,
    deactivateMode,
  };
};
