import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@src': path.resolve(__dirname, '..', 'src'),
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'debug', 'error', 'verbose', 'warn'],
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Movie API')
    .setDescription('The Movie API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || process.env.APP_PORT);
  console.log(`Application is Environment: ${process.env.ENVIRONMENT}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
