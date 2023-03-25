import axios from "axios";
import {CREATEBOARD,FAILURE, RESET, LOADING, GETBOARD, CREATECARD, GETALLCARD, DELETECARD, CREATELABEL, GETALLLABEL} from "./board.types"
let url="https://gleaming-opaque-picture.glitch.me/"



export const createboard = (data) => async (dispatch) => {
    let res=axios.post(url+"board/create", data, {headers:{token:localStorage.getItem("token")}})
    return res
}

export const getboard = (id) => async (dispatch) => {
    axios.get(url+"board/show?boardid="+id, {headers:{token:localStorage.getItem("token")}})
    .then((e)=>dispatch({type:GETBOARD, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const createcard = (data) => async (dispatch) => {
    axios.post(url+"card/create",data)
    .then((e)=>dispatch({type:CREATECARD, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const getallcards = (id) => async (dispatch) => {
    axios.get(url+"card/getallcard?board="+id)
    .then((e)=>dispatch({type:GETALLCARD, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const deletecards = (id) => async (dispatch) => {
    axios.delete(url+"card/deletecard?card="+id)
    .then((e)=>dispatch({type:DELETECARD, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const createlabel = (data) => async (dispatch) => {
    axios.post(url+"label/create",data)
    .then((e)=>dispatch({type:CREATELABEL, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const getalllabel = (id) => async (dispatch) => {
    axios.get(url+"label/getalllabel?board="+id)
    .then((e)=>dispatch({type:GETALLLABEL, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}


export const reset = () => (dispatch) => {
    dispatch({type:RESET})
}