import { USERSIGNUP,USERLOGIN, FAILURE, RESET, LOADING, GETUSER, GETALLBOARD, DELETEBOARD } from "./user.types";


const initalState = {
    token:localStorage.getItem("token") || "",
    success:false,
    failure:false,
    loading:false,
    msg:"",
    user:{},
    boards:[]
};
  
export const userReducer = (state = initalState, {type,payload}) => {
    switch (type) {
      case USERSIGNUP: {
        return {
          ...state,success:true,loading:false,msg:payload
        }
      }
      case USERLOGIN: {
        localStorage.setItem("token",payload.token)
        return {
          ...state,token:payload.token,msg:payload.message, success:true
        }
      }
      case GETUSER: {
        return {
          ...state,
          user:payload
        }
      }
      case GETALLBOARD:{
        return {
          ...state,
          boards:[...payload]
        }
      }
      case DELETEBOARD: {
        return {
          ...state,
          msg:"Board deleted",
          loading:false
        }
      }
      case FAILURE: {
        return {
          ...state,failure:true,loading:false,msg:payload
        }
      }
      case RESET: {
        return {
          ...state,success:false,failure:false,loading:false, msg:""
        }
      }
      case LOADING: {
        return {
          ...state,loading:true
        }
      }
      default: {
        return state
      }
    }
  };