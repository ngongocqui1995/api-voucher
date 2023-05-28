import { BaseEntity } from 'src/common/entities/base.entity';
export declare class Permission extends BaseEntity {
    id: string;
    code: string;
    name: string;
    color: string;
    status: string;
}
