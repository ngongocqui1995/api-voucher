import {
  Controller,
  Body,
  Param,
  UseGuards,
  Put,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Campaign } from './entities/campaign.entity';
import { ENUM_MODEL } from 'src/common';
import { BaseController } from 'src/common/base.controller';
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles-guard';
import { RequireRoles } from 'src/auth/decorator/roles.decorator';
import { ROLES } from '../roles/contants/contants';
import { I18nLang } from 'nestjs-i18n';
import { UpdateStatusDTO } from 'src/common/dto/update-status.dto';

@ApiTags('Campaigns')
@Crud({
  model: {
    type: Campaign,
  },
  dto: {
    create: CreateCampaignDto,
    update: UpdateCampaignDto,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase'],
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
})
@Controller('campaigns')
export class CampaignsController implements CrudController<Campaign> {
  model_name: string = ENUM_MODEL.CAMPAIGN;

  constructor(
    public service: CampaignsService,
    private checkController: BaseController,
  ) {}

  get base(): CrudController<Campaign> {
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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRoles(ROLES.ROLE_ROOT)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest) {
    return this.base.getOneBase(req);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRoles(ROLES.ROLE_ROOT)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('updateOneBase')
  coolFunction(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateCampaignDto,
    @I18nLang() lang: string,
  ) {
    return this.service.updateOneBase(id, req, request, dto, lang);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRoles(ROLES.ROLE_ROOT)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override('replaceOneBase')
  awesomePUT(
    @Param('id') id: string,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateCampaignDto,
    @I18nLang() lang: string,
  ) {
    return this.service.replaceOneBase(id, req, dto, lang);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRoles(ROLES.ROLE_ROOT)
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer {{token}}',
  })
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @Request() request,
    @ParsedBody() dto: CreateCampaignDto,
    @I18nLang() lang: string,
  ) {
    return this.service.createOneBase(req, request, dto, lang);
  }

  @Put('status/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @RequireRoles(ROLES.ROLE_ROOT)
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
