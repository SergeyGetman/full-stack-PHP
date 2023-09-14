import { Box, styled } from "@mui/material";

export const ModalWindowStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  background: "#433333",
  border: "2px solid #000",
  boxShadow: "10px 5px 5px red",
}));
