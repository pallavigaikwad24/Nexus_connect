import { clearAllCookies } from "./server-utils/cookie";

export default async function logout() {
  localStorage.clear();
  await clearAllCookies();
  window.location.href = "/login";
}
