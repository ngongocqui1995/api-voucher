import { RoleToMenuService } from './role-to-menu.service';
import { CreateRoleToMenuDto } from './dto/create-role-to-menu.dto';
import { CrudController, CrudRequest } from '@nestjsx/crud';
import { RoleToMenu } from './entities/role-to-menu.entity';
export declare class RoleToMenuController implements CrudController<RoleToMenu> {
    service: RoleToMenuService;
    constructor(service: RoleToMenuService);
    get base(): CrudController<RoleToMenu>;
    getMany(req: CrudRequest): Promise<RoleToMenu[] | import("@nestjsx/crud").GetManyDefaultResponse<RoleToMenu>>;
    getOneAndDoStuff(req: CrudRequest): Promise<RoleToMenu>;
    coolFunction(id: string, req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    awesomePUT(id: string, req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    deleteOne(req: CrudRequest, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOne(req: CrudRequest, dto: CreateRoleToMenuDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
