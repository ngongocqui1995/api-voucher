import { I18nService } from 'nestjs-i18n';
import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly i18n;
    constructor(i18n: I18nService);
    catch(exception: HttpException, host: ArgumentsHost): Promise<void>;
}
