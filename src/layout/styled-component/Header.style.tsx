import { Box, styled } from "@mui/material";

export const HeaderStyleComponent = styled(Box)(({ theme }) => ({
  height: "100px",
  flexShrink: "0",
  background: "#0b0b0b",
  color: "#fff",
  fontFamily: "monospace",
  boxShadow: "3px 3px 4px 4px #344422",
}));
