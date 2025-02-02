import { HttpStatus, Injectable, Param } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Store } from './entities/store.entity';
import { ENUM_MODEL } from 'src/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { Connection, Not } from 'typeorm';
import {
  CrudRequest,
  CrudService,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { I18nLang } from 'nestjs-i18n';
import to from 'await-to-js';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';

@Injectable()
export class StoresService extends TypeOrmCrudService<Store> {
  status_name: string = ENUM_MODEL.STATUS;
  model_name: string = ENUM_MODEL.STORE;

  constructor(
    @InjectRepository(Store) repo,
    private checkService: BaseService,
    private connection: Connection,
  ) {
    super(repo);
  }

  get base(): CrudService<Store> {
    return this;
  }

  async updateOneBase(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateStoreDto,
    @I18nLang() lang: string,
  ) {
    const codeExist = await this.findOne({
      where: { code: dto.code, id: Not(id) },
    });
    this.checkService.checkCodeExist(!!codeExist);

    const [err] = await to(this.updateOne(req, <Store>dto));
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
    @ParsedBody() dto: CreateStoreDto,
    @I18nLang() lang: string,
  ) {
    const codeExist = await this.findOne({
      where: { code: dto.code, id: Not(id) },
    });
    this.checkService.checkCodeExist(!!codeExist);

    const [err] = await to(this.replaceOne(req, <Store>dto));
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
    @ParsedBody() dto: CreateStoreDto,
    @I18nLang() lang: string,
  ) {
    const codeExist = await this.findOne({
      where: { code: dto.code },
    });
    this.checkService.checkCodeExist(!!codeExist);

    const [err] = await to(this.createOne(req, <Store>dto));
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
        .update(Store)
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
