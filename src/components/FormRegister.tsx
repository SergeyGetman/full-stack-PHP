import React, { useCallback, useEffect, useRef } from "react";
import { Grid, OutlinedInput, TextField, Typography } from "@mui/material";
import {
  AvtorizedPage,
  AvtorizedPageBlockContent,
  AvtorizedPageBlockContentForm,
} from "../layout/styled-component/Autorized.style";
import ButtonComponent from "./ButtonComponent";
import { useForm } from "react-hook-form";
import { IFormData, IInput } from "../types/types";
import InputComponent from "./InputComponent";
import MainContainer from "./MainContainer";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,

    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      login: "",
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const [logOne, logTwo, logThree, logFour] = watch([
    "login",
    "name",
    "email",
    "password",
  ]);

  // console.log("logOne", logOne);
  // console.log("logTwo", logTwo);
  // console.log("logThree", logThree);
  // console.log("logFour", logFour);

  const refTab = useRef(null);

  const sendTestData = useCallback((data: IFormData) => {
    console.log("DATA INSIDE CALLBACK", data);
    fetch("http://roud-map/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //@ts-ignore
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => console.log("RESPONSE", data));
  }, []);

  const onSubmitForm = (data: IFormData) => {
    sendTestData(data);
    console.log("DATA", data);
  };

  return (
    <>
      <MainContainer>
        <AvtorizedPage>
          <AvtorizedPageBlockContent>
            <img
              src={require("../static/images/aqua.svg").default}
              alt="AQUA"
            />

            <AvtorizedPageBlockContentForm>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "cursive",
                  color: "#2b392fe6",
                  textAlign: "center",
                }}
              >
                Registration
              </Typography>
              <form action="" onSubmit={handleSubmit(onSubmitForm)}>
                <Grid container spacing={1} columnSpacing={2} rowSpacing={12}>
                  <Grid item xs={6} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="name"
                          id="name"
                          register={register}
                          inputRef={refTab}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {
                          <InputComponent
                            variant="outlined"
                            label="login"
                            id="login"
                            register={register}
                            required
                          />
                        }
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="email"
                          id="email"
                          register={register}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="password"
                          id="password"
                          register={register}
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <ButtonComponent
                  variant="outlined"
                  label="Filled"
                  color="success"
                  type="submit"
                  text="SUBMIT"
                >
                  SUBMIT
                </ButtonComponent>
              </form>
            </AvtorizedPageBlockContentForm>
          </AvtorizedPageBlockContent>
        </AvtorizedPage>
      </MainContainer>
    </>
  );
};

export default FormRegister;
