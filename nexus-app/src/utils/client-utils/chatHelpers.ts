/**
 * Downloads a file from the given URL and triggers a download in the browser.
 * @param url
 * @param filename
 */

import { downloadHandler } from "../server-utils/fileDownload";

export const downloadFile = async (url: string, filename: string) => {
  const downloadUrl = await downloadHandler(url, encodeURIComponent(filename));
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function formatFileSize(bytes: number): string {
  if (!bytes || bytes <= 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  const k = 1024;

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = bytes / Math.pow(k, i);

  return `${size.toFixed(2)} ${units[i]}`;
}

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const handleDateTime = (date: string | Date): string => {
  const time = new Date(date);
  const now = new Date();
  const diff = now.getTime() - time.getTime();
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const todayTime = time.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return todayTime;
  } else if (diffDays === 1) {
    return "Yesterday";
  } else {
    return time.toLocaleDateString();
  }
};

export const handleTime = (date: string): string => {
  const time = new Date(date);
  const todayTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return todayTime;
};
