"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionModule = void 0;
const common_1 = require("@nestjs/common");
const permission_service_1 = require("./permission.service");
const permission_controller_1 = require("./permission.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const permission_entity_1 = require("./entities/permission.entity");
const base_service_1 = require("../../common/base.service");
const base_controller_1 = require("../../common/base.controller");
const role_to_menu_module_1 = require("../role-to-menu/role-to-menu.module");
let PermissionModule = class PermissionModule {
};
PermissionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([permission_entity_1.Permission]),
            (0, common_1.forwardRef)(() => role_to_menu_module_1.RoleToMenuModule),
        ],
        exports: [typeorm_1.TypeOrmModule, permission_service_1.PermissionService],
        controllers: [permission_controller_1.PermissionController],
        providers: [permission_service_1.PermissionService, base_service_1.BaseService, base_controller_1.BaseController],
    })
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permission.module.js.map