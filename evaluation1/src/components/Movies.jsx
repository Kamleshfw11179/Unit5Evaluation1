import { useDispatch, useSelector } from "react-redux"
import { getDataloading, getDatasuccess, getDatafailure} from "../redux/dataReducer/action"
import {useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
export default function Movies(){
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
  
    const {loading,error,data} = useSelector(state=>state);
    console.log(data)
    async function getData(){
        dispatch(getDataloading())
        try{
            let res = await axios.get("https://www.omdbapi.com/?s=batman&apikey=6488d8e6");
           dispatch(getDatasuccess(res.data.Search))
        }
        catch(err){
            dispatch(getDatafailure(err))
        }
    }
    return(
        <>
        <div>
        {loading?<h1>Loading...</h1>:
        <div>
        {data.map((e)=>{
            console.log(e)
            return(
                <Link to={`/movie/${e.imdbID}`}>
                <img src={e.Poster} alt=""/>
                <h1>{e.Title}</h1>
                </Link>
            )
        })}
        </div>
        }
        </div>
        </>
    )
}