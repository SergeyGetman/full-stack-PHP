import React, { ReactNode } from "react";
import MainContainer from "./MainContainer";
import { Box, Checkbox, Grid } from "@mui/material";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import {
  SignInForgotPassword,
  SignInStyle,
  SignInStyleAllFormBlock,
  SignInStyleSubtitle,
  SignInStyleTitle,
  SignInWrapperButton,
} from "../layout/styled-component/SignIn.style";
import NavigateComponent from "./NavigateComponent";
import TextComponent from "./TextComponent";
import AvtorizedGoogle from "./AvtorizedGoogle";
import { Link } from "react-router-dom";

const SignIn = () => {
  const formSignIn = (arrayComponents: ReactNode) => {
    const objForRender = [{ variant: "filled" }];
  };

  const classesCustom = { width: "80%" };

  return (
    <>
      <MainContainer>
        <SignInStyle>
          <SignInStyleAllFormBlock>
            <SignInStyleTitle>
              <span>ENTER</span>
              <span>REGISTRATION</span>
            </SignInStyleTitle>

            <>
              <form action="">
                <Grid container={true} spacing={1} item>
                  <Grid xs={2} md={5} lg={12} item>
                    <InputComponent
                      variant="filled"
                      label="email"
                      id="email"
                      name="email"
                      args={classesCustom}
                      required
                    />
                  </Grid>
                  <Grid xs={2} md={5} lg={12} item>
                    <InputComponent
                      variant="filled"
                      label="login"
                      id="login"
                      name="login"
                      args={classesCustom}
                      required
                    />
                  </Grid>
                </Grid>
                <SignInStyleSubtitle>
                  <Checkbox />
                  <span>remember me </span>
                </SignInStyleSubtitle>
                <SignInWrapperButton>
                  <ButtonComponent
                    variant="contained"
                    label="Filled"
                    color="success"
                    type="submit"
                    text="SUBMIT"
                    sx={classesCustom}
                  />
                </SignInWrapperButton>
                <SignInForgotPassword>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                  <AvtorizedGoogle text="avtorized with Google " />
                </SignInForgotPassword>
              </form>
            </>
          </SignInStyleAllFormBlock>
        </SignInStyle>
      </MainContainer>
    </>
  );
};

export default SignIn;
