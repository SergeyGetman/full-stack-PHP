import React from "react";
import Box from "@mui/material/Box";
import {
  HomeButtonNavigateStyle,
  HomeContainerStyle,
  LegionImg,
} from "../layout/styled-component/HomeContainer.style";
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
        <HomeButtonNavigateStyle>
          <ButtonComponent
            label="Outlined"
            variant="contained"
            text="registration"
            onClick={goToRegistration}
          />
          <ButtonComponent
            label="Standard"
            variant="contained"
            text="Login"
            onClick={goToLogIn}
          />
        </HomeButtonNavigateStyle>

        <img
          src={require("../static/images/bg-fon.svg").default}
          alt="home-logo"
        />
        <LegionImg />
      </HomeContainerStyle>
    </>
  );
};

export default Home;
