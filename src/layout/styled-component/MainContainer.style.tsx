import { Box, styled } from "@mui/material";

export const MainContainerStyle = styled(Box)(({ theme }) => ({
  border: "3px solid blue",
  height: "200px",
  width: "100%",
  display: "flex",

  "& button": {
    backgroundColor: "red",
    color: "dark",
  },
}));
