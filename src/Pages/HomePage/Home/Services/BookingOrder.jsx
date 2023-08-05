import { useLoaderData } from "react-router-dom";
import img from '../../../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../../../FireBase/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookingOrder = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)


    const handelBooking = e => {
        e.preventDefault()
        const name = e.target.name.value
        const phone = e.target.phone.value
        const serviceName = e.target.serviceName.value
        const price = e.target.price.value
        const email = e.target.email.value
        const message = e.target.message.value
        e.target.reset()
        const bookingData = {
            name, phone, serviceName, price, email, message,image:service.img
        }
        console.log(bookingData)
        axios.post(`${import.meta.env.VITE_SERVER}postBooking`, { bookingData })
        .then(data => {
            if (data.data.acknowledged === true) {
                toast("Booking Successful!");
            }
        })
    }

    return (
        <>
            <ToastContainer />
            <div className="max-w-7xl mx-auto w-full">
                <div className="mt-4 relative">
                    <img className="mx-auto" src={img} alt="" />
                    <h1 className="absolute lg:top-32 lg:left-20 top-8 left-10 text-white font-semibold lg:text-3xl">Check Out</h1>
                    <p className="hidden lg:block absolute bottom-0 left-[500px] bg-blue-400 p-3 text-white hover:bg-orange-500 duration-300">Home/Checkout</p>
                </div>
                <form onSubmit={handelBooking}>
                    <div className="w-fit lg:w-[1140px] lg:h-fit py-7 bg-[#F3F3F3] mx-auto lg:mt-[140px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 ">
                            <input className=" p-1 rounded-md" type="text" name="name" defaultValue={user?.displayName} placeholder="Name" required />
                            <input className=" p-1 rounded-md" type="number" name="phone" placeholder="Phone" required />
                            <input className=" p-1 rounded-md" type="email" name="email" defaultValue={user?.email} placeholder="Email" required />
                            <input onChange={() => ''} className=" p-1 rounded-md" type="text" value={service?.title} name="serviceName" />
                            <input onChange={() => ''} className=" p-1 rounded-md" type="text" value={`$:${service?.price}`} name="price" />
                        </div>
                        <div className="lg:w-[100%] mx-auto lg:px-5">
                            <textarea className="w-full" name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                        <div className="lg:px-5 mt-2">
                            <button type="submit" className="w-full text-center p-1 bg-orange-500 text-white font-bold rounded">Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BookingOrder;