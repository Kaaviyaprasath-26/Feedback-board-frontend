import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .email()
        .required('Username is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});