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
exports.Menu = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const base_entity_1 = require("../../../common/entities/base.entity");
const role_to_menu_entity_1 = require("../../role-to-menu/entities/role-to-menu.entity");
const typeorm_1 = require("typeorm");
let Menu = class Menu extends base_entity_1.BaseEntity {
};
__decorate([
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'Id',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.Index)('pk_menu_id', ['id'], { unique: true }),
    __metadata("design:type", String)
], Menu.prototype, "id", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Admin/User',
        example: 'Admin/User',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Menu.prototype, "url", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
        enum: ['PORTAL', 'PUBLIC'],
        required: true,
        description: 'PORTAL',
        example: 'PORTAL',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', default: 'PORTAL', enum: ['PORTAL', 'PUBLIC'] }),
    __metadata("design:type", String)
], Menu.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => role_to_menu_entity_1.RoleToMenu, (roleToMenu) => roleToMenu.menu),
    __metadata("design:type", Array)
], Menu.prototype, "roles", void 0);
__decorate([
    (0, crud_1.ApiProperty)({
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
], Menu.prototype, "status", void 0);
Menu = __decorate([
    (0, typeorm_1.Entity)('menus'),
    (0, typeorm_1.Unique)('uq_url_type', ['url', 'type'])
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map