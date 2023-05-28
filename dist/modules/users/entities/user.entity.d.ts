import { BaseEntity } from '../../../common/entities/base.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
export declare class User extends BaseEntity {
    id: string;
    email: string;
    password: string;
    role: Role;
    name: string;
    avatar: string;
    gender: string;
    phone: string;
    code: string;
    price: number;
    status: string;
}
