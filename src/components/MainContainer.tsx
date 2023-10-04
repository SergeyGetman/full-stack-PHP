import React, { FC, memo } from "react";
import { IMainContainer } from "../types/types";
import ButtonComponent from "./ButtonComponent";
import {
  MainContainerBTNStyle,
  MainContainerStyle,
} from "../layout/styled-component/MainContainer.style";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

const MainContainer: FC<IMainContainer> = ({ children, args }) => {
  const { checkVisible } = args || {};
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <MainContainerStyle>
        {children}
        {checkVisible ?? (
          <>
            <HeaderComponent />
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
