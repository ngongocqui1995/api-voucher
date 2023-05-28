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
exports.ChangePasswordCustomerDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ChangePasswordCustomerDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.NEW_PASSWORD_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.NEW_PASSWOR_NOT_EMPTY' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], ChangePasswordCustomerDTO.prototype, "new_password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.CONFIRM_PASSWORD_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.CONFIRM_PASSWOR_NOT_EMPTY' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], ChangePasswordCustomerDTO.prototype, "confirm_password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.USER_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.USER_NOT_EMPTY' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: false,
        description: 'User Id',
        example: '1',
    }),
    __metadata("design:type", String)
], ChangePasswordCustomerDTO.prototype, "user", void 0);
exports.ChangePasswordCustomerDTO = ChangePasswordCustomerDTO;
//# sourceMappingURL=change-password-customer.dto.js.map