import axios, { AxiosResponse } from "axios";
import { IFormData } from "../types/types";

const headersType: object = {
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Private-Network": true,
};

export const URL = "http://roud-map/register";

export const mock_data = {
  name: "SEWEQWEQWE",
  login: "asdqweqweqwe",
  email: "qweqwe@gmail.com",
  password: "123123123123123",
};

export const GENERAL_REQUEST = {
  sendDataForm: function (method: string, data: IFormData, answerFNC: any) {
    return axios({
      method: method,
      url: URL,
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
};
