import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    if(loading){
        return <h1>Loading....</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/logIn'}></Navigate>
};

export default PrivateRoute;