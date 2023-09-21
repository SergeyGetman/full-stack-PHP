import { Box, keyframes, styled } from "@mui/material";

export const HomeContainerStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  borderRadius: "8px",
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
      background: "green",
    },
  },

  "&:first-child": {
    button: {
      animation: "slidein 2s infinite",
      margin: "20px",
      color: "white",
      fontFamily: "Open Sans",
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
