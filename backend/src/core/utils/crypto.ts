import { CRYPTO_ALGORITHM, CRYPTO_KEY } from "./constants";
const crypto = require("crypto");

export const encrypt = (value: string): string => {
  const cipher = crypto.createCipher(CRYPTO_ALGORITHM, CRYPTO_KEY);
  const encryptedPassword =
    cipher.update(value, "utf8", "hex") + cipher.final("hex");

  return encryptedPassword;
};

export const decrypt = (value: string): string => {
  const decipher = crypto.createDecipher(CRYPTO_ALGORITHM, CRYPTO_KEY);
  const decrypted =
    decipher.update(value, "hex", "utf8") + decipher.final("utf8");

  return decrypted;
};
