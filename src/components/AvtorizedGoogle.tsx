import React, { FC } from "react";
import MainContainer from "./MainContainer";
import { Box, Typography } from "@mui/material";
import { IAvtorizedGoogle } from "../types/types";
import GoogleIcon from "@mui/icons-material/Google";
import {
  AvtorizedGoogleIconText,
  AvtorizedGoogleStyle,
} from "../layout/styled-component/Autorized.style";

const AvtorizedGoogle: FC<IAvtorizedGoogle> = ({ text, icon }) => {
  return (
    <>
      <AvtorizedGoogleStyle>
        <GoogleIcon color="primary" sx={{ margin: "5px 20px" }} />
        <AvtorizedGoogleIconText>{text}</AvtorizedGoogleIconText>
        <Box>{icon}</Box>
      </AvtorizedGoogleStyle>
    </>
  );
};

export default AvtorizedGoogle;
