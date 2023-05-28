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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const crud_1 = require("@nestjsx/crud");
const user_entity_1 = require("./entities/user.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const base_controller_1 = require("../../common/base.controller");
const nestjs_i18n_1 = require("nestjs-i18n");
const common_2 = require("../../common");
const roles_decorator_1 = require("../../auth/decorator/roles.decorator");
const contants_1 = require("../roles/contants/contants");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles-guard");
const change_password_dto_1 = require("./dto/change-password.dto");
const create_cutomer_dto_1 = require("./dto/create-cutomer.dto");
const change_password_customer_dto_1 = require("./dto/change-password-customer.dto");
const update_status_dto_1 = require("../../common/dto/update-status.dto");
let UsersController = class UsersController {
    constructor(service, checkController) {
        this.service = service;
        this.checkController = checkController;
        this.model_name = common_2.ENUM_MODEL.USER;
    }
    get base() {
        return this;
    }
    getMany(req, request) {
        return this.service.getManyBase(req, request);
    }
    getOneAndDoStuff(req) {
        return this.base.getOneBase(req);
    }
    coolFunction(id, req, dto, lang) {
        return this.service.updateOneBase(id, req, dto, lang);
    }
    awesomePUT(id, req, dto, lang) {
        return this.service.replaceOneBase(id, req, dto, lang);
    }
    createOne(req, dto, lang) {
        return this.service.createOneBase(req, dto, lang);
    }
    createOneCustomer(req, dto, lang) {
        return this.service.createOneCustomerBase(req, dto, lang);
    }
    async updateStatus(id, req, updateStatusDTO, lang) {
        var _a;
        this.checkController.checkStatusUser(id, (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id);
        return this.service.updateStatus(id, updateStatusDTO, lang);
    }
    async changePassword(req, changePasswordDTO, lang) {
        return this.service.changePassword(req, changePasswordDTO, lang);
    }
    async changePasswordCustomer(req, changePasswordDTO, lang) {
        return this.service.changePasswordCustomer(req, changePasswordDTO, lang);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMany", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, crud_1.Override)('getOneBase'),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOneAndDoStuff", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)('updateOneBase'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "coolFunction", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)('replaceOneBase'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "awesomePUT", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiResponse)({ status: 200, type: create_cutomer_dto_1.CreateCustomerDto, description: 'Success' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cutomer_dto_1.CreateCustomerDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createOneCustomer", null);
__decorate([
    (0, common_1.Put)('status/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, swagger_1.ApiParam)({
        required: true,
        name: 'id',
        type: String,
        example: '1',
        description: 'Id',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: update_status_dto_1.UpdateStatusDTO, description: 'Success' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_status_dto_1.UpdateStatusDTO, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)('update/change-password'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDTO, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Put)('update/change-password-customer'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ADMIN),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_customer_dto_1.ChangePasswordCustomerDTO, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePasswordCustomer", null);
UsersController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: user_entity_1.User,
        },
        dto: {
            create: create_user_dto_1.CreateUserDto,
            update: update_user_dto_1.UpdateUserDto,
        },
        query: {
            join: {
                role: {
                    allow: undefined,
                },
            },
            exclude: ['id'],
        },
        routes: {
            exclude: ['deleteOneBase', 'createManyBase'],
        },
        params: {
            id: {
                type: 'uuid',
                primary: true,
                field: 'id',
            },
        },
    }),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        base_controller_1.BaseController])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map