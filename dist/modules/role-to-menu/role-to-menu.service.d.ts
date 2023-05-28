import { HttpStatus } from '@nestjs/common';
import { CrudRequest, CrudService } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BaseService } from 'src/common/base.service';
import { Connection } from 'typeorm';
import { MenusService } from '../menus/menus.service';
import { RolesService } from '../roles/roles.service';
import { CreateRoleToMenuDto } from './dto/create-role-to-menu.dto';
import { RoleToMenu } from './entities/role-to-menu.entity';
export declare class RoleToMenuService extends TypeOrmCrudService<RoleToMenu> {
    private checkService;
    private menuService;
    private roleService;
    private connection;
    model_name: string;
    constructor(repo: any, checkService: BaseService, menuService: MenusService, roleService: RolesService, connection: Connection);
    get base(): CrudService<RoleToMenu>;
    deleteOneBase(req: CrudRequest, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateOneBase(id: string, req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    replaceOneBase(id: string, req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneBase(req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
