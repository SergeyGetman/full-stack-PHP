import axios, { AxiosResponse } from "axios";
import { IFormData } from "../types/types";

const headersType: object = {
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Private-Network": true,
};

export const URL_FOR_REGISTER = "http://roud-map/register";
export const URL_FOR_LOGIN = "http://roud-map/login";

export const METHOD = {
  post: "POST",
  get: "GET",
};

export const mock_data = {
  name: "SEWEQWEQWE",
  login: "asdqweqweqwe",
  email: "qweqwe@gmail.com",
  password: "123123123123123",
};

export const GENERAL_REQUEST = {
  sendDataFormRegister: function (
    method: string,
    data: IFormData,
    answerFNC: any
  ) {
    return axios({
      method: method,
      url: URL_FOR_REGISTER,
      data: data,
    })
      .then((res: AxiosResponse) => {
        answerFNC(res);
        console.log("this is RES", res);
        const responseData = res.data;
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
