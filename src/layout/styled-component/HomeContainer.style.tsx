import { Box, styled } from "@mui/material";
// @ts-ignore
import LegionFone from "../../static/images/legion.png";

export const HomeContainerStyle = styled(Box)(({ theme }) => ({
  margin: "10px",
  borderRadius: "10px",
  width: "100%",
  boxShadow: "5px 5px 5px 5px #af756d",
  background: "linear-gradient(252deg, #D45B78 0.01%, #4B3862 101.01%)",

  animation: "$slidein 2s infinite",

  "& img": {
    height: "700px",
  },

  "@keyframes slidein": {
    from: {
      opacity: "0",
      background: "yellow",
    },
    to: {
      opacity: "1",
      background: "#2ec246",
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
  display: "flex",
  justifyContent: "center",
  button: {
    animationFillMode: "forwards",
    backgroundColor: "red",
    color: "yellow",
  },
}));

export const LegionImg = styled(Box)(({ theme }) => ({
  color: "black",
  height: "100%",
  backgroundImage: `url(${LegionFone})`,
}));
