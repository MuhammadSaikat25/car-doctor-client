import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../FireBase/AuthProvider";
import { useContext } from "react";

const useAdmin = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: Admin,isLoading:adminLoading, refetch } = useQuery(['isAdmin',user?.email], async () => {
        const res = await axiosSecure.get(`isUserAdmin/${user?.email}`)
        return res.data
    })
   return [Admin,adminLoading,refetch]
};

export default useAdmin;