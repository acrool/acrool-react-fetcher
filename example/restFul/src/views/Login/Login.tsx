import {block} from '@acrool/react-block';
import {dialog} from '@acrool/react-dialog';
import {FetcherException, useAuthState} from '@acrool/react-fetcher';
import {FCProps} from '@acrool/react-grid';
import {toast} from '@acrool/react-toaster';
import React, {useCallback} from 'react';
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
                    const errFormat = err as FetcherException<{newAccount: string}>;
                    dialog.warning(`建議帳號 ${errFormat.args.newAccount}`);
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

        <div>tester1: 正常登入</div>
        <div>tester2: 特定 error.code 帳號重複，忽略全域錯誤</div>
        <div>其他: 全域錯誤</div>


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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    h2 {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 300px;

        input {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 0.5rem;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:disabled {
                background: #ccc;
                cursor: not-allowed;
            }
        }
    }
`;


