import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import BackButton from "./components/BackButton";
import { theme } from "../../data/dummy";
import Search from "../../components/Search/Search";
import Test from "./Test";
import OrdersTab from "./components/OrdersTab";

function Orders() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box dispaly="flex" flexDirection="column" gap={1}>
      <Box px={2} display={biggerThanMd ? "none" : "block"}>
        <BackButton title={"تاریخچه سفارشات"} backUrl="/profile" />
        <Box mt={3} bgcolor={theme.palette.grey[300]} borderRadius={2}>
          <Search />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          display={biggerThanMd ? "flex" : "none"}
          alignItems="center"
          justifyContent="space-between"
          pt={2}
          px={2}
        >
          <Typography>تاریخچه سفارشات</Typography>
          <MdSearch />
        </Box>
        <OrdersTab />
      </Box>
    </Box>
  );
}

export default Orders;
