import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Movies from "./components/Movies"
import Navbar from "./components/Navbar"
import Private from "./components/Private"
export default function App(){
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/dashboard" element={<Private> <Dashboard /></Private>}></Route>
      <Route path="/movies" element={<Private><Movies /></Private>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*"></Route>
    </Routes>
</>
  )
}