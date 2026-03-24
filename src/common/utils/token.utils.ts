import Cookies from 'js-cookie';

const TOKEN_KEY = 'token'

export const setToken = (token:string) => {
    return Cookies.set(TOKEN_KEY, token, {expires:Number(import.meta.env.VITE_TOKEN_EXPIRES)})
};

export const getToken = (): string | undefined => {
    return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
};