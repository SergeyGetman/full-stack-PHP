import { Box, styled } from "@mui/material";

export const HomeContainerStyle = styled(Box)(({ theme }) => ({
  margin: "10px",
  borderRadius: "10px",
  width: "100%",
  boxShadow: "5px 5px 5px 5px #af756d",
  background: "linear-gradient(252deg, #D45B78 0.01%, #4B3862 101.01%)",

  animation: "$slidein 2s infinite",

  "@keyframes slidein": {
    from: {
      opacity: "0",
      background: "yellow",
    },
    to: {
      opacity: "1",
      background: "#7fabd6",
    },
  },

  "&:first-child": {
    button: {
      animation: "slidein 4s infinite",
      margin: "10px",
      color: "white",
      fontFamily: "monospace",
    },
  },

  img: {
    backgroundPosition: "containt",
  },
}));

export const HomeButtonNavigateStyle = styled(Box)(({ theme }) => ({
  height: "200px",
  marginBottom: "auto",
  backgroundColor: "red",
  color: "yellow",
  button: {
    animationFillMode: "forwards",
    backgroundColor: "red",
    color: "yellow",
  },
}));
