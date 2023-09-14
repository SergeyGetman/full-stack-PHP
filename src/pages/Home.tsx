import React from "react";
import Box from "@mui/material/Box";
import {
  HomeButtonNavigateStyle,
  HomeContainerStyle,
} from "../layout/styled-component/HomeContainer.style";
import ButtonComponent from "../components/ButtonComponent";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToRegistration = () => {
    navigate("/login");
  };

  return (
    <>
      <HomeContainerStyle>
        <ButtonComponent
          variant="outlined"
          text="go to registration"
          eventClick={() => alert("ssss")}
        />
        <img
          src={require("../static/images/bg-image.svg").default}
          alt="home-logo"
        />
        <Box>
          <ButtonComponent
            variant="outlined"
            text="Sign In"
            eventClick={goToRegistration}
            classNM={<HomeButtonNavigateStyle />}
          />
          <ButtonComponent
            variant="outlined"
            text="Sign Up"
            eventClick={goToRegistration}
          />
        </Box>
      </HomeContainerStyle>
    </>
  );
};

export default Home;
