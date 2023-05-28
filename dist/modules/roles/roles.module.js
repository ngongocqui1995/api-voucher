"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./entities/role.entity");
const roles_service_1 = require("./roles.service");
const roles_controller_1 = require("./roles.controller");
const base_service_1 = require("../../common/base.service");
const config_1 = require("@nestjs/config");
const password_hasher_service_1 = require("../../auth/password-hasher/password-hasher.service");
const base_controller_1 = require("../../common/base.controller");
const users_module_1 = require("../users/users.module");
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [typeorm_1.TypeOrmModule, roles_service_1.RolesService],
        controllers: [roles_controller_1.RolesController],
        providers: [roles_service_1.RolesService, base_service_1.BaseService, password_hasher_service_1.PasswordHasherService, base_controller_1.BaseController],
    })
], RolesModule);
exports.RolesModule = RolesModule;
//# sourceMappingURL=roles.module.js.map