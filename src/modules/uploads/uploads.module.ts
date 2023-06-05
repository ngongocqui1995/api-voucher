import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { ConfigModule } from '@nestjs/config';
import { BaseController } from 'src/common/base.controller';
import { BaseService } from 'src/common/base.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UploadsController],
  providers: [BaseController, BaseService],
})
export class UploadsModule {}
