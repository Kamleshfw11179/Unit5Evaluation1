import "./css/login.css"
import {useState} from "react"
import { useContext } from "react";
import { AuthContext } from "../Authcontext/Authcontext";
import axios from "axios"
import { Navigate } from "react-router";
export default function Login(){
    const {setToken} = useContext(AuthContext);
    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value
        setUser({...user,[name]:value})
    }

    async function login(){
        try{
            let res = await axios.post("https://reqres.in/api/login",user);
            setToken(res.data.token);
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="loginDiv">
            <label>Email</label>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
            <label>Password</label>
            <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
            <button onClick={login}>Login</button>
        </div>
    )
}