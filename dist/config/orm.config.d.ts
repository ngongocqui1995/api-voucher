import { TypeOrmModuleOptions } from '@nestjs/typeorm';
interface ConfigState {
    database: TypeOrmModuleOptions;
}
declare const _default: () => ConfigState;
export default _default;
