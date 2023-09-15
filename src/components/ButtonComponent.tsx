import React, { FC } from "react";
import { Box, Button } from "@mui/material";
import { MuiButtonProps } from "../types/types";
import { ButtonMuiStyle } from "../layout/styled-component/ButtonMui.styled";

export const ButtonComponent: FC<MuiButtonProps> = ({
  type,
  variant,
  text,
  classNM,
  eventClick,
  children,
}) => {
  return (
    <>
      <ButtonMuiStyle>
        <Button
          type={type}
          variant={variant}
          onClick={eventClick}
          className={classNM}
        >
          {text}
        </Button>
        <Box>{children}</Box>
      </ButtonMuiStyle>
    </>
  );
};

export default ButtonComponent;
