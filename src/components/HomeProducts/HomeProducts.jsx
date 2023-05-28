import React from "react";
import { Box, Divider, Grid, useMediaQuery } from "@mui/material";
import GridProducts from "./GridProducts";
import { allProducts, theme } from "../../data/dummy";

function HomeProducts() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      borderRadius={5}
      border={biggerThanMd ? 1 : 0}
      borderColor={theme.palette.grey[400]}
      sx={{
        width: "100%",
      }}
    >
      <Grid container direction="row">
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Box>
            <GridProducts title="دیجیتال" products={allProducts.slice(0, 4)} />
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Box mb={1}>
            <GridProducts
              title="خانه و آشپزخانه"
              products={allProducts.slice(4, 8)}
            />
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Box mb={1}>
            <GridProducts
              title="هدفون و هدست و هندزفری"
              products={allProducts.slice(8, 12)}
            />
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Box mb={1}>
            <GridProducts
              title="ساعت هوشمند"
              products={allProducts.slice(0, 4)}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeProducts;

//   sx={{
//     flexDirection: { xs: "column", sm: "row" },
//     width: "100%",
//   }}
