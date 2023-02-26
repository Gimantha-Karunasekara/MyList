import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext({
    isLoggedIn: true,
    userId: null,
    userName: null,
    setUserName: () => {},
    login: () => {},
    logout: () => {}
});

const AuthContextProvider = props => {
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();

    const login = useCallback((id, name) => {
        setUserId(id);
        setUserName(name)
    },[])

    const logout = useCallback(() => {
        setUserId(null);
        setUserName(null);
    },[]);

    return(
        <AuthContext.Provider value={{isLoggedIn: !!userId, userId: userId, userName: userName, login : login, logout: logout}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;