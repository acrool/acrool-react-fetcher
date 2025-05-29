import {useAuthState} from '@acrool/react-fetcher';
import {FCProps} from '@acrool/react-grid';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import {useLogin} from '@/store/main/auth/hook';

import {LoginRoot} from './styles';
import {ILoginProps} from './types';

/**
 * Login
 */
interface FormValues {
    account: string
    password: string
}

const Login = ({
    className,
    style,
}: ILoginProps & FCProps) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormValues>();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const login = useLogin();

    const onSubmit = async (data: FormValues) => {
        setError('');
        setSuccess('');
        try {
            await login({variables: {input: data}});
            setSuccess('登入成功！');
        } catch (err: any) {
            setError(err.message || '登入失敗');
        }
    };

    return <LoginRoot
        className={className}
        style={style}
    >
        <h2>Dashboard</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="帳號"
                defaultValue="tester"
                {...register('account', {required: '請輸入帳號'})}
                disabled={isSubmitting}
            />
            {errors.account && <p style={{color: 'red'}}>{errors.account.message}</p>}
            <input
                type="password"
                placeholder="密碼"
                defaultValue="acrool_is_good_task_system"
                {...register('password', {required: '請輸入密碼'})}
                disabled={isSubmitting}
            />
            {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
            <button type="submit" disabled={isSubmitting}>登入</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {success && <p style={{color: 'green'}}>{success}</p>}
        {/*{JSON.stringify(tokens)}*/}
    </LoginRoot>;
};

export default Login;
