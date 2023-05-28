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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const base_service_1 = require("../common/base.service");
const user_entity_1 = require("../modules/users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const password_hasher_service_1 = require("./password-hasher/password-hasher.service");
const login_user_dto_1 = require("../modules/users/dto/login-user.dto");
const nestjs_i18n_1 = require("nestjs-i18n");
let AuthService = class AuthService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo, checkService, hasherService, jwtService) {
        super(repo);
        this.checkService = checkService;
        this.hasherService = hasherService;
        this.jwtService = jwtService;
    }
    async login(dto, lang) {
        const user = await this.findOne({
            where: { email: dto.email },
        });
        this.checkService.checkEmailNotExist(!!user);
        this.checkService.checkStatus(user.status);
        const matchedPassword = await this.hasherService.comparePassword(dto.password, user.password);
        this.checkService.checkPasswordValid(matchedPassword);
        const token = await this.jwtService.signAsync({ email: user.email, id: user.id, name: user.name, avatar: user.avatar }, { expiresIn: process.env.JWT_EXPIRES_IN });
        return {
            token,
            message: await this.checkService.i18n.translate('messages.AUTH.GET', {
                lang,
            }),
        };
    }
};
__decorate([
    __param(1, (0, nestjs_i18n_1.I18nLang)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, String]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "login", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, base_service_1.BaseService,
        password_hasher_service_1.PasswordHasherService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map