import { createContext } from "react";
import {useState} from "react"

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [token,setToken] = useState(123)
    return(
        <>
        <AuthContext.Provider value = {{token,setToken}}>
        {children}
        </AuthContext.Provider>
        </>
    )
}