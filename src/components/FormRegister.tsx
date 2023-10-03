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

  console.log("checkStatus", checkStatus);

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
                  color: "#2b392fe6",
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
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {
                          <InputComponent
                            variant="outlined"
                            label="login"
                            id="login"
                            name="login"
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
                          name="email"
                          register={register}
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
