import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}service`)
            .then(data => setServices(data.data))
    }, [])
    return (
        <div className="lg:mt-[130px] p-10">
            <div className="text-center">
                <h1 className="text-xl text-[#FF3811] font-bold ">Service</h1>
                <h1 className="lg:font-bold lg:text-5xl mt-5">Our Service Area</h1>
                <p className="text-[#737373] mt-5 ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            {/* ============================== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
                {
                    services?.map((data, i) => <Service data={data} key={i}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;