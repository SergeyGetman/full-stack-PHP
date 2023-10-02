import React, { FC } from "react";
import { Box } from "@mui/material";
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
        <GoogleIcon color="primary" sx={{ margin: "auto auto" }} />
        <AvtorizedGoogleIconText>{text}</AvtorizedGoogleIconText>
        <Box>{icon}</Box>
      </AvtorizedGoogleStyle>
    </>
  );
};

export default AvtorizedGoogle;
