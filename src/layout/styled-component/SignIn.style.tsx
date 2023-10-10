import { Box, styled, Typography } from "@mui/material";

export const SignInStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#5f9389",
}));

export const SignInStyleAllFormBlock = styled(Box)(({ theme }) => ({
  width: "457px",
  height: "518px",
  flexShrink: "0",
  borderRadius: "30px",
  background: "#FFF",

  "& form ": {
    margin: "21px 0",
    height: "100%",
  },
}));

export const SignInStyleTitle = styled(Typography)(
  ({ active }: { active?: boolean }) => ({
    color: "#0a1539",
    fontFamily: "cursive",
    marginTop: "28px",

    "& span": {
      fontSize: "20px",
      margin: "17px",
      textDecorationColor: "blue",
    },

    "& span:hover": {
      cursor: "pointer",
      color: "red",
    },
  })
);
export const SignInStyleSubtitle = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "#0a1539",
  width: "80%",
  height: "36px",
  margin: "10px 50px",
  "& span": {
    margin: "10px",
  },
}));

export const SignInWrapperButton = styled(Box)(({ theme }) => ({
  marginTop: "10px",
}));

export const SignInForgotPassword = styled(Box)(({ theme }) => ({
  height: "250px",
  marginTop: "5px",

  "& a": {
    textDecoration: "none",
    color: "#242c43",
    fontSize: "1.2rem",
    fontFamily: "cursive",
  },
}));
