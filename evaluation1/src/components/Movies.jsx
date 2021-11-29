import { useDispatch, useSelector } from "react-redux"
import { getDataloading, getDatasuccess, getDatafailure} from "../redux/dataReducer/action"
import {useEffect} from "react"
import axios from "axios"
export default function Movies(){
    const {loading,error} = useSelector(state=>state);
    const x = useSelector(state=>state.data);
    console.log(x)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    let arr = [1,2,3,4,5] 
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
        <div>{x.map((e)=>{console.log(<div><h1>{e.Title}</h1></div>)})}</div>
       {loading?<div><h1>Loading...</h1></div>:x.map((e)=>{return(<div><h1>{e.Title}</h1></div>)})}
        </>
    )
}