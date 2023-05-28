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
exports.CreateRoleToMenuDto = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const class_validator_1 = require("class-validator");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const permission_1 = require("../interfaces/permission");
class CreateRoleToMenuDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.TYPE_MENU_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.TYPE_MENU_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['PORTAL', 'PUBLIC'], { message: 'errors.TYPE_MENU_NOT_VALID' }),
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'PORTAL, PUBLIC',
        example: 'PORTAL',
        required: true,
    }),
    __metadata("design:type", String)
], CreateRoleToMenuDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.ROLE_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.ROLE_NOT_EMPTY' }),
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Role Id',
        example: '1',
    }),
    __metadata("design:type", role_entity_1.Role)
], CreateRoleToMenuDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.MENU_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.MENU_NOT_EMPTY' }),
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Menu Id',
        example: '1',
    }),
    __metadata("design:type", menu_entity_1.Menu)
], CreateRoleToMenuDto.prototype, "menu", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'errors.PERMISSION_ARRAY' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.PERMISSION_NOT_EMPTY' }),
    (0, crud_1.ApiProperty)({
        type: [permission_1.PermissionCreate],
        required: true,
    }),
    __metadata("design:type", Array)
], CreateRoleToMenuDto.prototype, "permissions", void 0);
exports.CreateRoleToMenuDto = CreateRoleToMenuDto;
//# sourceMappingURL=create-role-to-menu.dto.js.map