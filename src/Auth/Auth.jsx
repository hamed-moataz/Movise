import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user , setUser] = useState(null)
    const login = (user)=>{
        setUser(user)
    }
    const logout = ()=>{
        setUser(null)
    }        
    return <AuthContext.Provider value={{user }}>
        {children}
    </AuthContext.Provider>
}