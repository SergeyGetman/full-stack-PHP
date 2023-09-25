import React from "react";
import Box from "@mui/material/Box";
import {
  HomeButtonNavigateStyle,
  HomeContainerStyle,
} from "../layout/styled-component/HomeContainer.style";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";

const Home = () => {
  const navigate = useNavigate();
  const goToRegistration = () => {
    navigate("/login");
  };

  const goToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <MainContainer args={{ checkVisible: false }}>
        <HomeContainerStyle>
          <ButtonComponent
            label="Outlined"
            variant="outlined"
            text="go to registration"
            onClick={goToRegistration}
          />
          <img
            src={require("../static/images/bg-image.svg").default}
            alt="home-logo"
          />
          <Box>
            <ButtonComponent
              label="Standard"
              variant="outlined"
              text="Sign In"
              onClick={goToSignIn}
              classNM={<HomeButtonNavigateStyle />}
            />
            <ButtonComponent
              label="Outlined"
              variant="outlined"
              text="Sign Up"
              eventClick={goToRegistration}
            />
          </Box>
        </HomeContainerStyle>
      </MainContainer>
    </>
  );
};

export default Home;
