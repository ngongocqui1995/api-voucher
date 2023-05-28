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
exports.CreatePermissionDto = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreatePermissionDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.CODE_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.CODE_NOT_EMPTY' }),
    (0, class_validator_1.Length)(3, 50, { message: 'errors.CODE_LENGTH_3_50' }),
    (0, class_transformer_1.Transform)((params) => String(params.value).trim()),
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'create',
        example: 'create',
    }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.NAME_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.NAME_NOT_EMPTY' }),
    (0, class_validator_1.Length)(3, 50, { message: 'errors.NAME_LENGTH_3_50' }),
    (0, crud_1.ApiProperty)({
        type: String,
        required: true,
        description: 'create',
        example: 'create',
    }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.COLOR_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.COLOR_NOT_EMPTY' }),
    (0, class_validator_1.Length)(0, 50, { message: 'errors.COLOR_LENGTH_0_50' }),
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'red',
        example: 'red',
    }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "color", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.STATUS_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.STATUS_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['ACTIVE', 'INACTIVE'], { message: 'errors.STATUS_NOT_VALID' }),
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'ACTIVE, INACTIVE',
        example: 'ACTIVE',
    }),
    __metadata("design:type", String)
], CreatePermissionDto.prototype, "status", void 0);
exports.CreatePermissionDto = CreatePermissionDto;
//# sourceMappingURL=create-permission.dto.js.map