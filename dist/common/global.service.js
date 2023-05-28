"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalService = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
const _ = require("lodash");
const fs = require("fs");
const await_to_js_1 = require("await-to-js");
const axios_1 = require("axios");
const global = require('global');
let GlobalService = class GlobalService {
    constructor() {
        this.getServer = () => {
            return _.cloneDeep(global.server);
        };
        this.setServer = (value) => {
            global.server = Object.assign(Object.assign({}, global.server), value);
        };
        this.getUploadVideo = () => {
            return _.cloneDeep(global.UploadVideo);
        };
        this.setUploadVideo = (value) => {
            global.UploadVideo = Object.assign(Object.assign({}, global.UploadVideo), value);
        };
        this.setUploadsById = (id, values) => {
            if (values.hasOwnProperty('bytesReceived'))
                global.uploads[id] = Object.assign(Object.assign({}, values), { updatedAt: moment().valueOf() });
            else
                global.uploads[id] = values;
        };
        this.deleteUploadsById = (id) => {
            delete global.uploads[id];
        };
        this.getUploads = () => {
            return _.cloneDeep(global.uploads);
        };
        this.getRunJobUploadVideo = () => {
            return _.cloneDeep(global.runJobUploadVideo);
        };
        this.setRunJobUploadVideo = (value) => {
            global.runJobUploadVideo = Object.assign(Object.assign({}, global.runJobUploadVideo), value);
        };
        this.addProcessUploadVideo = (value) => {
            global.runJobUploadVideo.processing = global.runJobUploadVideo.processing + ((value === null || value === void 0 ? void 0 : value.processing) || 0);
            global.runJobUploadVideo.processing_converted = global.runJobUploadVideo.processing_converted + ((value === null || value === void 0 ? void 0 : value.processing_converted) || 0);
        };
        this.minusProcessUploadVideo = (value) => {
            global.runJobUploadVideo.processing = global.runJobUploadVideo.processing - ((value === null || value === void 0 ? void 0 : value.processing) || 0);
            global.runJobUploadVideo.processing_converted = global.runJobUploadVideo.processing_converted - ((value === null || value === void 0 ? void 0 : value.processing_converted) || 0);
        };
        this.getCreateFolder = () => {
            return _.cloneDeep(global.CreateFolder);
        };
        this.setCreateFolder = (value) => {
            global.CreateFolder = Object.assign(Object.assign({}, global.CreateFolder), value);
        };
        this.getRunJobCreateFolder = () => {
            return _.cloneDeep(global.runJobCreateFolder);
        };
        this.setRunJobCreateFolder = (value) => {
            global.runJobCreateFolder = Object.assign(Object.assign({}, global.runJobCreateFolder), value);
        };
        this.addProcessCreateFolder = (value) => {
            global.runJobCreateFolder.processing = global.runJobCreateFolder.processing + (value.processing || 0);
        };
        this.minusProcessCreateFolder = (value) => {
            global.runJobCreateFolder.processing = global.runJobCreateFolder.processing - (value.processing || 0);
        };
        this.setSystem = (value) => {
            global.system = value;
        };
        this.getSystem = () => {
            return _.cloneDeep(global.system);
        };
        this.readFileAsSync = async (pathFile) => {
            return await new Promise((resolve, reject) => {
                fs.readFile(pathFile, (err, data) => {
                    if (err)
                        reject(err);
                    resolve(data);
                });
            });
        };
        this.createFolderOneDrive = async (folder, fileName, token) => {
            let err, res;
            do {
                [err, res] = await axios_1.default.post(`https://graph.microsoft.com/v1.0/me/drive/root:/${folder}:/children`, {
                    name: fileName,
                    folder: {},
                    '@microsoft.graph.conflictBehavior': 'replace',
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } while (err);
        };
        this.uploadSmallFileOneDrive = async (pathFolder, pathFile, token) => {
            var _a, _b;
            let err, res;
            do {
                [err, res] = await (0, await_to_js_1.default)(axios_1.default.put(`https://graph.microsoft.com/v1.0/me/drive/root:/${pathFolder}:/content`, await fs.promises.readFile(pathFile), {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }));
            } while (err || !((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.webUrl));
            return (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.webUrl;
        };
        this.uploadLargeFileOneDrive = async (pathFolder, pathFile, token) => {
            var _a, _b, _c;
            const uploadUrl = await this.createUploadSessionOneDrive(pathFolder, token);
            const totalSize = (await fs.promises.stat(pathFile)).size;
            let start = 0;
            let end = 0;
            let err_1 = null;
            let res_1 = null;
            do {
                const [err, res] = await (0, await_to_js_1.default)(axios_1.default.get(uploadUrl));
                if (err)
                    continue;
                const nextExpectedRanges = (_c = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.nextExpectedRanges) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.split('-');
                start = +((nextExpectedRanges === null || nextExpectedRanges === void 0 ? void 0 : nextExpectedRanges[0]) || 0);
                end = Math.min(+((nextExpectedRanges === null || nextExpectedRanges === void 0 ? void 0 : nextExpectedRanges[1]) || 0) || (start + 4000000), totalSize - 1);
                [err_1, res_1] = await (0, await_to_js_1.default)(axios_1.default.put(uploadUrl, fs.createReadStream(pathFile, { start, end }), {
                    headers: {
                        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
                        'Content-Length': `${end - start + 1}`,
                    },
                    maxContentLength: Infinity,
                    maxBodyLength: Infinity,
                }));
            } while ((res_1 === null || res_1 === void 0 ? void 0 : res_1.status) !== 201 && (res_1 === null || res_1 === void 0 ? void 0 : res_1.status) !== 200);
        };
        this.createUploadSessionOneDrive = async (pathFolder, token) => {
            var _a, _b;
            let err, res;
            do {
                [err, res] = await (0, await_to_js_1.default)(axios_1.default.post(`https://graph.microsoft.com/v1.0/me/drive/root:/${pathFolder}:/createUploadSession`, {
                    item: {
                        '@microsoft.graph.conflictBehavior': 'replace',
                    },
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }));
            } while (err || !((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.uploadUrl));
            return (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.uploadUrl;
        };
        this.shareLinkOneDrive = async (pathFolder, token) => {
            var _a, _b, _c, _d;
            let err, res;
            do {
                [err, res] = await (0, await_to_js_1.default)(axios_1.default.post(`https://graph.microsoft.com/v1.0/me/drive/root:/${pathFolder}:/createLink`, {
                    type: 'view',
                    scope: 'anonymous',
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }));
            } while (err || !((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.webUrl));
            return (_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.link) === null || _d === void 0 ? void 0 : _d.webUrl;
        };
        this.deleteSessionOneDrive = async (url, token) => {
            let err, res;
            do {
                [err, res] = await axios_1.default.delete(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } while (err);
        };
        this.deleteFileOneDrive = async (pathFolder, token) => {
            let err, res;
            do {
                [err, res] = await axios_1.default.delete(`https://graph.microsoft.com/v1.0/me/drive/root:/${pathFolder}:/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } while (err);
        };
        this.deleteFile = async (path = '', fileNames = []) => {
            try {
                if (path)
                    await fs.promises.unlink(path);
                for (const it of fileNames) {
                    await fs.promises.unlink(it);
                }
            }
            catch (err) { }
        };
        global.runJobUploadVideo = { processing: 0, processing_converted: 0 };
        global.system = {
            freeMem: 0,
            totalMem: 0,
            freeDisk: 0,
            totalDisk: 0,
        };
        global.uploads = {};
        global.UploadVideo = { count: 0, count_converted: 0 };
        global.server = {
            SERVER_URL: process.env.SERVER_URL,
            SERVER_REDIRECT_URL: process.env.SERVER_REDIRECT_URL,
        };
        global.CreateFolder = { count: 0 };
        global.runJobCreateFolder = { processing: 0 };
    }
};
GlobalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GlobalService);
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map