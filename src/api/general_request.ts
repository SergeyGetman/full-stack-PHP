import axios, { AxiosResponse } from "axios";
import { IFormData } from "../types/types";
import { URL_FOR_LOGIN, URL_FOR_REGISTER } from "./general_url";
import UseNavigatePath from "../hooks/useNavigatePath";

const headersType: object = {
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Private-Network": true,
};

export const METHOD = {
  post: "POST",
  get: "GET",
};

axios.interceptors.response.use(
  function (response) {
    switch (response.status) {
      case 200: {
        break;
      }
    }
    console.log("Successful response:", response);

    return response;
  },
  function (error) {
    switch (error.status) {
      case 500: {
      }
    }
    console.error("Error response:", error);

    return Promise.reject(error);
  }
);

export const GENERAL_REQUEST = {
  sendDataFormRegister: async function (
    method: string,
    data: IFormData,
    answerFNC: any
  ) {
    await axios({
      method: method,
      url: URL_FOR_REGISTER,
      data: data,
    })
      .then((res: AxiosResponse) => {
        answerFNC(res);
        console.log("this is RES", res);

        const responseData = res.data;
        localStorage.setItem("responseData", JSON.stringify(responseData));
        console.log("responseData", responseData);
      })
      .catch((err) => console.error("error", err));
  },

  sendDataFormSignIn: function (dataFormSignIn: any, method: string) {
    return axios({
      method: method,
      url: URL_FOR_LOGIN,
      data: dataFormSignIn,
    })
      .then((res: AxiosResponse) => {
        console.log("res", res);
        const responseData = res.data;
        console.log("responseData", responseData);
      })
      .catch((err) => console.error("error", err));
  },
};
