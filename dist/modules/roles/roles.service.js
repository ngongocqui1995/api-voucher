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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const role_entity_1 = require("./entities/role.entity");
const crud_1 = require("@nestjsx/crud");
const create_role_dto_1 = require("./dto/create-role.dto");
const base_service_1 = require("../../common/base.service");
const await_to_js_1 = require("await-to-js");
const nestjs_i18n_1 = require("nestjs-i18n");
const typeorm_2 = require("typeorm");
const common_2 = require("../../common");
const update_status_dto_1 = require("../../common/dto/update-status.dto");
let RolesService = class RolesService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo, checkService, connection) {
        super(repo);
        this.checkService = checkService;
        this.connection = connection;
        this.status_name = common_2.ENUM_MODEL.STATUS;
        this.model_name = common_2.ENUM_MODEL.ROLE;
    }
    get base() {
        return this;
    }
    async updateOneBase(id, req, dto, lang) {
        const codeExist = await this.findOne({
            where: { code: dto.code, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkCodeExist(!!codeExist);
        const [err] = await (0, await_to_js_1.default)(this.updateOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.UPDATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async replaceOneBase(id, req, dto, lang) {
        const codeExist = await this.findOne({
            where: { code: dto.code, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkCodeExist(!!codeExist);
        const [err] = await (0, await_to_js_1.default)(this.replaceOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.UPDATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async createOneBase(req, dto, lang) {
        const codeExist = await this.findOne({
            where: { code: dto.code },
        });
        this.checkService.checkCodeExist(!!codeExist);
        const [err] = await (0, await_to_js_1.default)(this.createOne(req, dto));
        if (err)
            this.checkService.throwErrorSystem(err.message);
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.CREATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.model_name),
                    },
                ],
            }),
        };
    }
    async updateStatus(id, updateStatusDTO, lang) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .update(role_entity_1.Role)
                .set({ status: updateStatusDTO.status })
                .where('id = :id', { id })
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            this.checkService.throwErrorSystem(err.message);
        }
        finally {
            await queryRunner.release();
        }
        return {
            status: common_1.HttpStatus.OK,
            message: await this.checkService.i18n.translate('messages.ACTION.UPDATE', {
                lang,
                args: [
                    {
                        name: await this.checkService.i18n.translate('models.' + this.status_name),
                    },
                ],
            }),
        };
    }
    async replaceAvatarMany(linkOld, linkNew) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .update(role_entity_1.Role)
                .set({ avatar: () => `replace(avatar, '${linkOld}', '${linkNew}')` })
                .where('id is not null')
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            this.checkService.throwErrorSystem(err.message);
        }
        finally {
            await queryRunner.release();
        }
        return { status: common_1.HttpStatus.OK };
    }
};
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", Promise)
], RolesService.prototype, "updateOneBase", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", Promise)
], RolesService.prototype, "replaceOneBase", null);
__decorate([
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_role_dto_1.CreateRoleDto, String]),
    __metadata("design:returntype", Promise)
], RolesService.prototype, "createOneBase", null);
__decorate([
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDTO, String]),
    __metadata("design:returntype", Promise)
], RolesService.prototype, "updateStatus", null);
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [Object, base_service_1.BaseService,
        typeorm_2.Connection])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map