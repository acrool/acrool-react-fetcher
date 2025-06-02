import {SelectEffect, Tail} from '@redux-saga/core/types/effects';


declare module 'react' {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare module 'react-router' {
    export function useParams<Params extends { [K in keyof Params]?: string } = {}>(): Params;
}

declare module 'react-redux' {
    export const useAppSelector: <TState = IAppState, Selected = unknown>(selector: (state: TState) => Selected, equalityFn?: EqualityFn<Selected> | undefined) => Selected;
    interface DefaultRootState extends IAppState{}
}

