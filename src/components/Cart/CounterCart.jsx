import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../data/dummy";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import "./Cart.scss";
function CounterCart() {
  const [counter, setCounter] = useState(1);
  const handleMinus = (counter) => {
    setCounter(counter - 1);
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      border={1}
      borderColor={theme.palette.grey[400]}
      borderRadius={1}
      py={1}
      mx={1}
      mt={1}
    >
      <Box color={theme.palette.primary.main}>
        <FaPlus onClick={() => setCounter(counter + 1)} />
      </Box>
      <Box mb={1}>
        <Typography className="noselect" color={theme.palette.primary.main}>
          {counter}
        </Typography>
      </Box>
      <Box color={theme.palette.primary.main}>
        {counter <= 1 ? (
          <FaTrashAlt onClick={() => handleMinus(counter)} />
        ) : (
          <FaMinus onClick={() => handleMinus(counter)} />
        )}
      </Box>
    </Box>
  );
}

export default CounterCart;
