import { Role } from 'src/modules/roles/entities/role.entity';
export declare class CreateUserDto {
    email: string;
    password: string;
    role: Role;
    name: string;
    avatar: string;
    phone: string;
    price: number;
    gender: string;
    status: string;
}
