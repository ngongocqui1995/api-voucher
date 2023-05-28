import { UsersService } from './users.service';
import { CrudController, CrudRequest } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseController } from '../../common/base.controller';
import { ChangePasswordDTO } from './dto/change-password.dto';
import { CreateCustomerDto } from './dto/create-cutomer.dto';
import { ChangePasswordCustomerDTO } from './dto/change-password-customer.dto';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
export declare class UsersController implements CrudController<User> {
    service: UsersService;
    private checkController;
    model_name: string;
    constructor(service: UsersService, checkController: BaseController);
    get base(): CrudController<User>;
    getMany(req: any, request: any): Promise<User[] | import("@nestjsx/crud").GetManyDefaultResponse<User>>;
    getOneAndDoStuff(req: CrudRequest): Promise<User>;
    coolFunction(id: string, req: CrudRequest, dto: CreateUserDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    awesomePUT(id: string, req: CrudRequest, dto: CreateUserDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOne(req: CrudRequest, dto: CreateUserDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOneCustomer(req: any, dto: CreateCustomerDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, req: any, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    changePassword(req: any, changePasswordDTO: ChangePasswordDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    changePasswordCustomer(req: any, changePasswordDTO: ChangePasswordCustomerDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
