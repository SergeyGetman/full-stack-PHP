import { Box, styled, Typography } from "@mui/material";

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

export const AvtorizedGoogleStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "10px auto",
  padding: "5px",
  width: "330px",
  background:
    "linear-gradient(90deg, rgba(230,225,233,1) 23%, rgba(46,179,166,1) 50%, rgba(252,176,69,1) 100%)",
  height: "40px",
  border: "2.3px solid #5f9389",
  borderRadius: "10px",
  boxShadow: "3px 3px 5px 5px #5f9389",

  "& :hover": {
    cursor: "pointer",
  },
}));

export const AvtorizedGoogleIconText = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "800",
  fontFamily: "monospace",
}));
