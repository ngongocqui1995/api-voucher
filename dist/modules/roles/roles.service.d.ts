import { HttpStatus } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Role } from './entities/role.entity';
import { CrudRequest, CrudService } from '@nestjsx/crud';
import { CreateRoleDto } from './dto/create-role.dto';
import { BaseService } from '../../common/base.service';
import { Connection } from 'typeorm';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
export declare class RolesService extends TypeOrmCrudService<Role> {
    private checkService;
    private connection;
    status_name: string;
    model_name: string;
    constructor(repo: any, checkService: BaseService, connection: Connection);
    get base(): CrudService<Role>;
    updateOneBase(id: string, req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    replaceOneBase(id: string, req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneBase(req: CrudRequest, dto: CreateRoleDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    replaceAvatarMany(linkOld: string, linkNew: string): Promise<{
        status: HttpStatus;
    }>;
}
