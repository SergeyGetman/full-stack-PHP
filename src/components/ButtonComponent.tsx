import React, { FC } from "react";
import { Box, Button } from "@mui/material";
import { IButton } from "../types/types";

export const ButtonComponent: FC<IButton> = ({
  type,
  variant,
  text,
  classNM,
  eventClick,
  children,
}) => {
  return (
    <>
      <Button
        type={type}
        variant={variant}
        onClick={eventClick}
        className={classNM}
      >
        {text}
      </Button>
      <Box>{children}</Box>
    </>
  );
};

export default ButtonComponent;
