import { CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/modules/users/entities/user.entity';
export declare class RolesGuard implements CanActivate {
    private reflector;
    logger: Logger;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    isMatchRoles(roles: string[], user: User): Promise<boolean>;
}
