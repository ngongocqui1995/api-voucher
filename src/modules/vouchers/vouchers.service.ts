import { Injectable, Request, Param, HttpStatus } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { Voucher } from './entities/voucher.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ENUM_MODEL } from 'src/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { Connection } from 'typeorm';
import {
  CrudRequest,
  CrudService,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from '../users/entities/user.entity';
import { ROLES } from '../roles/contants/contants';
import { I18nLang } from 'nestjs-i18n';
import to from 'await-to-js';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';

@Injectable()
export class VouchersService extends TypeOrmCrudService<Voucher> {
  status_name: string = ENUM_MODEL.STATUS;
  model_name: string = ENUM_MODEL.VOUCHER;

  constructor(
    @InjectRepository(Voucher) repo,
    private checkService: BaseService,
    private connection: Connection,
  ) {
    super(repo);
  }

  get base(): CrudService<Voucher> {
    return this;
  }

  async getManyBase(@ParsedRequest() req: CrudRequest, @Request() request) {
    const { parsed, options } = req;
    const user: User = request.user;
    const builder = await this.createBuilder(parsed, options);

    if (
      user &&
      ![ROLES.ROLE_ROOT, ROLES.ROLE_ADMIN].includes(user?.role?.code)
    ) {
      builder.andWhere(`"Voucher"."created_by" = :id`, { id: user.id });
    }

    return await this.doGetMany(builder, parsed, options);
  }

  async updateOneBase(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    const user: User = request.user;

    const [err] = await to(
      this.updateOne(req, <Voucher>{ ...dto, created_by: { id: user.id } }),
    );
    if (err) this.checkService.throwErrorSystem(err.message);
    return {
      status: HttpStatus.OK,
      message: await this.checkService.i18n.translate(
        'messages.ACTION.UPDATE',
        {
          lang,
          args: [
            {
              name: await this.checkService.i18n.translate(
                'models.' + this.model_name,
              ),
            },
          ],
        },
      ),
    };
  }

  async replaceOneBase(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    const [err] = await to(this.replaceOne(req, <Voucher>dto));
    if (err) this.checkService.throwErrorSystem(err.message);
    return {
      status: HttpStatus.OK,
      message: await this.checkService.i18n.translate(
        'messages.ACTION.UPDATE',
        {
          lang,
          args: [
            {
              name: await this.checkService.i18n.translate(
                'models.' + this.model_name,
              ),
            },
          ],
        },
      ),
    };
  }

  async createOneBase(
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    const user: User = request.user;

    const [err] = await to(
      this.createOne(req, <Voucher>{ ...dto, created_by: { id: user.id } }),
    );
    if (err) this.checkService.throwErrorSystem(err.message);

    return {
      status: HttpStatus.OK,
      message: await this.checkService.i18n.translate(
        'messages.ACTION.CREATE',
        {
          lang,
          args: [
            {
              name: await this.checkService.i18n.translate(
                'models.' + this.model_name,
              ),
            },
          ],
        },
      ),
    };
  }

  async updateStatus(
    id: string,
    updateStatusDTO: UpdateStatusDTO,
    @I18nLang() lang: string,
  ) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager
        .createQueryBuilder()
        .update(Voucher)
        .set({ status: updateStatusDTO.status })
        .where('id = :id', { id })
        .execute();

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      this.checkService.throwErrorSystem(err.message);
    } finally {
      await queryRunner.release();
    }

    return {
      status: HttpStatus.OK,
      message: await this.checkService.i18n.translate(
        'messages.ACTION.UPDATE',
        {
          lang,
          args: [
            {
              name: await this.checkService.i18n.translate(
                'models.' + this.status_name,
              ),
            },
          ],
        },
      ),
    };
  }
}
