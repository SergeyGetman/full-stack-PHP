import React, { FC } from "react";
import { Button } from "@mui/material";
import { IButton } from "../types/types";

export const ButtonComponent: FC<IButton> = ({
  type,
  variant,
  text,
  eventClick,
}) => {
  return (
    <>
      <Button type={type} variant={variant} onClick={eventClick}>
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
