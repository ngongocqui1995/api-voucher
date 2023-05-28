import { BaseEntity } from 'src/common/entities/base.entity';
import { RoleToMenu } from 'src/modules/role-to-menu/entities/role-to-menu.entity';
export declare class Menu extends BaseEntity {
    id: string;
    url: string;
    type: string;
    roles: RoleToMenu[];
    status: string;
}
