import "./css/navBar.css"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navMain">
        <h3>Logo</h3>
            <div className="navMain2">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}