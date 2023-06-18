import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AcceptLanguageResolver,
  CookieResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configuration from './config/orm.config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/i18n/exceptions-filter';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { RoleToMenuModule } from './modules/role-to-menu/role-to-menu.module';
import { MenusModule } from './modules/menus/menus.module';
import { PermissionModule } from './modules/permission/permission.module';
import { StoresModule } from './modules/stores/stores.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';
import { VouchersModule } from './modules/vouchers/vouchers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configuration().database),
    I18nModule.forRoot({
      fallbackLanguage: process.env.DEFAULT_LANGUAGE,
      fallbacks: {
        'en-*': 'en',
        'vi-*': 'vi',
      },
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },
        new HeaderResolver(['x-custom-lang']),
        AcceptLanguageResolver,
        new CookieResolver(['lang', 'locale', 'l']),
      ],
    }),
    AuthModule,
    UsersModule,
    RolesModule,
    RoleToMenuModule,
    MenusModule,
    PermissionModule,
    StoresModule,
    UploadsModule,
    CampaignsModule,
    VouchersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
