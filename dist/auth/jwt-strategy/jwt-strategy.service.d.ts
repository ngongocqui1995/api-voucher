import { UsersService } from '../../modules/users/users.service';
declare const JwtStrategyService_base: new (...args: any[]) => any;
export declare class JwtStrategyService extends JwtStrategyService_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: any): Promise<import("../../modules/users/entities/user.entity").User>;
}
export {};
