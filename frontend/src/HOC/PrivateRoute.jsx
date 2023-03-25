import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}){
    const { token } = useSelector((store) => store.user)
    if (token==""){
        return <Navigate to="/login"/>
    }
    return children
    
}