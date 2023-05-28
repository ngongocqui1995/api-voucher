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
exports.CreateMenuDto = void 0;
const crud_1 = require("@nestjsx/crud/lib/crud");
const class_validator_1 = require("class-validator");
class CreateMenuDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.URL_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.URL_NOT_EMPTY' }),
    (0, class_validator_1.Length)(0, 100, { message: 'errors.URL_LENGTH_0_100' }),
    (0, crud_1.ApiProperty)({
        type: String,
        description: 'Admin/User',
        example: 'Admin/User',
        required: true,
    }),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "url", void 0);
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
], CreateMenuDto.prototype, "type", void 0);
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
], CreateMenuDto.prototype, "status", void 0);
exports.CreateMenuDto = CreateMenuDto;
//# sourceMappingURL=create-menu.dto.js.map