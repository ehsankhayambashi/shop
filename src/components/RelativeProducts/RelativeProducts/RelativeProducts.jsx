import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import "./RelativeProducts.scss";
import useDraggableContainer from "./../../../utils/useDraggableContainer ";
import { allProducts, theme } from "./../../../data/dummy";
import ProductCard from "../../ProductCard/ProductCard";

function RelativeProducts() {
  const { containerRef, handleMouseDown, handleTouchStart } =
    useDraggableContainer();

  return (
    <Box display="flex" flexDirection="column">
      <Typography
        mb={3}
        width="fit-content"
        borderBottom={3}
        borderColor={theme => theme.palette.primary.main}
      >
        کالای مشابه
      </Typography>
      <div
        className="scroll-container scrollbarDiv"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <Grid container>
          <div className="scroll-wrapper">
            {allProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </div>
        </Grid>
      </div>
    </Box>
  );
}

export default RelativeProducts;
