import React from "react";
import { Container } from "@mui/material";
import SendMobile from "./SendMobile";
import VerifyMobile from "./VerifyMobile";

function Login() {
  return (
    <Container maxWidth="xl">
      <VerifyMobile />
    </Container>
  );
}

export default Login;
