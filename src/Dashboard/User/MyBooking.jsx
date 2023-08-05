import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserBooking from "../../Hooks/useUserBooking";

const MyBooking = () => {
   const [Booking,refetch]=useUserBooking()
   const axiosSecure=useAxiosSecure()
   const deleteBooking=id=>{
        axiosSecure.delete(`deleteUserBook/${id}`)
            .then(data=>{
                if(data.data.deletedCount===1){
                    refetch()
                }
            })
   }
    return (
        <div>
            {
                Booking.length>0?<div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Service</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Booking?.map((data, i) =>
                                <tr  key={data._id}>
                                    <th>{i + 1}</th>
                                    <th><img className="w-[70px] h-[70px] rounded-full object-fill" src={data?.image} alt="" /></th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.price}</td>
                                    <td>{data.serviceName}</td>
                                    <td><button onClick={()=>deleteBooking(data._id)} className="cursor-pointer bg-blue-500 text-white p-1 rounded">Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            :<div>
                <h1>You have not booked yet</h1>
                <Link to={'/services'}>Services</Link>
            </div>
            }
        </div>
    );
};

export default MyBooking;