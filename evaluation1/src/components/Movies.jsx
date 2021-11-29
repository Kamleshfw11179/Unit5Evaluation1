import { useDispatch, useSelector } from "react-redux"
import { getDataloading, getDatasuccess, getDatafailure} from "../redux/dataReducer/action"
import {useEffect} from "react"
import axios from "axios"
export default function Movies(){
    const {loading,error,data} = useSelector(state=>state);
    console.log(data)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
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
       {loading?<h1>Loading...</h1>:data.map((e)=>{return(
           <div>
           <img src={e.Poster} alt=""/>
           <h1 style={{color:"black"}}>{e.Title}</h1>
           </div>
           )})}
        </>
    )
}