export declare class PasswordHasherService {
    hashPassword(password: string): string;
    comparePassword(plainText: any, encryptedPass: any): boolean;
}
