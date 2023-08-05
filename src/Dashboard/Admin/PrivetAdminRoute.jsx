import { useContext } from "react";
import { AuthContext } from "../../FireBase/AuthProvider";
import { Navigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const PrivetAdminRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const [admin,adminLoading]=useAdmin()
    console.log(admin)
    if(loading || adminLoading){
        return <h1 className="text-center text-blue-700 font-semibold text-2xl">Loading....</h1>
    }
    if (user&&admin.admin) {
        return children
    }
    return <Navigate to={'/logIn'}></Navigate>
};

export default PrivetAdminRoute;