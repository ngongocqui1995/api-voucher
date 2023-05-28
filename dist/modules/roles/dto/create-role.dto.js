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
exports.CreateRoleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateRoleDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.CODE_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.CODE_NOT_EMPTY' }),
    (0, class_validator_1.Length)(3, 50, { message: 'errors.CODE_LENGTH_3_50' }),
    (0, class_transformer_1.Transform)((params) => String(params.value).trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'admin',
        example: 'admin',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.AVATAR_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.AVATAR_NOT_EMPTY' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Avatar',
        example: 'avatar',
        required: false,
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.NAME_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.NAME_NOT_EMPTY' }),
    (0, class_validator_1.Length)(3, 50, { message: 'errors.NAME_LENGTH_3_50' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Admin',
        example: 'Admin',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.COLOR_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.COLOR_NOT_EMPTY' }),
    (0, class_validator_1.Length)(0, 50, { message: 'errors.COLOR_LENGTH_0_50' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'red',
        example: 'red',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.STATUS_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.STATUS_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['ACTIVE', 'INACTIVE'], { message: 'errors.STATUS_NOT_VALID' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'ACTIVE, INACTIVE',
        example: 'ACTIVE',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "status", void 0);
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=create-role.dto.js.map