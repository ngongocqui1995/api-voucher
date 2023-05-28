import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permission.entity';
import { CrudController, CrudRequest } from '@nestjsx/crud';
import { BaseController } from 'src/common/base.controller';
import { RoleToMenuService } from '../role-to-menu/role-to-menu.service';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
export declare class PermissionController implements CrudController<Permission> {
    service: PermissionService;
    private roleToMenuService;
    private checkController;
    constructor(service: PermissionService, roleToMenuService: RoleToMenuService, checkController: BaseController);
    get base(): CrudController<Permission>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Permission> | Permission[]>;
    getOneAndDoStuff(req: CrudRequest): Promise<Permission>;
    coolFunction(id: string, req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    awesomePUT(id: string, req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOne(req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
