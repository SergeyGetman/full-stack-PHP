import React, { FC, memo } from "react";
import { IMainContainer } from "../types/types";
import ButtonComponent from "./ButtonComponent";
import {
  MainContainerBTNStyle,
  MainContainerStyle,
} from "../layout/styled-component/MainContainer.style";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterContent from "./FooterContent";

const MainContainer: FC<IMainContainer> = ({ children }, ...args) => {
  console.log("this is ARGS", args);

  const { checkVisible }: any = args || {};

  console.log("checkVisible", checkVisible);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <MainContainerStyle>
        <HeaderComponent />

        {children}
        <FooterContent />
        {checkVisible ?? (
          <>
            <MainContainerBTNStyle>
              <ButtonComponent
                text="Home"
                variant="outlined"
                label="Home"
                onClick={handleHome}
                {...args}
              />
            </MainContainerBTNStyle>
          </>
        )}
      </MainContainerStyle>
    </>
  );
};

export default memo(MainContainer);
