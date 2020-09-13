import axios          from 'axios';
import {BASE_API_URL, ResponseStatus} from "../constants/constants";

//
//
// export const createAPI = () => {
//   const api = axios.create({
//     baseURL: BASE_API_URL,
//     timeout: 1000 * 5,
//     withCredentials: true,
//   });
//
//   // const onSuccess = (response: any) => response;
//   //
//   // const onFail = (err: any) => {
//   //
//   //   return err;
//   // };
//   //
//   // api.interceptors.response.use(onSuccess, onFail);
//
//   return api;
// };

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 1000 * 5,
  withCredentials: true,
});

