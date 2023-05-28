import { Menu } from 'src/modules/menus/entities/menu.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { PermissionCreate } from '../interfaces/permission';
export declare class CreateRoleToMenuDto {
    type: string;
    role: Role;
    menu: Menu;
    permissions: PermissionCreate[];
}
