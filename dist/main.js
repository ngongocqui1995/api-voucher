"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'debug', 'error', 'verbose', 'warn'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Movie API')
        .setDescription('The Movie API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || process.env.APP_PORT);
    console.log(`Application is Environment: ${process.env.ENVIRONMENT}`);
    console.log(`Application is running on: ${await app.getUrl()}`);
    return app;
}
exports.default = bootstrap();
//# sourceMappingURL=main.js.map