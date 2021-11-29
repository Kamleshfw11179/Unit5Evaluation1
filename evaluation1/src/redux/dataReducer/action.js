import {GET_DATA_FAILURE,GET_DATA_LODING,GET_DATA_SUCCESS,ADD_DATA_FAILURE,ADD_DATA_SUCCESS,ADD_DATA_LODING} from "./actionTypes"


function getDataloading(data){
    return{
        type:GET_DATA_LODING,
        payload:data
    }
}
function getDatasuccess(data){
    return{
        type:GET_DATA_SUCCESS,
        payload:data
    }
}
function getDatafailure(data){
    return{
        type:GET_DATA_FAILURE,
        payload:data
    }
}
function addDataloading(data){
    return{
        type:ADD_DATA_LODING,
        payload:data
    }
}
function addDatasuccess(data){
    return{
        type:ADD_DATA_SUCCESS,
        payload:data
    }
}
function addDatafailure(data){
    return{
        type:ADD_DATA_FAILURE,
        payload:data
    }
};


export {addDatafailure,addDataloading,addDatasuccess,getDatafailure,getDataloading,getDatasuccess}