import {GET_DATA_FAILURE,GET_DATA_LODING,GET_DATA_SUCCESS,ADD_DATA_FAILURE,ADD_DATA_SUCCESS,ADD_DATA_LOADING} from "./actionTypes"


const init = {
    loading:false,
    data:[],
    userData:[],
    error:false
}


function dataReducer(state=init,{type,payload}){

    switch(type){
        case GET_DATA_LODING:{
            return{
                loading:true,
                data:[],
                userData:[],
                error:false
            }
        }
        case GET_DATA_SUCCESS:{
            return{
                ...state,
                loading:false,
                data:[...state.data,...payload]
            }
        }
        case GET_DATA_FAILURE:{
            return{
                loading:false,
                data:[],
                userData:[],
                error:payload
            }
        }
        case ADD_DATA_LOADING:{
            return{
                loading:true,
                data:[],
                userData:[],
                error:false
            }
        }
        case ADD_DATA_SUCCESS:{
          
            return{
                loading:false,
                data:[],
                userData:[...state.userData,payload],
                error:false
            }
        }
        case ADD_DATA_FAILURE:{
            return{
                loading:false,
                data:[],
                userData:[],
                error:true
            }
        }
        default:
            return{
                ...state
            }
    }
}

export {dataReducer}