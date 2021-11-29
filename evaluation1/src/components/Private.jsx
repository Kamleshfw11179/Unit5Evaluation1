import { useContext } from "react"
import { AuthContext } from "../Authcontext/Authcontext"
import { Navigate } from "react-router";
export default function Private({children}){
    const {token} = useContext(AuthContext);
    console.log(token)
    if(!token){
        return(
        <Navigate to="/login"/>
        )
    }else{
        return(
            <>
            {children}
            </>
        )
    }
}