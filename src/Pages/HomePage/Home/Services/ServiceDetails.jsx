import { useLoaderData } from "react-router-dom";
import img1 from '../../../../assets/images/checkout/checkout.png'
import { useEffect, useState } from "react";
import axios from "axios";
import img3 from '../../../../assets/icons/Wrench.jpg'

const ServiceDetails = () => {
    const data = useLoaderData()
    const { img, price, title, description } = data
    const [services, setServices] = useState([])
    const { facility } = data
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}service`)
            .then(data => setServices(data.data))
    }, [])


    const otherServices = services.filter(service => service._id !== data._id)
    console.log(otherServices)
    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="mt-4 relative">
                <img className="" src={img1} alt="" />
                <p className="hidden lg:block absolute bottom-0 left-[500px] bg-orange-400 p-3 text-white hover:bg-blue-500 duration-300 hover:rounded">Home/Service Details</p>
            </div>
            <div className="lg:flex gap-10 mt-10">
                <div className="lg:w-[50%]">
                    <img className="rounded-md" src={img} alt="" />
                    <h1 className="text-center lg:text-left mb-2 text-black font-bold text-xl">{title}</h1>
                    <p className="text-center p-2 text-xs lg:text-left mb-3">{description}</p>
                    {
                        facility.map((data, i) =>
                            <div className="mt-2 border-t-2 border-red-600 bg-slate-200 p-2 text-gray-700 rounded-md text-center" key={i}>
                                <h1 className="text-xl font-semibold text-black">{data.title}</h1>
                                <h1>{data.details}</h1>
                            </div>)
                    }
                </div>
                <div className="lg:w-[50%] ">
                    <div className="w-[300px] h-fit bg-[#F3F3F3] space-y-10 p-4 mx-auto mt-2 lg:mt-0">
                        <h1 className="font-bold text-black text-xl text-center mb-3">Our Other Services</h1>
                        {
                            otherServices?.map((data, i) => <p className="w-[70%] mx-auto bg-white font-semibold p-2 rounded-md" key={i}>{data.title}</p>)
                        }
                    </div>
                    <div className="w-[300px] mx-auto bg-[#151515] p-10 mt-5">
                        <div className="text-center text-white">
                            <img className="mx-auto" src={img3} alt="" />
                            <h1 className="mb-3 mt-2">Car Doctor</h1>
                            <h1>Need Help? We Are Here <br />
                                To Help You</h1>
                        </div>
                        <div className="bg-white p-3 rounded-md mt-2 relative">
                            <h1 className="font-semibold text-black text-center"><span className="text-red-400">Car Doctor</span>Special</h1>
                            <h1 className="text-center text-gray-600">Save up to <span className="text-red-500">60% off</span></h1>
                            <h1 className="absolute lg:-bottom-6 left-16 bg-orange-400 p-1 text-white rounded-md">Get A Quote</h1>
                        </div>
                    </div>
                        <p className="text-center text-xl font-semibold"> price ${price}</p>
                        <div className="flex justify-center mt-2">
                            <button className="bg-orange-600 p-2 rounded-md text-white">Proceed Checkout</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;