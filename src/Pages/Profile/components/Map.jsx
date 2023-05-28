import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../data/dummy";
import { BsChevronLeft } from "react-icons/bs";
function Map() {
  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
    overflow: "hidden",
    paddingX: 2.5,
    paddingY: 2,
    gap: 2,
  };
  return (
    <Box sx={style}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
          <Box width="fit-content">
            <Typography>آدرس جدید</Typography>
          </Box>
          <Box width="fit-content">
            <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
              موقعیت مکانی آدرس را مشخص کنید
            </Typography>
          </Box>
        </Box>
        <Box>
          <MdClose size={22} />
        </Box>
      </Box>
      <Divider variant="fullWidth" />
      <Box height="70%" bgcolor="grey"></Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
          مرسوله های شما به این موقعیت ارسال خواهد شد
        </Typography>
        <Button variant="contained" endIcon={<BsChevronLeft />}>
          تایید و ارسال
        </Button>
      </Box>
    </Box>
  );
}

export default Map;
