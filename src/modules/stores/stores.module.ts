import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { BaseService } from 'src/common/base.service';
import { BaseController } from 'src/common/base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Store])],
  exports: [TypeOrmModule, StoresService],
  controllers: [StoresController],
  providers: [StoresService, BaseService, BaseController],
})
export class StoresModule {}
