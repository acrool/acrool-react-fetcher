import {block} from '@acrool/react-block';
import {dialog} from '@acrool/react-dialog';
import {FetcherException, useAuthState} from '@acrool/react-fetcher';
import {FCProps} from '@acrool/react-grid';
import {toast} from '@acrool/react-toaster';
import React, {useCallback, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import styled from 'styled-components';

import Banner from '@/components/Banner';
import {usePostAuthSignLoginMutation} from '@/store/__generated__';

import {LoginRoot} from './styles';
import {ILoginProps} from './types';

/**
 * Login
 */
interface IForm {
    account: string
    password: string
}

const Login = ({
    className,
    style,
}: ILoginProps & FCProps) => {
    const [AuthLoginMutation] = usePostAuthSignLoginMutation();
    const {updateTokens} = useAuthState();
    const HookForm = useForm<IForm>();

    /**
     * 送出表單
     * @param data
     */
    const handleSubmitHandler: SubmitHandler<IForm> = useCallback(formData => {
        block.show();

        AuthLoginMutation({
            variables: {
                body: formData,
            }
        })
            .unwrap()
            .then(res => {

                toast.success('登入成功');
                updateTokens(res.authTokens);

            })
            .catch(err => {
                if(err instanceof FetcherException){
                    console.log('err22', err.args);
                }else{
                    toast.error('登入失敗');
                }

            })
            .finally(() => {
                block.hide();
            });


    }, []);


    return <LoginRoot
        className={className}
        style={style}
    >
        <Banner/>
        <Wrapper>
            <h2>Login</h2>
            <form onSubmit={HookForm.handleSubmit(handleSubmitHandler)}>
                <Controller
                    control={HookForm.control}
                    name="account"
                    defaultValue="tester"
                    rules={{
                        required: '請輸入帳號',
                    }}
                    render={({field, fieldState}) => {
                        return <input
                            {...field}
                            placeholder="帳號"
                            autoComplete="username"
                            disabled={HookForm.formState.isSubmitting}
                        />;
                    }}
                />
                <Controller
                    control={HookForm.control}
                    name="password"
                    defaultValue="acrool_is_good_task_system"
                    rules={{
                        required: '請輸入密碼',
                    }}
                    render={({field, fieldState}) => {
                        return <input
                            {...field}
                            type="password"
                            placeholder="密碼"
                            disabled={HookForm.formState.isSubmitting}
                        />;
                    }}
                />
                <button type="submit" disabled={HookForm.formState.isSubmitting}>登入</button>
            </form>
        </Wrapper>


        {HookForm.formState.errors.password && <p style={{color: 'red'}}>{HookForm.formState.errors.password.message}</p>}
    </LoginRoot>;
};

export default Login;


const Wrapper = styled.div`
`;


