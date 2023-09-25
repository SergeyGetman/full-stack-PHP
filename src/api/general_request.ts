import axios, { AxiosResponse } from "axios";
import { IFormData } from "../types/types";

const headersType: object = {
  "Content-Type": "application/json",
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
      headers: headersType,
      url: URL,
      data: JSON.stringify(data),
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
