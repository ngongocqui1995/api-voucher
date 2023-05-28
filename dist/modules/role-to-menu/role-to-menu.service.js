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
exports.RoleToMenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_1 = require("@nestjsx/crud");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const await_to_js_1 = require("await-to-js");
const nestjs_i18n_1 = require("nestjs-i18n");
const common_2 = require("../../common");
const base_service_1 = require("../../common/base.service");
const typeorm_2 = require("typeorm");
const menus_service_1 = require("../menus/menus.service");
const roles_service_1 = require("../roles/roles.service");
const create_role_to_menu_dto_1 = require("./dto/create-role-to-menu.dto");
const role_to_menu_entity_1 = require("./entities/role-to-menu.entity");
let RoleToMenuService = class RoleToMenuService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo, checkService, menuService, roleService, connection) {
        super(repo);
        this.checkService = checkService;
        this.menuService = menuService;
        this.roleService = roleService;
        this.connection = connection;
        this.model_name = common_2.ENUM_MODEL.MENU;
    }
    get base() {
        return this;
    }
    async deleteOneBase(req, lang) {
        const [err] = await (0, await_to_js_1.default)(this.deleteOne(req));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.DELETE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async updateOneBase(id, req, dto, lang) {
        const menuExist = await this.menuService.findOne({
            where: { id: dto.menu.toString() },
        });
        this.checkService.checkMenuNotExist(!!menuExist);
        const roleExist = await this.roleService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        const register = await this.findOne({
            where: {
                menu: {
                    id: dto.menu.toString(),
                },
                role: {
                    id: dto.role.toString(),
                },
                id: (0, typeorm_2.Not)(id),
            },
        });
        this.checkService.checkRoleMenuExist(!!register);
        const [err] = await (0, await_to_js_1.default)(this.updateOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.UPDATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async replaceOneBase(id, req, dto, lang) {
        const menuExist = await this.menuService.findOne({
            where: { id: dto.menu.toString() },
        });
        this.checkService.checkMenuNotExist(!!menuExist);
        const roleExist = await this.roleService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        const register = await this.findOne({
            where: {
                menu: {
                    id: dto.menu.toString(),
                },
                role: {
                    id: dto.role.toString(),
                },
                id: (0, typeorm_2.Not)(id),
            },
        });
        this.checkService.checkRoleMenuExist(!!register);
        const [err] = await (0, await_to_js_1.default)(this.replaceOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.UPDATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async createOneBase(req, dto, lang) {
        const menuExist = await this.menuService.findOne({
            where: { id: dto.menu.toString() },
        });
        this.checkService.checkMenuNotExist(!!menuExist);
        const roleExist = await this.roleService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        const register = await this.findOne({
            where: {
                menu: {
                    id: dto.menu.toString(),
                },
                role: {
                    id: dto.role.toString(),
                },
            },
        });
        this.checkService.checkRoleMenuExist(!!register);
        const [err] = await (0, await_to_js_1.default)(this.createOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.CREATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
};
__decorate([
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoleToMenuService.prototype, "deleteOneBase", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", Promise)
], RoleToMenuService.prototype, "updateOneBase", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", Promise)
], RoleToMenuService.prototype, "replaceOneBase", null);
__decorate([
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_role_to_menu_dto_1.CreateRoleToMenuDto, String]),
    __metadata("design:returntype", Promise)
], RoleToMenuService.prototype, "createOneBase", null);
RoleToMenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_to_menu_entity_1.RoleToMenu)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => menus_service_1.MenusService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => roles_service_1.RolesService))),
    __metadata("design:paramtypes", [Object, base_service_1.BaseService,
        menus_service_1.MenusService,
        roles_service_1.RolesService,
        typeorm_2.Connection])
], RoleToMenuService);
exports.RoleToMenuService = RoleToMenuService;
//# sourceMappingURL=role-to-menu.service.js.map