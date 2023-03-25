import { Route, Routes } from "react-router-dom";
import Board from "../Components/Board";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import PrivateRoute from "../HOC/PrivateRoute";



export default function AllRoute(){


    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="board/:boardid" element={<Board/>}></Route>
        </Routes>
    )
}