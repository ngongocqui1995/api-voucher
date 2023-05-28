"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleToMenuModule = void 0;
const common_1 = require("@nestjs/common");
const role_to_menu_service_1 = require("./role-to-menu.service");
const role_to_menu_controller_1 = require("./role-to-menu.controller");
const base_service_1 = require("../../common/base.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const role_to_menu_entity_1 = require("./entities/role-to-menu.entity");
const roles_module_1 = require("../roles/roles.module");
const menus_module_1 = require("../menus/menus.module");
let RoleToMenuModule = class RoleToMenuModule {
};
RoleToMenuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([role_to_menu_entity_1.RoleToMenu]),
            (0, common_1.forwardRef)(() => roles_module_1.RolesModule),
            (0, common_1.forwardRef)(() => menus_module_1.MenusModule),
        ],
        exports: [typeorm_1.TypeOrmModule, role_to_menu_service_1.RoleToMenuService],
        controllers: [role_to_menu_controller_1.RoleToMenuController],
        providers: [role_to_menu_service_1.RoleToMenuService, base_service_1.BaseService],
    })
], RoleToMenuModule);
exports.RoleToMenuModule = RoleToMenuModule;
//# sourceMappingURL=role-to-menu.module.js.map