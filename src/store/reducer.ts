import { createSlice } from "@reduxjs/toolkit";
import { IInitialFormState } from "../types/types";

export const initialFormState: IInitialFormState = {
  name: "",
  login: "",
  email: "",
  password: "",
};

export const checkFormRegisterSlice = createSlice({
  name: "formData",
  initialState: initialFormState,

  reducers: {
    checkDataForm(state, action) {
      console.log("state", { ...state });
      console.log("action", action.payload);
    },
  },
});

export default checkFormRegisterSlice.reducer;
export const { checkDataForm } = checkFormRegisterSlice.actions;
