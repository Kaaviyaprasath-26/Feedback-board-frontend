import { api } from "../axios";
import type { LoginInterfce, ResetPasswordInterface } from "../../interface/auth.interface";
import type { LoginResponcesInterface } from "../../interface/auth.interface";
import { setToken } from "../../common/utils/token.utils";

export const login = async (payload:LoginInterfce) => {
    const data = await api.post<LoginResponcesInterface>('/api/auth/login',payload);
    setToken(data?.data?.accessToken);
    return data
};

export const forgotPassword = async(payload:ResetPasswordInterface) => {
    return await api.post('/api/auth/reset-password', payload);
};