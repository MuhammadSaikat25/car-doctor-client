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
            {
                services && (
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    services?.map((data, i) =>
                                        <tr key={data._id}>
                                            <th>{i + 1}</th>
                                            <th><img className="w-[70px] h-[70px] rounded-full" src={data.img} alt="" /></th>
                                            <td>{data.title}</td>
                                            <td>${data.price}</td>
                                            <td><button onClick={() => deleteService(data._id)} className="cursor-pointer bg-blue-500 text-white p-1 rounded">Delete</button></td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                )
            }
        </>
    );
};

export default ManageItem;