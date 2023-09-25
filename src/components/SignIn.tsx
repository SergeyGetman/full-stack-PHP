import React from "react";
import MainContainer from "./MainContainer";
import { Grid } from "@mui/material";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

const SignIn = () => {
  return (
    <>
      <MainContainer>
        <div>Hello Register</div>
        <>
          <form action="">
            <Grid container={true} spacing={1} item>
              <Grid xs={2} md={5} lg={12} item>
                <InputComponent
                  variant="filled"
                  label="email"
                  id="email"
                  name="email"
                  required
                />
              </Grid>
              <Grid xs={2} md={5} lg={12} item>
                <InputComponent
                  variant="filled"
                  label="login"
                  id="login"
                  name="login"
                  required
                />
              </Grid>
            </Grid>
            <ButtonComponent
              variant="contained"
              label="Filled"
              color="success"
              type="submit"
              text="SUBMIT"
            />
          </form>
        </>
      </MainContainer>
    </>
  );
};

export default SignIn;
