import { HttpStatus } from '@nestjs/common';
import { CrudRequest, CrudService } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BaseService } from 'src/common/base.service';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';
import { Connection } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permission.entity';
export declare class PermissionService extends TypeOrmCrudService<Permission> {
    private checkService;
    private connection;
    model_name: string;
    status_name: string;
    constructor(repo: any, checkService: BaseService, connection: Connection);
    get base(): CrudService<Permission>;
    updateOneBase(id: string, req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    replaceOneBase(id: string, req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    createOneBase(req: CrudRequest, dto: CreatePermissionDto, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateStatus(id: string, updateStatusDTO: UpdateStatusDTO, lang: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
