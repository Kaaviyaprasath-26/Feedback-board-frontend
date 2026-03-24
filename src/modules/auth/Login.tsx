import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../schema/auth.schema';
import { login } from '../../api/endpoints/auth.api';
import type { LoginInterfce } from '../../interface/auth.interface';

const LoginPage = () => {
    const navigate = useNavigate();
    const submitLogin = async (values: LoginInterfce) => {
        try {
            await login(values);

            setTimeout(() => {
                toast.success('Login successfully...');
                navigate('/');
            }, 600);

        } catch (error) {
            toast.error("Login Failed...");
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

                <Formik
                    initialValues={{ userName: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        submitLogin(values);
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Username */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="userName">
                                    Username
                                </label>
                                <Field
                                    name="userName"
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <ErrorMessage
                                    name="userName"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;