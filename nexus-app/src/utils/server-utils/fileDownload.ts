export async function downloadHandler(fileUrl: string, fileName: string) {
  if (!fileUrl || !fileName) {
    throw new Error("Missing file information!");
  }

  // Fetch file from Cloudinary
  const response = await fetch(fileUrl);

  if (!response.ok) {
    throw new Error("Failed to download file!");
  }

  const buffer = await response.arrayBuffer();

  const blob = new Blob([buffer], {
    type: response.headers.get("content-type") ?? "application/octet-stream",
  });

  const objectUrl = URL.createObjectURL(blob);

  return objectUrl;
}
