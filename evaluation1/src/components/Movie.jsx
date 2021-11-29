import { useParams } from "react-router"
import {useEffect,useState} from "react"
import { useSelector, useDispatch} from "react-redux"
import { addDatasuccess } from "../redux/dataReducer/action"
import axios from "axios"
export default function Movie(){
    useEffect(()=>{
        getData()
    },[])
    const dispatch = useDispatch();
    const {id} = useParams();
    const [state,setState] = useState({});
    async function getData(){
        let res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=6488d8e6`);
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
        <button onClick={()=>dispatch(addDatasuccess(state.imdbID))}>Book</button>
        </div>
    )
}