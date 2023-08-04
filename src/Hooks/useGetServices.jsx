import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetServices = () => {
    const axiosSecure = useAxiosSecure()
    const { data: services = [], refetch } = useQuery(['services'], async () => {
        const res = await axiosSecure.get(`service`)
        return res.data
    })
    return [services,refetch]
};

export default useGetServices;