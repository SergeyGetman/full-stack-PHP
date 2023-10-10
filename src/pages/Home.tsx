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

  const sizeRiverWidth = {
    width: "200px",
  };

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
            size="medium"
            text="registration"
            classNM={sizeRiverWidth}
            onClick={goToRegistration}
          />
          <ButtonComponent
            label="Standard"
            variant="contained"
            size="medium"
            text="Login"
            classNM={sizeRiverWidth}
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
