import {
  Box,
  Grid,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "./CardInfo.scss";
import { BsTruck } from "react-icons/bs";
import { MdOutlineDiamond } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
function CardInfo() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const cards = [
    {
      id: 1,
      title: "تضمین کیفیت",
      subTitle: "ضمانت کالا",
      icon: <MdOutlineDiamond size={"2.2em"} />,
    },
    {
      id: 2,
      title: "ارسال سریع",
      subTitle: "با پست و پیک",
      icon: <BsTruck size={"2.2em"} />,
    },
    {
      id: 3,
      title: "تضمین قیمت",
      subTitle: "مناسب ترین قیمت",
      icon: <GrCertificate size={"2.2em"} />,
    },
    {
      id: 4,
      title: "پشتیبانی",
      subTitle: "پاسخگویی و راهنمایی",
      icon: <BiSupport size={"2.2em"} />,
    },
  ];

  const border = id => {
    if (id === 4) {
      return 0;
    } else {
      if (onlySmallScreen && id === 2) {
        return 0;
      } else {
        return 1;
      }
    }
  };
  return (
    <Box className="card-info">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        {cards.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
              py={3}
              borderLeft={border(card.id)}
              borderBottom={1}
              borderColor={theme => theme.palette.grey[300]}
            >
              {card.icon}
              <Typography variant="h5" fontSize="1rem"></Typography>
              {card.title}
              <Typography variant="h5" fontSize="1rem" color="GrayText">
                {card.subTitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CardInfo;
