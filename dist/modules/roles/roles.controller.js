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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const roles_service_1 = require("./roles.service");
const role_entity_1 = require("./entities/role.entity");
const base_controller_1 = require("../../common/base.controller");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const nestjs_i18n_1 = require("nestjs-i18n");
const users_service_1 = require("../users/users.service");
const common_2 = require("../../common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles-guard");
const contants_1 = require("./contants/contants");
const roles_decorator_1 = require("../../auth/decorator/roles.decorator");
const update_status_dto_1 = require("../../common/dto/update-status.dto");
let RolesController = class RolesController {
    constructor(service, userService, checkController) {
        this.service = service;
        this.userService = userService;
        this.checkController = checkController;
        this.model_name = common_2.ENUM_MODEL.ROLE;
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
    createOne(req, dto, lang) {
        return this.service.createOneBase(req, dto, lang);
    }
    async updateStatus(id, updateStatusDTO, lang) {
        const findUser = await this.userService.findOne({
            where: { role: { id }, status: common_2.ENUM_STATUS.ACTIVE },
        });
        this.checkController.checkStatusRole(!!findUser, updateStatusDTO.status);
        return this.service.updateStatus(id, updateStatusDTO, lang);
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
], RolesController.prototype, "getMany", null);
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
], RolesController.prototype, "getOneAndDoStuff", null);
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
    __metadata("design:paramtypes", [String, Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "coolFunction", null);
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
    __metadata("design:paramtypes", [String, Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "awesomePUT", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
        description: 'Bearer {{token}}',
    }),
    (0, crud_1.Override)(),
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "createOne", null);
__decorate([
    (0, common_1.Put)('status/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.RequireRoles)(contants_1.ROLES.ROLE_ROOT),
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
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDTO, String]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateStatus", null);
RolesController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, crud_1.Crud)({
        model: {
            type: role_entity_1.Role,
        },
        dto: {
            create: create_role_dto_1.CreateRoleDto,
            update: update_role_dto_1.UpdateRoleDto,
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
    (0, common_1.Controller)('roles'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [roles_service_1.RolesService,
        users_service_1.UsersService,
        base_controller_1.BaseController])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map