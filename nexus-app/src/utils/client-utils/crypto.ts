import CryptoJS from "crypto-js";

const secretKey = process.env.ENCRYPT_SECRET || "";

// Encrypt

export function encryptText(text: string) {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

// Decrypt

export function decryptText(cryptText: string) {
  const bytes = CryptoJS.AES.decrypt(cryptText, secretKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  return decryptText;
}
