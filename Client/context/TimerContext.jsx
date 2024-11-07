import { createContext, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const TimerContext = createContext("");

const Timer = (props) => {
  const { deleteToken } = useContext(AuthContext);
  const timerRef = useRef(null);

  const newTimer = (seconds) => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Start a new timer
    timerRef.current = setTimeout(() => {
      deleteToken();
      console.log("Token deleted after timeout");
    }, seconds * 1000);
  };

  return (
    <TimerContext.Provider value={{ newTimer }}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default Timer;
