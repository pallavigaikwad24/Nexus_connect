"use server";

import { cookies } from "next/headers";

export const setCookies = async (key: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
};
export const getCookie = async (key: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
};

export const clearAllCookies = async () => {
  const cookieStore = await cookies();

  cookieStore.getAll().forEach((cookie) => {
    cookieStore.delete(cookie.name);
  });
};
