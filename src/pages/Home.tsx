import React from "react";
import Box from "@mui/material/Box";
import { HomeContainerStyle } from "../layout/styled-component/HomeContainer.style";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToRegistration = () => {
    navigate("/register");
  };

  const goToLogIn = () => {
    navigate("/login");
  };

  return (
    <>
      <HomeContainerStyle>
        <ButtonComponent
          label="Outlined"
          variant="contained"
          text="registration"
          onClick={goToRegistration}
        />
        <img
          src={require("../static/images/bg-image.svg").default}
          alt="home-logo"
        />
        <Box>
          <ButtonComponent
            label="Standard"
            variant="contained"
            text="Login"
            onClick={goToLogIn}
          />
        </Box>
      </HomeContainerStyle>
    </>
  );
};

export default Home;
