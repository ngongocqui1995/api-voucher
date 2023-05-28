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
exports.RoleToMenu = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const base_entity_1 = require("../../../common/entities/base.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const permission_entity_1 = require("../../permission/entities/permission.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const typeorm_1 = require("typeorm");
const permission_1 = require("../interfaces/permission");
let RoleToMenu = class RoleToMenu extends base_entity_1.BaseEntity {
};
__decorate([
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'Id',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.Index)('pk_role_to_menu_id', ['id'], { unique: true }),
    __metadata("design:type", String)
], RoleToMenu.prototype, "id", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        enum: ['PORTAL', 'PUBLIC'],
        required: true,
        description: 'PORTAL',
        example: 'PORTAL',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', default: 'PORTAL', enum: ['PORTAL', 'PUBLIC'] }),
    __metadata("design:type", String)
], RoleToMenu.prototype, "type", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Role Id',
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.menus, {
        nullable: false,
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], RoleToMenu.prototype, "role", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Menu Id',
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.Menu, (menu) => menu.roles, {
        nullable: false,
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'menu_id' }),
    __metadata("design:type", menu_entity_1.Menu)
], RoleToMenu.prototype, "menu", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        type: [permission_1.PermissionCreate],
        required: true,
    }),
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.Permission),
    (0, typeorm_1.JoinTable)({ name: 'menu-to-permission' }),
    __metadata("design:type", Array)
], RoleToMenu.prototype, "permissions", void 0);
RoleToMenu = __decorate([
    (0, typeorm_1.Entity)('role-to-menu'),
    (0, typeorm_1.Unique)('qk_role_menu', ['id', 'role', 'menu'])
], RoleToMenu);
exports.RoleToMenu = RoleToMenu;
//# sourceMappingURL=role-to-menu.entity.js.map