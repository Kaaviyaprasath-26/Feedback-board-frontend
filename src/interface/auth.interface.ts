export interface LoginInterfce {
    userName:string;
    password:string;
}

export interface LoginResponcesInterface {
    statusCode: number;
    success: boolean;
    message: string;
    accessToken: string;
}

export interface ResetPasswordInterface {
    userName:string;
    password:string;
    currentPassword:string;
    newPassword:string;
    reConfirmPassword:string;
};