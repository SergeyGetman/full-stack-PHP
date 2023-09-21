import { Box, styled } from "@mui/material";

export const MainContainerStyle = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const MainContainerBTNStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",

  "& button": {
    backgroundColor: "yellow",
    color: "grey",
  },
}));
