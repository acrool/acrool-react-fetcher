import React, {createContext, ReactNode, useCallback, useContext, useState} from 'react';


interface AuthState {
   isAuth: boolean
    setIsAuth: (newIsAuth: boolean) => void
}

const AuthStateContext = createContext<AuthState>({
    isAuth: false,
    setIsAuth: () => console.warn('auth state is undefined'),
});

export const useAuthState = () => useContext(AuthStateContext);

interface AuthStateProviderProps {
    children: ReactNode
}

const AuthStateProvider: React.FC<AuthStateProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);


    const handleSetIsAuth = (newIsAuth: boolean) => {
        setIsAuth(newIsAuth);
    };

    return (
        <AuthStateContext.Provider
            value={{
                isAuth: isAuth,
                setIsAuth: handleSetIsAuth,
            }}>
            {children}
        </AuthStateContext.Provider>
    );
};

export default AuthStateProvider;
