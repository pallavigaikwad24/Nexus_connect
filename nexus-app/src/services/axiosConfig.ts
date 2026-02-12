"use client";

import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (config.data instanceof FormData) {
//       delete config.headers["Content-Type"];
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error: any) => {
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
