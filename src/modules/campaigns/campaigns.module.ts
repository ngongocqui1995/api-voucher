import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { BaseService } from 'src/common/base.service';
import { BaseController } from 'src/common/base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Campaign } from './entities/campaign.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Campaign])],
  exports: [TypeOrmModule, CampaignsService],
  controllers: [CampaignsController],
  providers: [CampaignsService, BaseService, BaseController],
})
export class CampaignsModule {}
