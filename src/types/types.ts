import React, { ReactComponentElement, ReactNode, ReactPropTypes } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import InputComponent from "../components/InputComponent";
import { TextFieldVariants, TypographyProps } from "@mui/material";

export interface INavigate {
  path: string;
  element: ReactComponentElement<any>;
}

export interface IInitialFormState {
  name: string;
  login: string;
  email: string;
  password: string;
}

type IButtonEvent = "submit" | "button" | "reset" | undefined;
type IVariantBTN = "contained" | "outlined" | "text" | undefined;
type KnownTags = keyof JSX.IntrinsicElements | undefined | ReactJSXElement;

export interface IButton {
  type?: IButtonEvent;
  text: string;
  variant: IVariantBTN;
  classNM?: KnownTags | any;
  eventClick: () => void;
  children?: ReactNode;
}

//id, label, variant, icons, size, value, handlerChange

type ILabel = "Outlined" | "Filled" | "Standard";
type ISizes = "small" | "medium" | undefined;
type IIcon = "inherit" | "large" | "medium" | "small " | string;
type IColor =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;

export interface IInput {
  id: string;
  label: ILabel;
  variant: TextFieldVariants;
  icon?: IIcon | React.ReactNode;
  size?: ISizes;
  color?: IColor;
  value?: EventTarget | string | number;
  handlerChange?: () => void;
  disabled?: boolean;
}

export type MuiButtonProps = {
  variant?: "outlined" | "contained" | "tertiary" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error";
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label: string;
  type?: "button" | "reset" | "submit";
  isStopPropagation?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  [x: string]: any;
};
