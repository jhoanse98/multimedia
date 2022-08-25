import { createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider
            value={{
                user:{}
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
