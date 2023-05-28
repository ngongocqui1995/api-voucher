"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const initVector = '256cbcaes256cbca';
const securityKey = 'cbcaes256cbcaes256cbcaes256cbcae';
function encrypt(message) {
    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    let encryptedData = cipher.update(message, 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}
exports.encrypt = encrypt;
function decrypt(encryptedData) {
    try {
        const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        return decryptedData;
    }
    catch (err) { }
    return '';
}
exports.decrypt = decrypt;
//# sourceMappingURL=index.js.map