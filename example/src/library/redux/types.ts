import {AnyAction} from 'redux';

import {TAppState} from '@/store/appReducer';


/**============ source =====================
 *     type IActionCreators = {
 *          login: {account: string, password: string};
 *          loginBegin: null;
 *          loginSuccess: {accessToken: accessToken};
 *          loginFail: {message: string};
 *     }
 *=========================================/

 /**
 * use: function* login(action: IAction<IActionCreators, 'login'>)
 * res: login: (state) => {return state;}
 loginSuccess: (state, action) => {return state.merge({isSubmitting: false, accessToken: action.payload.accessToken})},
 */
export type TReducers<A, S> = {
    [MK in keyof A]: (state: S, action: {payload: A[MK]}) => S | void;
}


/**
 * use: TActionCreators<Action>
 *
 * <if null>
 * res: yield* put(Actions.loginBegin());
 *
 * <else>
 * res: yield* put(Actions.login({account: 'image', password: 'aa1234'}));
 */
export type TActionCreators<A> = {
    [MK in keyof A]: A[MK] extends NonNullable<A[MK]> ?
        (args: A[MK]) => AnyAction :

        (() => AnyAction) &
        ((args: A[MK]) => AnyAction)  ;
}


export type TSelectorFunc<R = unknown> = (state: TAppState) => R;

export interface ITypedSelector<TState> {
    <TSelected>(
        selector: (state: TState) => TSelected,
    ): TSelected
}
