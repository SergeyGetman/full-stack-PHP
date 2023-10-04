import React, { useCallback, useEffect, useRef, useState } from "react";
import { Grid, OutlinedInput, TextField, Typography } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { GENERAL_REQUEST, METHOD } from "../api/general_request";
import { useSelector } from "react-redux";

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

  const [checkStatus, setCheckStatus] = useState({ status: "" });
  const notify = () => toast("Register Sussefully");

  const [watchName, watchLogin, watchEmail, watchPassword] = watch([
    "name",
    "login",
    "email",
    "password",
  ]);

  const styleForInput = {
    boxShadow:
      !!watchName || !!watchLogin || !watchEmail || !watchPassword
        ? "inset 6px 4px 3px 1px black"
        : "inset 4px 3px 2px 1px red",
  };

  const st = useSelector((state) => console.log("state", state));
  console.log(st);

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const refTab = useRef(null);

  function onSubmitForm(data: IFormData) {
    GENERAL_REQUEST.sendDataFormRegister(METHOD.post, data, setCheckStatus);
  }

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
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Registration
              </Typography>
              {!!checkStatus?.status && notify() && <ToastContainer />}
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <Grid container spacing={1} columnSpacing={2} rowSpacing={12}>
                  <Grid item xs={6} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="name"
                          id="name"
                          name="name"
                          register={register}
                          inputRef={refTab}
                          args={styleForInput}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="login"
                          id="login"
                          name="login"
                          register={register}
                          args={styleForInput}
                          required
                        />
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
                          name="email"
                          register={register}
                          args={styleForInput}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputComponent
                          variant="outlined"
                          label="password"
                          id="password"
                          name="password"
                          register={register}
                          args={styleForInput}
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <ButtonComponent
                  variant="contained"
                  label="Filled"
                  color="primary"
                  type="submit"
                  text="SUBMIT"
                />
              </form>
            </AvtorizedPageBlockContentForm>
          </AvtorizedPageBlockContent>
        </AvtorizedPage>
      </MainContainer>
    </>
  );
};

export default FormRegister;
