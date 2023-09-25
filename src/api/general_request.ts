import axios, { AxiosResponse } from "axios";
import { IFormData } from "../types/types";

const headersType: object = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export const mock_data = {
  name: "SEWEQWEQWE",
  login: "asdqweqweqwe",
  email: "qweqwe@gmail.com",
  password: "123123123123123",
};

// export const GENERAL_REQUEST = {
//   sendDataForm: function sendPostData(
//     method: string,
//     url: string,
//     data: IFormData
//   ) {
//     return axios({
//       method: method,
//       headers: headersType,
//       url: url,
//       data: JSON.stringify(data),
//     })
//       .then((res: AxiosResponse) => {
//         const responseData = res.data;
//         console.log("RRRR", responseData);
//       })
//       .catch((err) => console.log("ERRRR", err));
//   },
// };
