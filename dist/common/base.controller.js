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
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const enum_1 = require("./enum");
let BaseController = class BaseController {
    constructor() {
        this.logger = new common_1.Logger(this.constructor.name);
        this.checkStatusUser = (id, userId) => {
            if (id != userId)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_USER_CURRENT' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkFileExist = (check) => {
            if (check)
                return;
            throw new common_1.HttpException({ key: 'errors.FILE_NOT_EXISTS' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusMovie = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_MOVIE_USING' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusPartMovie = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_PART_MOVIE_HAVE_MOVIE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusFansub = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_FANSUB_HAVE_MOVIE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusMovieGroup = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_MOVIE_GROUP_HAVE_MOVIE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusCategories = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_CATEGORIES_HAVE_MOVIE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusRole = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_ROLE_HAVE_USER' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusPermission = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_PERMISSION_HAVE_ROLE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.checkStatusMenu = (check, status) => {
            if (!check || status === enum_1.ENUM_STATUS.ACTIVE)
                return;
            throw new common_1.HttpException({ key: 'errors.CHANGE_STATUS_MENU_HAVE_ROLE' }, common_1.HttpStatus.BAD_REQUEST);
        };
        this.throwErrorSystem = (message) => {
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        };
    }
};
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", nestjs_i18n_1.I18nService)
], BaseController.prototype, "i18n", void 0);
BaseController = __decorate([
    (0, common_1.Injectable)()
], BaseController);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map