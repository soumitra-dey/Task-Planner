import { CREATECARD, CREATELABEL, DELETECARD, FAILURE, GETALLCARD, GETALLLABEL, GETBOARD, LOADING, RESET } from "./board.types";


const initalState = {
  success:false,
  failure:false,
  loading:false,
  msg:"",
  board:{},
  users:[],
  cards:[],
  label:[]
};
  
export const boardReducer = (state = initalState, {type,payload}) => {
    switch (type) {
      case GETBOARD: {
        return {
          ...state,board:payload,users:[...payload.users]
        }
      }
      case CREATECARD: {
        return {
          ...state,cards:[...state.cards,payload]
        }
      }
      case GETALLCARD: {
        return {
          ...state, cards:[...payload]
        }
      }
      case DELETECARD: {
        return {
          ...state, msg:payload
        }
      }
      case CREATELABEL: {
        return {
          ...state,label:[...state.label,payload]
        }
      }
      case GETALLLABEL: {
        return {
          ...state, label:[...payload]
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