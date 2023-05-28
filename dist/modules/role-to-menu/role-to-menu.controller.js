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
exports.RoleToMenuController = void 0;
const common_1 = require("@nestjs/common");
const role_to_menu_service_1 = require("./role-to-menu.service");
const create_role_to_menu_dto_1 = require("./dto/create-role-to-menu.dto");
const update_role_to_menu_dto_1 = require("./dto/update-role-to-menu.dto");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const role_to_menu_entity_1 = require("./entities/role-to-menu.entity");
const nestjs_i18n_1 = require("nestjs-i18n");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles-guard");
const contants_1 = require("../roles/contants/contants");
const roles_decorator_1 = require("../../auth/decorator/roles.decorator");
let RoleToMenuController = class RoleToMenuController {
    constructor(service) {
        this.service = service;
    }
    get base() {
        return this;
    }
    getMany(req) {
        return this.base.getManyBase(req);
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
    async deleteOne(req, lang) {
        return this.service.deleteOneBase(req, lang);
    }
    createOne(req, dto, lang) {
        return this.service.createOneBase(req, dto, lang);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoleToMenuController.prototype, "getMany", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)('getOneBase'),
    __param(0, (0, crud_1.ParsedRequest)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoleToMenuController.prototype, "getOneAndDoStuff", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
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
    __metadata("design:paramtypes", [String, Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", void 0)
], RoleToMenuController.prototype, "coolFunction", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
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
    __metadata("design:paramtypes", [String, Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", void 0)
], RoleToMenuController.prototype, "awesomePUT", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoleToMenuController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", void 0)
], RoleToMenuController.prototype, "createOne", null);
RoleToMenuController = __decorate([
    (0, swagger_1.ApiTags)('Role-To-Menu'),
    (0, crud_1.Crud)({
        model: {
            type: role_to_menu_entity_1.RoleToMenu,
        },
        dto: {
            create: create_role_to_menu_dto_1.CreateRoleToMenuDto,
            update: update_role_to_menu_dto_1.UpdateRoleToMenuDto,
        },
        query: {
            join: {
                permissions: {
                    allow: undefined,
                },
                role: {
                    allow: undefined,
                },
                menu: {
                    allow: undefined,
                },
            },
            exclude: ['id'],
        },
        routes: {
            exclude: ['createManyBase'],
        },
        params: {
            id: {
                type: 'uuid',
                primary: true,
                field: 'id',
            },
        },
    }),
    (0, common_1.Controller)('role-to-menu'),
    __metadata("design:paramtypes", [role_to_menu_service_1.RoleToMenuService])
], RoleToMenuController);
exports.RoleToMenuController = RoleToMenuController;
//# sourceMappingURL=role-to-menu.controller.js.map