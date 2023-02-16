import { BASE_API_URI } from "../constants/API";
import axios from "axios";

axios.defaults.baseURL = BASE_API_URI;
axios.defaults.headers.post["Content-Type"] = "application/json";

export const http = {
  isCancel: function (error: any) {
    return axios.isCancel(error);
  },
  setToken(token: string) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  get: (url: string, params: any) => {
    return axios.get(url, { params: { ...params } });
  },
  post: (url: string, data: any) => {
    return axios.post(url, data);
  },
  delete: (url: string, params: any) => {
    return axios.delete(url, { params: { ...params } });
  },
  put: (url: string, data: any) => {
    return axios.put(url, data);
  },
  patch: (url: string, data: any) => {
    return axios.patch(url, data);
  },
};
