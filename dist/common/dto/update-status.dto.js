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
exports.UpdateStatusDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateStatusDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'errors.STATUS_STRING' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'errors.STATUS_NOT_EMPTY' }),
    (0, class_validator_1.IsIn)(['ACTIVE', 'INACTIVE'], { message: 'errors.STATUS_NOT_VALID' }),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        description: 'ACTIVE, INACTIVE',
        example: 'ACTIVE',
    }),
    __metadata("design:type", String)
], UpdateStatusDTO.prototype, "status", void 0);
exports.UpdateStatusDTO = UpdateStatusDTO;
//# sourceMappingURL=update-status.dto.js.map