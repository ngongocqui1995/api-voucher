import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { RoleToMenu } from 'src/modules/role-to-menu/entities/role-to-menu.entity';
export declare class Role extends BaseEntity {
    id: string;
    code: string;
    avatar: string;
    name: string;
    color: string;
    users: User[];
    menus: RoleToMenu[];
    status: string;
}
