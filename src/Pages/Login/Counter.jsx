import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
function Counter({ handleTimeState }) {
  const [count, setCount] = useState(4); // 3 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    // Clear interval and reset count when component unmounts
    return () => {
      clearInterval(intervalId);
      setCount(4);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      handleTimeState(true);
    }
  }, [count]);

  return (
    <div>
      {count > 0 ? (
        <Typography fontSize="0.8rem" color="CaptionText">
          {Math.floor(count / 60)}:{count % 60} مانده تا دریافت مجدد کد
        </Typography>
      ) : (
        ""
      )}
    </div>
  );
}
export default Counter;
