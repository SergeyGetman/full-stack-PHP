import React, { ReactElement, useState } from "react";
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
import AvtorizedGoogle from "./AvtorizedGoogle";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GENERAL_REQUEST, METHOD } from "../api/general_request";

const SignIn = ({ typeLoad }: { typeLoad?: string }): ReactElement => {
  const [changeFormCountInput, setChangeFormCountInput] =
    useState<boolean>(false);
  console.log("changeFormCountInput", changeFormCountInput);

  const { handleSubmit, register, reset, setValue, setError } = useForm();

  const classesCustom = { width: "80%" };

  const onsubmitFormLogin = (dataForm: any) => {
    GENERAL_REQUEST.sendDataFormSignIn(dataForm, METHOD.post);
    console.log("dataForm", dataForm);
  };

  function changeType(word: string) {
    return word === "signin"
      ? setChangeFormCountInput(true)
      : setChangeFormCountInput(false);
  }

  return (
    <>
      <MainContainer>
        <SignInStyle>
          <SignInStyleAllFormBlock>
            <SignInStyleTitle>
              <span onClick={() => changeType("signin")}>ENTER</span>
              <span onClick={() => changeType("registration")}>
                REGISTRATION
              </span>
            </SignInStyleTitle>

            <>
              <form action="" onSubmit={handleSubmit(onsubmitFormLogin)}>
                <Grid container={true} spacing={1} item>
                  {changeFormCountInput ? (
                    <>
                      <Grid xs={2} md={5} lg={12} item>
                        <InputComponent
                          variant="filled"
                          label="login"
                          id="login"
                          name="login"
                          args={classesCustom}
                          register={register}
                          required
                        />
                      </Grid>
                      <Grid xs={2} md={5} lg={12} item>
                        <InputComponent
                          variant="filled"
                          label="password"
                          id="password"
                          name="password"
                          args={classesCustom}
                          register={register}
                          required
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid xs={2} md={5} lg={12} item>
                        <InputComponent
                          variant="filled"
                          label="login"
                          id="login"
                          name="login"
                          args={classesCustom}
                          register={register}
                          required
                        />
                      </Grid>
                      <Grid xs={2} md={5} lg={12} item>
                        <InputComponent
                          variant="filled"
                          label="password"
                          id="password"
                          name="password"
                          args={classesCustom}
                          register={register}
                          required
                        />
                        <InputComponent
                          variant="filled"
                          label="password"
                          id="password"
                          name="password"
                          args={classesCustom}
                          register={register}
                          required
                        />
                        <InputComponent
                          variant="filled"
                          label="password"
                          id="password"
                          name="password"
                          args={classesCustom}
                          register={register}
                          required
                        />
                      </Grid>
                    </>
                  )}

                  {/*<Grid xs={2} md={5} lg={12} item>*/}
                  {/*  <InputComponent*/}
                  {/*    variant="filled"*/}
                  {/*    label="login"*/}
                  {/*    id="login"*/}
                  {/*    name="login"*/}
                  {/*    args={classesCustom}*/}
                  {/*    register={register}*/}
                  {/*    required*/}
                  {/*  />*/}
                  {/*</Grid>*/}
                  {/*<Grid xs={2} md={5} lg={12} item>*/}
                  {/*  <InputComponent*/}
                  {/*    variant="filled"*/}
                  {/*    label="password"*/}
                  {/*    id="password"*/}
                  {/*    name="password"*/}
                  {/*    args={classesCustom}*/}
                  {/*    register={register}*/}
                  {/*    required*/}
                  {/*  />*/}
                  {/*</Grid>*/}
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
