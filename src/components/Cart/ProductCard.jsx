import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../data/dummy";
import CounterCart from "./CounterCart";

function ProductCard({ product, border }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      py={2}
      my={0.5}
      border={border}
      borderRadius={2}
      borderColor={theme.palette.grey[300]}
    >
      <Box maxWidth="116px" flex={1} display="flex" flexDirection="column">
        <img src={product.imgUrl} width="100%" alt={product.title} />
        <CounterCart />
      </Box>
      <Box flex={2} display="flex" flexDirection="column" gap={1}>
        <Typography className="noselect" fontSize="0.9rem" lineHeight={2}>
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            borderRadius={5}
            bgcolor="magenta"
            width="18px"
            height="18px"
          ></Box>
          <Typography>صورتی</Typography>
        </Box>
        <Box>
          <Typography>32,000,000 تومان</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
