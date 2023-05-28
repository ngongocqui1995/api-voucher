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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const await_to_js_1 = require("await-to-js");
const user_entity_1 = require("./entities/user.entity");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const crud_1 = require("@nestjsx/crud");
const base_service_1 = require("../../common/base.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const password_hasher_service_1 = require("../../auth/password-hasher/password-hasher.service");
const typeorm_2 = require("typeorm");
const nestjs_i18n_1 = require("nestjs-i18n");
const common_2 = require("../../common");
const update_user_dto_1 = require("./dto/update-user.dto");
const roles_service_1 = require("../roles/roles.service");
const change_password_dto_1 = require("./dto/change-password.dto");
const create_cutomer_dto_1 = require("./dto/create-cutomer.dto");
const update_status_dto_1 = require("../../common/dto/update-status.dto");
const change_password_customer_dto_1 = require("./dto/change-password-customer.dto");
const contants_1 = require("../roles/contants/contants");
let UsersService = class UsersService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo, checkService, hashService, connection, rolesService) {
        super(repo);
        this.checkService = checkService;
        this.hashService = hashService;
        this.connection = connection;
        this.rolesService = rolesService;
        this.model_name = common_2.ENUM_MODEL.USER;
        this.status_name = common_2.ENUM_MODEL.STATUS;
    }
    get base() {
        return this;
    }
    async getManyBase(req, request) {
        const { parsed, options } = req;
        const user = request.user;
        const builder = await this.createBuilder(parsed, options);
        switch (user.role.code) {
            case contants_1.ROLES.ROLE_ADMIN: {
                builder.andWhere(`"role"."code" != :code`, { code: contants_1.ROLES.ROLE_ROOT });
                break;
            }
            case contants_1.ROLES.ROLE_UP_MOVIE: {
                builder.andWhere(`"role"."code" not in(..:code)`, {
                    code: [contants_1.ROLES.ROLE_ROOT, contants_1.ROLES.ROLE_ADMIN],
                });
                break;
            }
        }
        return await this.doGetMany(builder, parsed, options);
    }
    async replaceOneBase(id, req, dto, lang) {
        const emailExist = await this.findOne({
            where: { email: dto.email, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkEmailExist(!!emailExist);
        const phoneExist = await this.findOne({
            where: { phone: dto.phone, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkPhoneExist(!!phoneExist);
        const roleExist = await this.rolesService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        delete dto.password;
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
    async updateOneBase(id, req, dto, lang) {
        const emailExist = await this.findOne({
            where: { email: dto.email, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkEmailExist(!!emailExist);
        const phoneExist = await this.findOne({
            where: { phone: dto.phone, id: (0, typeorm_2.Not)(id) },
        });
        this.checkService.checkPhoneExist(!!phoneExist);
        const roleExist = await this.rolesService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        delete dto.password;
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
    async createOneBase(req, dto, lang) {
        const emailExist = await this.findOne({
            where: { email: dto.email },
        });
        this.checkService.checkEmailExist(!!emailExist);
        const phoneExist = await this.findOne({
            where: { phone: dto.phone },
        });
        this.checkService.checkPhoneExist(!!phoneExist);
        const roleExist = await this.rolesService.findOne({
            where: { id: dto.role.toString() },
        });
        this.checkService.checkRoleNotExist(!!roleExist);
        const encryptedPassword = this.hashService.hashPassword(dto.password);
        const [err] = await (0, await_to_js_1.default)(this.createOne(req, Object.assign(Object.assign({}, dto), { password: encryptedPassword, price: 0 })));
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
    async createOneCustomerBase(req, dto, lang) {
        const emailExist = await this.findOne({
            where: { email: dto.email },
        });
        this.checkService.checkEmailExist(!!emailExist);
        const phoneExist = await this.findOne({
            where: { phone: dto.phone },
        });
        this.checkService.checkPhoneExist(!!phoneExist);
        const roleUser = await this.rolesService.findOne({
            where: { code: 'USER' },
        });
        this.checkService.checkRoleNotExist(!!roleUser);
        const encryptedPassword = this.hashService.hashPassword(dto.password);
        const [err] = await (0, await_to_js_1.default)(this.createCustomerTransaction({
            email: dto.email,
            name: dto.name,
            avatar: dto.avatar,
            phone: dto.phone,
            gender: dto.gender,
            status: dto.status,
            password: encryptedPassword,
            role: roleUser,
        }));
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
    async createCustomerTransaction(dto) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .insert()
                .into(user_entity_1.User)
                .values(dto)
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
    }
    async updateStatus(id, updateStatusDTO, lang) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .update(user_entity_1.User)
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
    async changePassword(req, changePasswordDTO, lang) {
        const user = await this.findOne({ where: { id: req.user.id } });
        const matchedPassword = await this.hashService.comparePassword(changePasswordDTO.current_password, user.password);
        this.checkService.checkPasswordValid(matchedPassword);
        this.checkService.comparePassword(changePasswordDTO.new_password, changePasswordDTO.confirm_password);
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const encryptedPassword = this.hashService.hashPassword(changePasswordDTO.new_password);
            await queryRunner.manager
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set({ password: encryptedPassword })
                .where('id = :id', { id: req.user.id })
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
            message: await this.checkService.i18n.translate('messages.RESET_PASSWORD.PASSWORD_CHANGED'),
        };
    }
    async changePasswordCustomer(req, changePasswordDTO, lang) {
        this.checkService.comparePassword(changePasswordDTO.new_password, changePasswordDTO.confirm_password);
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const encryptedPassword = this.hashService.hashPassword(changePasswordDTO.new_password);
            await queryRunner.manager
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set({ password: encryptedPassword })
                .where('id = :id', { id: changePasswordDTO.user })
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
            message: await this.checkService.i18n.translate('messages.RESET_PASSWORD.PASSWORD_CHANGED'),
        };
    }
    async replaceAvatarMany(linkOld, linkNew) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .update(user_entity_1.User)
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
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "getManyBase", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "replaceOneBase", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, crud_1.ParsedRequest)()),
    __param(2, (0, crud_1.ParsedBody)()),
    __param(3, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_user_dto_1.UpdateUserDto, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "updateOneBase", null);
__decorate([
    __param(0, (0, crud_1.ParsedRequest)()),
    __param(1, (0, crud_1.ParsedBody)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "createOneBase", null);
__decorate([
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cutomer_dto_1.CreateCustomerDto, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "createOneCustomerBase", null);
__decorate([
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDTO, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "updateStatus", null);
__decorate([
    __param(0, (0, common_1.Request)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDTO, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "changePassword", null);
__decorate([
    __param(0, (0, common_1.Request)()),
    __param(2, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_customer_dto_1.ChangePasswordCustomerDTO, String]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "changePasswordCustomer", null);
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => roles_service_1.RolesService))),
    __metadata("design:paramtypes", [Object, base_service_1.BaseService,
        password_hasher_service_1.PasswordHasherService,
        typeorm_2.Connection,
        roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map