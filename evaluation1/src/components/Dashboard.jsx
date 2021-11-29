import { useSelector ,useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import axios from "axios";
export default function Dashboard(){
    const {userData} = useSelector(state=>state);
    useEffect(()=>{
        getData()
    },[])
    const dispatch = useDispatch();
    const [state,setState] = useState({});
    async function getData(){
        let res = await axios.get(`https://www.omdbapi.com/?i=${userData}&apikey=6488d8e6`);
        console.log(res)
        setState(res.data)
    }
    return(
        <div style={{margin:"auto"}}>
        <h1>Movie</h1>
        <img src={state.Poster} alt=""></img>
        <h2>{state.Title}</h2>
        |<h3>Directed by:{state.Director}</h3>
        <h4>{state.Plot}</h4>
        <h3>Booked</h3>
        </div>
    )
}