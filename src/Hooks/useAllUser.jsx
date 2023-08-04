
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axiosSecure.get(`getAllUser`)
        return res.data
    })
    return [users,refetch]
};

export default useAllUser;