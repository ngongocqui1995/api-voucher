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
exports.Role = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../common/entities/base.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const role_to_menu_entity_1 = require("../../role-to-menu/entities/role-to-menu.entity");
let Role = class Role extends base_entity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Id',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.Index)('pk_role_id', ['id'], { unique: true }),
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'admin',
        example: 'admin',
    }),
    (0, typeorm_1.Index)('pk_role_code', ['code'], { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, nullable: false, length: 50 }),
    __metadata("design:type", String)
], Role.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Avatar',
        example: 'avatar',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Admin',
        example: 'Admin',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'red',
        example: 'red',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, length: 50 }),
    __metadata("design:type", String)
], Role.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.role),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_to_menu_entity_1.RoleToMenu, (roleToMenu) => roleToMenu.role),
    __metadata("design:type", Array)
], Role.prototype, "menus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['ACTIVE', 'INACTIVE'],
        description: 'ACTIVE',
        example: 'ACTIVE',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE'],
    }),
    __metadata("design:type", String)
], Role.prototype, "status", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)('roles')
], Role);
exports.Role = Role;
//# sourceMappingURL=role.entity.js.map