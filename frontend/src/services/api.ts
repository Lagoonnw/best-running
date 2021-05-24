import axios          from 'axios';
import {BASE_API_URL} from "../constants/constants";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 1000 * 5,
  withCredentials: true,
});

