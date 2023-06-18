import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'debug', 'error', 'verbose', 'warn'],
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors({
    origin: [
      'http://localhost:8000',
      'https://portalvoucher-ngongocqui.cloud.okteto.net',
    ],
    allowedHeaders: ['Content-Type', 'x-custom-lang', 'authorization'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'UPDATE', 'OPTIONS'],
    credentials: true,
  });

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
