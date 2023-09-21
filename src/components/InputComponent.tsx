import React, { FC, forwardRef, useEffect, useRef } from "react";
import { Box, TextField, TextFieldVariants } from "@mui/material";
import { IInput } from "../types/types";

const InputComponent: FC<IInput> = forwardRef(
  (
    {
      id,
      label,
      variant,
      size,
      value,
      handlerChange,
      color,
      inputRef,
      disabled = false,
      required,
      children,
      register,
      registerField,
      ...args
    },
    ref
  ) => {
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
          required={required}
          inputRef={inputRef}
          {...(register && register(id))}
          onChange={(e) => {
            if (registerField) {
              registerField(e.target.name, e.target.value);
            }
          }}
        >
          {children}
        </TextField>
      </>
    );
  }
);

export default InputComponent;
