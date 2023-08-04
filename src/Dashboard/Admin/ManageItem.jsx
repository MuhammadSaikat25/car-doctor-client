import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useGetServices from "../../Hooks/useGetServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageItem = () => {
    const [services, refetch] = useGetServices()
    const axiosSecure = useAxiosSecure()

    const deleteService = (id) => {
        axiosSecure.delete(`deleteService/${id}`)
            .then(data => {
                if (data.data.deletedCount === 1) {
                    refetch()
                    toast('Delete Successful')
                }
            })
    }
    return (
        <>
            <ToastContainer></ToastContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10" >
                {
                    services.map(data => <div className="border w-fit mx-auto p-2 rounded-md shadow-sm shadow-blue-100" key={data._id}>
                        <img className="w-[300px] h-[200px] rounded-md object-cover mx-auto" src={data.img} alt="" />
                        <h1 className="text-center">{data.title}</h1>
                        <div className="flex justify-center">
                            <button onClick={() => deleteService(data._id)} className="w-full bg-sky-700 text-white">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default ManageItem;