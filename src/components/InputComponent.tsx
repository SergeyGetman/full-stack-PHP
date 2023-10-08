import React, { FC, forwardRef } from "react";
import { TextField } from "@mui/material";
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
          sx={{ ...args.args }}
          {...(register && register(id))}
          onChange={(e) => {
            if (registerField) {
              registerField(e.target.name, e.target.value);
            }
          }}
          {...args}
        >
          {children}
        </TextField>
      </>
    );
  }
);

export default InputComponent;
