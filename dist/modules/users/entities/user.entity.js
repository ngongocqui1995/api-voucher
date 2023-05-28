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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const base_entity_1 = require("../../../common/entities/base.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
let User = class User extends base_entity_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Id',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.Index)('pk_user_id', ['id'], { unique: true }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        description: 'Email',
        example: 'abc@gmail.com',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Mật khẩu phải 1 chữ hoa, 1 chữ thường, 1 chữ số, 1 kí tự đặc biệt!',
        example: '123456',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'Role Id',
        example: '1',
    }),
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.users, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
        description: 'Name',
        example: 'abc',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Avatar',
        example: 'avatar',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['MALE', 'FEMALE', 'OTHER'],
        description: 'Gender',
        example: 'MALE',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        default: 'OTHER',
        enum: ['MALE', 'FEMALE', 'OTHER'],
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Phone',
        example: '0858585858',
    }),
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, nullable: false, length: 20 }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Code',
        example: '1',
    }),
    (0, typeorm_1.Index)('pk_user_code', ['code'], { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, length: 50 }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], User.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: false,
        description: 'Price',
        example: 0,
    }),
    (0, typeorm_1.Column)({ type: 'float', nullable: false, default: 0 }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", Number)
], User.prototype, "price", void 0);
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
], User.prototype, "status", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map