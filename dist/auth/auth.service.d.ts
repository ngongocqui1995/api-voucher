import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BaseService } from 'src/common/base.service';
import { User } from 'src/modules/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { PasswordHasherService } from './password-hasher/password-hasher.service';
import { LoginUserDto } from 'src/modules/users/dto/login-user.dto';
import { LoginRsp } from 'src/modules/users/interfaces/user';
export declare class AuthService extends TypeOrmCrudService<User> {
    private checkService;
    private hasherService;
    private jwtService;
    constructor(repo: any, checkService: BaseService, hasherService: PasswordHasherService, jwtService: JwtService);
    login(dto: LoginUserDto, lang: string): Promise<LoginRsp>;
}
