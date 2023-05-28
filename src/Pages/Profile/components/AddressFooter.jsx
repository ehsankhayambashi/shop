import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../data/dummy";

function AddressFooter({ setShowForm, showForm, location }) {
  return (
    <Box
      display={showForm ? "none" : "flex"}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      py={1.5}
      px={1}
    >
      <Box flex={1}>
        <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
          مرسوله های شما به این موقعیت ارسال خواهد شد
        </Typography>
      </Box>
      <Box flex={1} textAlign="left">
        <Button
          variant="contained"
          size="large"
          disabled={location ? false : true}
          onClick={() => setShowForm(true)}
        >
          تایید و ادامه
        </Button>
      </Box>
    </Box>
  );
}

export default AddressFooter;
