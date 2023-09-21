import { Box, styled } from "@mui/material";

export const TableStyledStyle = styled(Box)(({ theme }) => ({
  border: "3px solid blue",
  "&  table": {
    width: "100%",
    border: "3px solid green",
  },
  "&  tr, td": {
    border: "2px solid grey",
  },
}));
