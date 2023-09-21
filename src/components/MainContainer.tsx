import React, { FC, memo } from "react";
import { IMainContainer } from "../types/types";
import ButtonComponent from "./ButtonComponent";
import { MainContainerStyle } from "../layout/styled-component/MainContainer.style";

const MainContainer: FC<IMainContainer> = ({ children, args }) => {
  const { checkVisible } = args || {};

  return (
    <>
      <MainContainerStyle>
        {children}
        {checkVisible ?? (
          <ButtonComponent
            text="Home"
            variant="outlined"
            label="Home"
            {...args}
          />
        )}
      </MainContainerStyle>
    </>
  );
};

export default memo(MainContainer);
