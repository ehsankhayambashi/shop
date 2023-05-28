import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../data/dummy";

function TitleContent({ title, content }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"} gap={2}>
      <Box
        display="flex"
        alignItems="center"
        gap={0.5}
        justifyContent={biggerThanMd ? "" : "space-between"}
      >
        <Typography color={theme.palette.grey[500]}>{title}</Typography>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
}

export default TitleContent;
