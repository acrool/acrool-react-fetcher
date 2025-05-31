import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuthState } from '@acrool/react-fetcher';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePutAuthLoginMutation } from '@/store/__generated__';
import { LoginRoot } from './styles';
const Login = ({ className, style, }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [AuthLoginMutation] = usePutAuthLoginMutation();
    const { updateTokens } = useAuthState();
    const onSubmit = async (data) => {
        setError('');
        setSuccess('');
        await AuthLoginMutation({ variables: { input: data } })
            .unwrap()
            .then(res => {
            setSuccess('登入成功！');
            updateTokens(res.authLogin.authTokens);
        })
            .catch(err => {
            setError(err.message || '登入失敗');
        });
    };
    return _jsxs(LoginRoot, { className: className, style: style, children: [_jsx("h2", { children: "Dashboard" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("input", { type: "text", placeholder: "\u5E33\u865F", defaultValue: "tester", ...register('account', { required: '請輸入帳號' }), disabled: isSubmitting }), errors.account && _jsx("p", { style: { color: 'red' }, children: errors.account.message }), _jsx("input", { type: "password", placeholder: "\u5BC6\u78BC", defaultValue: "acrool_is_good_task_system", ...register('password', { required: '請輸入密碼' }), disabled: isSubmitting }), errors.password && _jsx("p", { style: { color: 'red' }, children: errors.password.message }), _jsx("button", { type: "submit", disabled: isSubmitting, children: "\u767B\u5165" })] }), error && _jsx("p", { style: { color: 'red' }, children: error }), success && _jsx("p", { style: { color: 'green' }, children: success })] });
};
export default Login;
