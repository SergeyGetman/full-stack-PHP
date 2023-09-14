import { ReactComponentElement } from "react";

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
type IButtonVariant = "outlined" | "contained" | "text";

export interface IButton {
  type?: IButtonEvent;
  text: string;
  variant: IButtonVariant;
  eventClick: () => void;
}
