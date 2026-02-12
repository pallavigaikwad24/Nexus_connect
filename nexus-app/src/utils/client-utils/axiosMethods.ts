"use client";

import axiosInstance from "@/services/axiosConfig";

export async function axiosGet(path: string, params: Record<string, any>) {
  const response = await axiosInstance.get(path, params);
  return response.data;
}

export async function axiosPost(path: string, payload: any) {
  try {
    const result = await axiosInstance.post(path, {
      mobile: payload.mobile,
      countryCode: payload.countryCode,
      OTP: payload.OTP,
    });
    return result.data;
  } catch (error: any) {
    console.log("Error 18::", error);
    if (error.status == 401) {
      return { message: error.response.data.error };
    }
  }
}
