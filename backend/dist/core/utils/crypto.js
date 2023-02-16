"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const constants_1 = require("./constants");
const crypto = require("crypto");
const encrypt = (value) => {
    const cipher = crypto.createCipher(constants_1.CRYPTO_ALGORITHM, constants_1.CRYPTO_KEY);
    const encryptedPassword = cipher.update(value, "utf8", "hex") + cipher.final("hex");
    return encryptedPassword;
};
exports.encrypt = encrypt;
const decrypt = (value) => {
    const decipher = crypto.createDecipher(constants_1.CRYPTO_ALGORITHM, constants_1.CRYPTO_KEY);
    const decrypted = decipher.update(value, "hex", "utf8") + decipher.final("utf8");
    return decrypted;
};
exports.decrypt = decrypt;
