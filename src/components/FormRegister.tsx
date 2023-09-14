import React, { useCallback, useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import {
  AvtorizedPage,
  AvtorizedPageBlockContent,
  AvtorizedPageBlockContentForm,
} from "../layout/styled-component/Autorized.style";
import InputComponent from "./InputComponent";

const FormRegister = () => {
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

  return (
    <>
      <Typography>Hello Register</Typography>
      <AvtorizedPage>
        <Box>Hello This is form</Box>
        <AvtorizedPageBlockContent>
          <img src={require("../static/images/aqua.svg").default} alt="AQUA" />
        </AvtorizedPageBlockContent>
        <Box>Hello This is form</Box>
        <Box>Hello This is form</Box>

        <AvtorizedPageBlockContentForm>
          <form action="">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField>qwe</TextField>
                <InputComponent variant="outlined" label="Outlined" id="23" />
              </Grid>
            </Grid>
          </form>
        </AvtorizedPageBlockContentForm>
      </AvtorizedPage>
    </>
  );
};

export default FormRegister;
