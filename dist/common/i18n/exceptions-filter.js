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
exports.AllExceptionsFilter = void 0;
const nestjs_i18n_1 = require("nestjs-i18n");
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(i18n) {
        this.i18n = i18n;
    }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception.getStatus();
        let message = exception.getResponse();
        if (message.key) {
            message = await this.i18n.translate(message.key, {
                lang: ctx.getRequest().i18nLang,
                args: message === null || message === void 0 ? void 0 : message.args,
            });
            response.status(statusCode).json({ statusCode, message });
            return;
        }
        if ((message === null || message === void 0 ? void 0 : message.message) && Array.isArray(message === null || message === void 0 ? void 0 : message.message)) {
            message = await Promise.all(message === null || message === void 0 ? void 0 : message.message.map(async (it) => {
                return await this.i18n.translate(it, {
                    lang: ctx.getRequest().i18nLang,
                });
            }));
            response.status(statusCode).json({ statusCode, message });
            return;
        }
        if ((message === null || message === void 0 ? void 0 : message.message) && !Array.isArray(message === null || message === void 0 ? void 0 : message.message)) {
            message = await this.i18n.translate(message === null || message === void 0 ? void 0 : message.message, {
                lang: ctx.getRequest().i18nLang,
            });
            response.status(statusCode).json({ statusCode, message });
            return;
        }
        response.status(statusCode).json({ statusCode, message });
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nService])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exceptions-filter.js.map