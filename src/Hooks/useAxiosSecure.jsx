import { useContext, useEffect } from "react"
import { AuthContext } from "../FireBase/AuthProvider"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const axiosSecure = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER}`
    })

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
            return config
        })
        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/login')
                }
            }
        )
    }, [logOut, navigate,axiosSecure])
    return axiosSecure
}

export default useAxiosSecure;