import { Box, styled } from "@mui/material";

export const AvtorizedPage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "linear-gradient(252deg, #D45B78 0.01%, #4B3862 101.01%)",

  button: {
    animationFillMode: "forwards",
  },
}));

export const AvtorizedPageBlockContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  opacity: ".6",
}));

export const AvtorizedPageBlockContentForm = styled(Box)(({ theme }) => ({
  width: "100%",

  background:
    "linear-gradient(312deg, rgba(212, 91, 120, 0.90) -21.39%, rgba(255 255 255 / 90%) 75.84%);\n" +
    "backdrop-filter: blur(25px)",

  "& form": {
    backgroundColor: "#ffffff",
    minHeight: "385px",
    maxWidth: "800px",
    borderRadius: "199px",
    margin: "136px",
  },
}));

// width: 847px;

// background-color: #ffffff;
// border-radius: 199px;
// height: 384px;
