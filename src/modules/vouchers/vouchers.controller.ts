import {
  Controller,
  Body,
  Param,
  Request,
  UseGuards,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { ENUM_MODEL } from 'src/common';
import { BaseController } from 'src/common/base.controller';
import { Voucher } from './entities/voucher.entity';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { I18nLang } from 'nestjs-i18n';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';

@ApiTags('Vouchers')
@Crud({
  model: {
    type: Voucher,
  },
  dto: {
    create: CreateVoucherDto,
    update: UpdateVoucherDto,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase'],
  },
  query: {
    join: {
      created_by: {
        allow: undefined,
      },
    },
    exclude: ['id'],
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
})
@Controller('vouchers')
export class VouchersController implements CrudController<Voucher> {
  model_name: string = ENUM_MODEL.VOUCHER;

  constructor(
    public service: VouchersService,
    private checkController: BaseController,
  ) {}

  get base(): CrudController<Voucher> {
    return this;
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override()
  getMany(@ParsedRequest() req: CrudRequest, @Request() request) {
    return this.service.getManyBase(req, request);
  }

  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest) {
    return this.base.getOneBase(req);
  }

  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('updateOneBase')
  coolFunction(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    return this.service.updateOneBase(id, req, request, dto, lang);
  }

  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('replaceOneBase')
  awesomePUT(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    return this.service.replaceOneBase(id, req, dto, lang);
  }

  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateVoucherDto,
    @I18nLang() lang: string,
  ) {
    return this.service.createOneBase(req, request, dto, lang);
  }

  @Put('status/:id')
  @UseGuards(JwtAuthGuard)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @ApiParam({
    required: true,
    name: 'id',
    type: String,
    example: '1',
    description: 'Id',
  })
  @ApiResponse({ status: 200, type: UpdateStatusDTO, description: 'Success' })
  async updateStatus(
    @Param('id') id: string,
    @Body(ValidationPipe) updateStatusDTO: UpdateStatusDTO,
    @I18nLang() lang: string,
  ) {
    return this.service.updateStatus(id, updateStatusDTO, lang);
  }
}
