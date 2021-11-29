import {useState} from "react"
export default function Login(){
    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value
        setUser({...user,[name]:value})
    }
    return(
        <div>
            <label>Email</label>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
            <label>Password</label>
            <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
            <button onClick={()=>alert("hello")}></button>
        </div>
    )
}