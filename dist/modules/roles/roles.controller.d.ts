import { CrudController, CrudRequest } from '@nestjsx/crud';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { BaseController } from '../../common/base.controller';
import { CreateRoleDto } from './dto/create-role.dto';
import { UsersService } from '../users/users.service';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
export declare class RolesController implements CrudController<Role> {
    service: RolesService;
    private userService;
    private checkController;
    model_name: string;
    constructor(service: RolesService, userService: UsersService, checkController: BaseController);
    get base(): CrudController<Role>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Role> | Role[]>;
    getOneAndDoStuff(req: CrudRequest): Promise<Role>;
    coolFunction(id: string, req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    awesomePUT(id: string, req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOne(req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
