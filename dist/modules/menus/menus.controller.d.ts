import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
import { CrudController, CrudRequest } from '@nestjsx/crud';
import { BaseController } from 'src/common/base.controller';
import { RoleToMenuService } from '../role-to-menu/role-to-menu.service';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
export declare class MenusController implements CrudController<Menu> {
    service: MenusService;
    private checkController;
    private roleToMenuService;
    constructor(service: MenusService, checkController: BaseController, roleToMenuService: RoleToMenuService);
    get base(): CrudController<Menu>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Menu> | Menu[]>;
    getOneAndDoStuff(req: CrudRequest): Promise<Menu>;
    coolFunction(id: string, req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        data: Menu;
        message: string;
    }>;
    awesomePUT(id: string, req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createOne(req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
