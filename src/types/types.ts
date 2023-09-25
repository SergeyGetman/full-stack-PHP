import React, { ReactComponentElement, ReactNode, ReactPropTypes } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import InputComponent from "../components/InputComponent";
import { PropTypes, TextFieldVariants, TypographyProps } from "@mui/material";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

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

type ILabel = "Outlined" | "Filled" | "Standard" | string;
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

type ITypeRegister<T extends FieldValues> = UseFormRegister<T>;

export interface IInput {
  id: string;
  name?: string;
  label: ILabel;
  variant: TextFieldVariants;
  icon?: IIcon | React.ReactNode;
  size?: ISizes;
  color?: IColor;
  value?: EventTarget | string | number;
  handlerChange?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  required?: boolean;
  inputRef?: React.Ref<any>;
  register?: ITypeRegister<any> | undefined;
  errors?: UseFormRegisterReturn<string>;
  registerField?: (fieldName: string, value: any) => void;
  args?: any | any[];
}
export type MuiButtonProps = {
  variant?: IVariantBTN;
  size?: ISizes;
  color?: IColor;
  isDisabled?: boolean;
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label: ILabel;
  type?: IButtonEvent;
  isStopPropagation?: boolean;
  fullWidth?: boolean;
  currentRoute?: string;
  onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
  [x: string]: any;
};

export type IFormData = {
  name: string;
  email: string;
  login: string;
  password: string;
  answerFNC?: () => {} | void;
};

export interface IMainContainer {
  children: ReactNode;
  args?: Record<keyof ReactPropTypes, React.FC> | Record<string, any>;
}
export interface IMainContent {
  children: ReactNode;
}
