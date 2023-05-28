"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        database: {
            type: 'postgres',
            username: process.env.USER_POSTGRES,
            password: process.env.PASS_POSTGRES,
            port: +process.env.PORT_POSTGRES,
            host: process.env.HOST_POSTGRES,
            database: process.env.DB_POSTGRES,
            subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
            synchronize: process.env.SYNCHRONIZE_POSTGRES === 'true',
            logging: true,
            autoLoadEntities: true,
            ssl: {
                rejectUnauthorized: false,
            },
        },
    };
};
//# sourceMappingURL=orm.config.js.map