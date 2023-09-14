import React, { FC } from "react";
import { Box, TextField, TextFieldVariants } from "@mui/material";
import { IInput } from "../types/types";

const InputComponent: FC<IInput> = ({
  id,
  label,
  variant,
  size,
  value,
  handlerChange,
  color,
  disabled = false,
  ...args
}) => {
  return (
    <>
      <TextField
        id={id}
        label={label}
        variant={variant}
        size={size}
        value={value}
        color={color}
        disabled={disabled}
        onChange={handlerChange}
      />
    </>
  );
};

export default InputComponent;
