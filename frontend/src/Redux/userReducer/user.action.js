import axios from "axios";
import {USERSIGNUP, USERLOGIN, FAILURE, RESET, LOADING, GETUSER, GETALLBOARD, DELETEBOARD} from "./user.types"
let url="https://gleaming-opaque-picture.glitch.me/"



export const signup = (data) => async (dispatch) => {
    axios.post(url+"user/signup", data)
    .then((e)=>dispatch({type:USERSIGNUP, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const login = (data) => async (dispatch) => {
    axios.post(url+"user/login", data)
    .then((e)=>dispatch({type:USERLOGIN, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const getuser = () => async (dispatch) => {
    // dispatch({type:LOADING})
    axios.get(url+"user/userdata", {headers:{token:localStorage.getItem("token")}})
    .then((e)=>dispatch({type:GETUSER, payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const getallboard = () => async (dispatch) => {
    axios.get(url+"board/getallboard", {headers:{token:localStorage.getItem("token")}})
    .then((e)=>dispatch({type:GETALLBOARD,payload:e.data}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}

export const deleteboard = (id) => async (dispatch) => {
    dispatch({type:LOADING})
    axios.delete(url+"board/deleteboard?id="+id, {headers:{token:localStorage.getItem("token")}})
    .then((e)=>dispatch({type:DELETEBOARD,payload:id}))
    .catch((e)=>dispatch({type:FAILURE, payload:e.response.data}))
}


export const reset = () => (dispatch) => {
    dispatch({type:RESET})
}