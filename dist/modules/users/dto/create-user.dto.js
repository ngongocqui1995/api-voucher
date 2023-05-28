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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const role_entity_1 = require("../../roles/entities/role.entity");
const class_transformer_1 = require("class-transformer");
const { UPDATE, CREATE } = crud_1.CrudValidationGroups;
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.EMAIL_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.EMAIL_NOT_EMPTY' }),
    (0, class_validator_1.IsEmail)({}, { message: 'errors.EMAIL_NOT_VALID' }),
    (0, class_validator_1.Length)(5, 100, { message: 'errors.EMAIL_LENGTH_5_100' }),
    (0, class_transformer_1.Transform)((params) => String(params.value).trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        description: 'Email',
        example: 'abc@gmail.com',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [UPDATE] }),
    (0, class_validator_1.IsString)({ message: 'errors.PASSWORD_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.PASSWORD_NOT_EMPTY' }),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/, { message: 'errors.MATCHES_PASSWORD' }),
    (0, class_validator_1.Length)(5, 100, { message: 'errors.PASSWORD_LENGTH_5_100' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Mật khẩu phải 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt!',
        example: 'Duc1@',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.ROLE_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.ROLE_NOT_EMPTY' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Role Id',
        example: '1',
    }),
    __metadata("design:type", role_entity_1.Role)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.NAME_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.NAME_NOT_EMPTY' }),
    (0, class_validator_1.Length)(3, 50, { message: 'errors.NAME_LENGTH_3_50' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
        description: 'Name',
        example: 'abc',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
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
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.PHONE_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.PHONE_NOT_EMPTY' }),
    (0, class_validator_1.Length)(10, 10, { message: 'errors.PHONE_LENGTH_5_50' }),
    (0, class_transformer_1.Transform)((params) => String(params.value).trim()),
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 10,
        maxLength: 10,
        description: 'Phone',
        example: '0858585858',
        required: true,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'errors.PRICE_NUMBER' }),
    (0, class_validator_1.Min)(0, { message: 'errors.PRICE_MIN' }),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Price',
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.GENDER_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.GENDER_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['MALE', 'FEMALE', 'OTHER'], { message: 'errors.GENDER_NOT_VALID' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'MALE, FEMALE, OTHER',
        example: 'MALE',
        required: false,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'errors.STATUS_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.STATUS_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['ACTIVE', 'INACTIVE'], { message: 'errors.STATUS_NOT_VALID' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'ACTIVE, INACTIVE',
        example: 'ACTIVE',
        required: false,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "status", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map