import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/modules/users/dto/login-user.dto';
import { LoginRsp } from 'src/modules/users/interfaces/user';
export declare class AuthController {
    private readonly authService;
    model_name: string;
    constructor(authService: AuthService);
    login(user: LoginUserDto, lang: string): Promise<LoginRsp>;
    profile(req: any): Promise<any>;
}
