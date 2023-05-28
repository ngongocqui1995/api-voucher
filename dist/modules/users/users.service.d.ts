import { HttpStatus } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest, CrudService } from '@nestjsx/crud';
import { BaseService } from '../../common/base.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordHasherService } from '../../auth/password-hasher/password-hasher.service';
import { Connection } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from '../roles/roles.service';
import { ChangePasswordDTO } from './dto/change-password.dto';
import { CreateCustomerDto } from './dto/create-cutomer.dto';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
import { ChangePasswordCustomerDTO } from './dto/change-password-customer.dto';
export declare class UsersService extends TypeOrmCrudService<User> {
    private checkService;
    private hashService;
    private connection;
    private rolesService;
    model_name: string;
    status_name: string;
    constructor(repo: any, checkService: BaseService, hashService: PasswordHasherService, connection: Connection, rolesService: RolesService);
    get base(): CrudService<User>;
    getManyBase(req: CrudRequest, request: any): Promise<User[] | import("@nestjsx/crud").GetManyDefaultResponse<User>>;
    replaceOneBase(id: string, req: CrudRequest, dto: CreateUserDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateOneBase(id: string, req: CrudRequest, dto: UpdateUserDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneBase(req: CrudRequest, dto: CreateUserDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneCustomerBase(req: any, dto: CreateCustomerDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createCustomerTransaction(dto: User): Promise<void>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    changePassword(req: any, changePasswordDTO: ChangePasswordDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    changePasswordCustomer(req: any, changePasswordDTO: ChangePasswordCustomerDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    replaceAvatarMany(linkOld: string, linkNew: string): Promise<{
        status: HttpStatus;
    }>;
}
