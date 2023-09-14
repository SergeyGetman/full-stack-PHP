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
            <form action="">
              <Grid
                container
                columns={2}
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                item
              >
                <Grid xs={12} md={2} lg={2} item>
                  <TextField>qwe</TextField>
                  <InputComponent variant="outlined" label="Outlined" id="23" />
                </Grid>
                <Grid xs={12} md={2} lg={2} item>
                  <TextField>qwe</TextField>
                  <InputComponent variant="outlined" label="Outlined" id="21" />
                </Grid>
                <Grid xs={12} md={2} lg={2} item>
                  <TextField>qwe</TextField>
                  <InputComponent variant="outlined" label="Outlined" id="20" />
                </Grid>
                <Grid xs={12} md={2} lg={2} item>
                  <TextField>qwe</TextField>
                  <InputComponent variant="outlined" label="Outlined" id="20" />
                </Grid>
              </Grid>
            </form>
          </AvtorizedPageBlockContentForm>
        </AvtorizedPageBlockContent>
      </AvtorizedPage>
    </>
  );
};

export default FormRegister;
