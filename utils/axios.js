// import axios from 'axios';
//
// const axiosServices = axios.create();
//
// // interceptor for http
// axiosServices.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
// );
//
// export default axiosServices;
//

import axios from "axios";
import { ROUTER_LINK } from "@/utils/constants/constant";

//토큰이 불필요한 경우
export const publicApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

//토큰을 함께 보내는 instance
export const privateApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

//리프레시토큰 요청 api
function postRefreshToken() {
  const response = publicApi.post("/api/users/token", {
    refresh: localStorage.getItem("refreshToken"),
  });
  return response;
}

//리프레시 토큰 구현
privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === "INVALID_TOKEN") {
        const originRequest = config;
        try {
          const tokenResponse = await postRefreshToken();
          if (tokenResponse.status === 201 || tokenResponse.status === 200) {
            const newAccessToken = tokenResponse.data.access;
            localStorage.setItem("token", tokenResponse.data.access);
            // localStorage.setItem(
            //   "refreshToken",
            //   tokenResponse.data.refreshToken
            // );
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originRequest);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            if (
              error.response?.status === 401 ||
              error.response?.status === 402 ||
              error.response?.status === 424
            ) {
              alert("LOGIN.MESSAGE.EXPIRED");
              window.location.replace(ROUTER_LINK.IAM_LOGIN);
            } else {
              alert("LOGIN.MESSAGE.ETC");
            }
          }
        }
      }
      // if (error.response.data.message === "Unauthorized") {
      //   const originRequest = config;
      //   try {
      //     const tokenResponse = await postRefreshToken();
      //     if (tokenResponse.status === 201) {
      //       const newAccessToken = tokenResponse.data.token;
      //       localStorage.setItem("token", tokenResponse.data.token);
      //       localStorage.setItem(
      //         "refreshToken",
      //         tokenResponse.data.refreshToken
      //       );
      //       axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      //       originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //       return axios(originRequest);
      //     }
      //   } catch (error) {
      //     if (axios.isAxiosError(error)) {
      //       if (
      //         error.response?.status === 401 ||
      //         error.response?.status === 402 ||
      //         error.response?.status === 424
      //       ) {
      //         alert("LOGIN.MESSAGE.EXPIRED");
      //         window.location.replace(ROUTER_LINK.IAM_LOGIN);
      //       } else {
      //         alert("LOGIN.MESSAGE.ETC");
      //       }
      //     }
      //   }
      // }
    }
    return Promise.reject(error);
  }
);

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;

  return config;
});

export default privateApi;
