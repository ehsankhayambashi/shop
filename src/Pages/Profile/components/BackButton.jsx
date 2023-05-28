import { Typography, Box, useMediaQuery } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { theme } from "../../../data/dummy";
import { useNavigate } from "react-router-dom";

function BackButton({ title, backUrl }) {
  const navigate = useNavigate();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      onClick={() => navigate(backUrl)}
    >
      <BsArrowRight />
      <Typography>{title}</Typography>
    </Box>
  );
}

export default BackButton;
