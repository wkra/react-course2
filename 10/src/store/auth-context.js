import React, { useEffect, useState } from "react";

const isLoggedInStorageKey = 'isLoggedIn';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    },
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem(isLoggedInStorageKey);
        if (storedUserLoggedInInformation) {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem(isLoggedInStorageKey);
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem(isLoggedInStorageKey, '1');
        setIsLoggedIn(true);
    };
    return <AuthContext.Provider value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;