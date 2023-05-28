import { Container, Box } from "@mui/material";
import React from "react";
import BlogPost from "../../components/BlogPost/BlogPost";
import CardInfo from "../../components/CardInfo/CardInfo";
import Footer from "../../components/Footer/Footer";
import HomeCats from "../../components/HomeCats/HomeCats";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Slider from "../../components/Slider/Slider";
import RelativeProducts from "./../../components/RelativeProducts/RelativeProducts/RelativeProducts";

function Home() {
  return (
    <div>
      <Slider />
      <Container maxWidth="xl">
        <Box my={3}>
          <CardInfo />
        </Box>
        <Box my={8}>
          <HomeCats />
        </Box>
        <Box my={2}>
          <HomeProducts />
        </Box>
        <Box my={3}>
          {/* <RelativeProducts /> */}
          <BlogPost />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
