import React, { useCallback, useRef } from "react";
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

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      login: "",
      name: "",
      email: "",
      password: "",
    },
  });

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

  const ref = useRef(null);

  const sendTestData = useCallback(() => {
    fetch("http://roud-map", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ action: 1 }),
    })
      .then((r) => r.json())
      .then((data) => console.log("RESPONSE", data));
  }, []);

  const onSubmitForm = (data: IFormData) => console.log(data);

  const restParam = {
    additionalParam1: "value1",
    additionalParam2: "value2",
  };

  return (
    <>
      <AvtorizedPage>
        <AvtorizedPageBlockContent>
          <img src={require("../static/images/aqua.svg").default} alt="AQUA" />

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
                      <TextField
                        label="Standard"
                        variant="outlined"
                        id="20"
                        {...register("name")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input defaultValue="login" {...register("login")} />
                      {
                        <InputComponent
                          variant="outlined"
                          label="Standard"
                          id="name"
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
                        label="Standard"
                        id="email"
                        register={register}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputComponent
                        variant="outlined"
                        label="Standard"
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
    </>
  );
};

export default FormRegister;
