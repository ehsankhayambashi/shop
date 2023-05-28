import {
  Box,
  Container,
  Divider,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import BackButton from "./components/BackButton";
import { theme } from "../../data/dummy";
import TitleContent from "./components/TitleContent";
import ProductCard from "../../components/Cart/ProductCard";
import ProductOrderDetails from "./components/ProductOrderDetails";
const products = [
  {
    id: 1,
    specialSale: true,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    stockNumber: 3,
    rate: "۴.۳",
    price: 5000000,
    discountedPrice: 3304355,
    discount: 3,
    category: 6,
    quantity: 1,
  },
  {
    id: 2,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone ۱۲ pro",
    stockNumber: 10,
    rate: "۴",
    price: 1000000,
    discountedPrice: 55000,
    discount: null,
    category: 9,
    quantity: 1,
  },
  {
    id: 3,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب صورتی",
    stockNumber: 10,
    rate: "۴",
    price: 4700000,
    discountedPrice: 350000,
    discount: null,
    category: 12,
    quantity: 1,
  },
];
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery(theme.breakpoints.up("md")) ? "row" : "column",
  gap: 2,
  p: 2,
}));

function OrderDetails() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection="column">
      <Box p={2}>
        <BackButton title="جزئیات سفارش" backUrl="/profile/orders" />
      </Box>
      <Divider flexItem />
      {/* پیگیری سفارش تاریخ ثبت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"کد پیگیری سفارش"} content={"۳۳۲۳۰۲۱۴۰"} />
        <TitleContent title={"تاریخ ثبت سفارش"} content={"۲۴ اردیبهشت ۱۴۰۲"} />
      </Box>
      <Divider variant="middle" flexItem />
      {/* تحویل گیرنده تاریخ ثبت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"تحویل گیرنده"} content={"فواد صدر"} />
        <TitleContent title={"شماره موبایل"} content={"۰۹۰۳۰۴۸۳۳۴۵"} />
      </Box>
      {/* آدرس */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={0.5}
        px={2}
        pb={2}
      >
        <TitleContent
          title={"آدرس"}
          content={"امیر آباد، خ. کارگر شمالی، خ. فرشی مقدم"}
        />
      </Box>
      <Divider flexItem />
      {/* مبلغ نوع پرداخت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"مبلغ"} content={"۳۰۱,۵۹۰ تومان"} />
        <TitleContent title={"نوع پرداخت"} content={"پرداخت اینترنتی"} />
      </Box>
      <Divider flexItem />
      {/* زمان تحویل - نمایش محصولات */}
      <Box
        border={biggerThanMd ? 1 : 0}
        borderRadius={2}
        borderColor={theme.palette.grey[300]}
        m={biggerThanMd ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"}>
          <Box display="flex" flexDirection="column" gap={2} p={2}>
            {/* زمان تحویل */}
            <TitleContent
              title={"زمان تحویل"}
              content={"یکشنبه ۲۴ اردیبهشت بازه ۱۵ - "}
            />

            {/* هزینه ارسال مبلغ مرسوله */}
            <Box
              display="flex"
              flexDirection={biggerThanMd ? "row" : "column"}
              gap={2}
            >
              <TitleContent title={"هزینه ارسال"} content={"رایگان"} />
              <TitleContent title={"مبلغ مرسوله"} content={"۲۸۲,۵۹۰ تومان"} />
            </Box>
          </Box>
          {/* progressbar - پیگیری مرسوله */}
          progressbar
        </Box>
        <Divider variant="middle" />
        <Box>
          {products.map((product, index) => (
            <Box mt={3} key={index}>
              <Container maxWidth="xl">
                <ProductOrderDetails product={product} key={index} border={0} />
              </Container>
              <Divider variant="middle" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default OrderDetails;
