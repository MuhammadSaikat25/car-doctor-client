import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../FireBase/AuthProvider";

const useUserBooking = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:Booking=[],refetch}=useQuery(['booking'],async()=>{
        const res=await axiosSecure.get(`userBooking/${user?.email}`)
            return res.data
    })
    return [Booking,refetch]
   
};

export default useUserBooking;