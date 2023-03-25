import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer/user.reducer";
import { boardReducer } from "./boardReducer/board.reducer";

const rootReducer=combineReducers({
    user:userReducer,
    board:boardReducer
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
