import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsArrowRightShort } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../FireBase/AuthProvider";

const Services = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}service`)
            .then(data => setServices(data.data))
    }, [])
    console.log(services)
    const privetRoute = () => {
        if (!user) {
            <Navigate to={'/logIn'}></Navigate>
        }
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto w-full mt-10">
            {
                services.map(data =>
                    <div key={data._id} className="border w-fit rounded-md p-2 space-y-3 hover:scale-110 duration-300">
                        <img className="w-full lg:w-[313px] lg:h-[208px] rounded-md object-cover" src={data.img} alt="" />
                        <h1 className="text-2xl">{data.title}</h1>
                        <div className="flex justify-between items-center ">
                            <p className="text-orange-400 text-xl">Price: ${data.price}</p>
                            <Link to={`/serviceDetail/${data._id}`}><BsArrowRightShort onClick={privetRoute} className='cursor-pointer' size={25} color='orange'></BsArrowRightShort></Link>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Services;