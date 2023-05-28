import { HttpStatus } from '@nestjs/common';
import { CrudRequest, CrudService } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BaseService } from 'src/common/base.service';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
import { Connection } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenusService extends TypeOrmCrudService<Menu> {
    private checkService;
    private connection;
    model_name: string;
    status_name: string;
    constructor(repo: any, checkService: BaseService, connection: Connection);
    get base(): CrudService<Menu>;
    updateOneBase(id: string, req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        data: Menu;
        message: string;
    }>;
    replaceOneBase(id: string, req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneBase(req: CrudRequest, dto: CreateMenuDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
