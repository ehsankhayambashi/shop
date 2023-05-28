import React from "react";
import { Box, Button, useMediaQuery, Typography } from "@mui/material";
import { theme } from "../../data/dummy";
function ProductInfoCardMobile({ product }) {
  const mobileVersion = useMediaQuery(theme.breakpoints.down("md"));
  if (mobileVersion) {
    return (
      <Box
        position="fixed"
        bgcolor="#fafafa"
        sx={{
          width: "100%",
          height: "82px",
          zIndex: 1000,
          bottom: 0,
          boxShadow: "0 1px 5px rgb(0 0 0 / 20%)",
          borderTop: "1px solid #D3D3D3",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          height="100%"
        >
          <Button variant="contained">ثبت سفارش</Button>
          <Box display="flex" flexDirection="column">
            <Box
              position="relative"
              pl={0.5}
              justifyContent="end"
              display="flex"
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                }}
                color="grey.500"
                variant="caption"
              >
                جمع سبد خرید
              </Typography>
            </Box>
            <Box
              gap={0.5}
              display="flex"
              alignItems="center"
              justifyContent="end"
              mb={1}
            >
              <Typography
                sx={{ fontSize: "1.2rem" }}
                variant="subtitle2"
                component="span"
              >
                212,000
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }} component="span">
                تومان
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}

export default ProductInfoCardMobile;
