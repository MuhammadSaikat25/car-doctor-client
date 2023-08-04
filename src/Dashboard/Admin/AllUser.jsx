import useAllUser from "../../Hooks/useAllUser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()

    const [users,refetch]=useAllUser()

    const makeAdmin = (email) => {
        console.log(10)
        axiosSecure.patch(`${import.meta.env.VITE_SERVER}makeAdmin/${email}`)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    refetch()
                }
            })
    }

    

    return (
        <div>
            {
                users && (
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users?.map((data, i) =>
                                        <tr  key={data._id} className=''>
                                            <th>{i + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td className="cursor-pointer" onClick={()=>makeAdmin(data.email)}>{data.role === 'admin' ? "admin" : 'user'}</td>
                                            <td><button  className="cursor-pointer bg-blue-500 text-white p-1 rounded">Delete</button></td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default AllUser;