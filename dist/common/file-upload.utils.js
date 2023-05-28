"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.videoFileFilter = exports.imageFileFilter = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const uid_1 = require("uid");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new common_1.HttpException({ key: 'errors.AVATAR_NOT_VALID' }, common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const videoFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(x-matroska|mov|avi|wmv|flv|3gp|mp4|mpg|ts)$/)) {
        return callback(new common_1.HttpException({ key: 'errors.VIDEO_NOT_VALID' }, common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.videoFileFilter = videoFileFilter;
const editFileName = (req, file, callback) => {
    const randomName = Date.now() + (0, uid_1.uid)(32);
    return callback(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file-upload.utils.js.map