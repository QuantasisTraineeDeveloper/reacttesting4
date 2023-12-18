import axios from "axios";
import { basePath } from "./constants";

const apiService = axios.create();
apiService.defaults.baseURL = basePath;
apiService.defaults.timeout = 35000;

apiService.interceptors.request.use(
  async (config) => {
    const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
    const token = authUser?.token;
    config.headers = {
      Authorization: token ? "Bearer " + token : null,
      Accept: "application/json, text/plain, */*",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "*",
      "access-control-allow-origin": "*",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export const fetchService = async (reqURL, reqType, reqBody) => {
//   const authUser = JSON.parse(localStorage.getItem("authUser"));
//   const token = authUser?.token;

//   return await fetch(basePath + reqURL, {
//     method: reqType,
//     headers: {
//       token: token ?? "",
//       Accept: "application/json, text/plain, */*",
//       "Access-Control-Allow-Origin": "*",
//       "access-control-allow-headers": "*",
//       "access-control-allow-methods": "*",
//       "access-control-allow-origin": "*",
//     },
//     body: reqBody,
//   })
//     .then((res) => res)
//     .catch((e) => e);
// };

export default apiService;
