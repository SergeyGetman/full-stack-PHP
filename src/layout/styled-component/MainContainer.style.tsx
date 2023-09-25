import { Box, styled } from "@mui/material";

export const MainContainerStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "#d5bedb",
}));

export const MainContainerBTNStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",

  "& button": {
    backgroundColor: "yellow",
    textAlign: "center",
    color: "grey",
  },
}));
