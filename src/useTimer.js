import React, { useEffect, useState } from "react";

const useTimer = (delay) => {
  const [state, setState] = useState(0);
  const [stop, setStop] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (stop) return;    

    const intervalId = setInterval(() => {
      if (state == 59) {
        setState(0);
        setMinutes((minutes) => minutes + 1);
      } else {
        setState(state + 1);
      }
      
      if (minutes == 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
      
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [state, stop]);

  return [state, minutes, hours, () => setStop(true)];
}

export default useTimer;
