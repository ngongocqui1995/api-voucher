import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { BaseController } from 'src/common/base.controller';
import { Voucher } from './entities/voucher.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Voucher])],
  exports: [TypeOrmModule, VouchersService],
  controllers: [VouchersController],
  providers: [VouchersService, BaseService, BaseController],
})
export class VouchersModule {}
