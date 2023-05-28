import { Logger } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
export declare class BaseController {
    logger: Logger;
    i18n: I18nService;
    checkStatusUser: (id: string, userId: string) => Promise<any>;
    checkFileExist: (check: boolean) => Promise<any>;
    checkStatusMovie: (check: boolean, status: string) => Promise<any>;
    checkStatusPartMovie: (check: boolean, status: string) => Promise<any>;
    checkStatusFansub: (check: boolean, status: string) => Promise<any>;
    checkStatusMovieGroup: (check: boolean, status: string) => Promise<any>;
    checkStatusCategories: (check: boolean, status: string) => Promise<any>;
    checkStatusRole: (check: boolean, status: string) => Promise<any>;
    checkStatusPermission: (check: boolean, status: string) => Promise<any>;
    checkStatusMenu: (check: boolean, status: string) => Promise<any>;
    throwErrorSystem: (message: any) => never;
}
