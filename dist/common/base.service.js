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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const enum_1 = require("./enum");
let BaseService = class BaseService {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name);
        this.comparePassword = (newPassword, confirmPassword) => {
            if (newPassword === confirmPassword)
                return;
            throw new common_1.HttpException({ key: 'errors.COMPARE_PASSWORD_FAIL' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkCategoryExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.CATEGORY_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkLinkExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.LINK_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkUrlExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.URL_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkViewExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.VIEW_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkLikeExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.LIKE_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkEpisodesExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.EPISODES_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkCodeExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.CODE_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkHostExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.HOST_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkNameExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.NAME_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkRoleMenuExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.MENU_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkMenuNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.MENU_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkPermissionNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.PERMISSION_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkRoleExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.ROLE_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkCreatedByNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.CREATED_BY_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkCaptchaNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.CAPTCHA_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkRoleNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.ROLE_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkPhoneExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.PHONE_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkMenuExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.MENU_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkEmailExist = (check) => {
            if (!check)
                return;
            throw new common_1.HttpException({ key: 'errors.EMAIL_ALREADY_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkEmailNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.EMAIL_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkMovieNotExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.MOVIE_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatus = (status) => {
            if (status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.STATUS_NOT_ACTIVE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkPasswordValid = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.PASSWORD_NOT_VALID' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.throwErrorSystem = (message) => {
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        };
    }
};
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", nestjs_i18n_1.I18nService)
], BaseService.prototype, "i18n", void 0);
BaseService = __decorate([
    (0, common_1.Injectable)()
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map