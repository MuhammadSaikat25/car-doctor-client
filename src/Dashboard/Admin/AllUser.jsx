import { useContext } from "react";
import useAllUser from "../../Hooks/useAllUser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../FireBase/AuthProvider";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const{user}=useContext(AuthContext)
    const [users,refetch]=useAllUser()

    const makeAdmin = (email) => {
        axiosSecure.patch(`${import.meta.env.VITE_SERVER}makeAdmin/${email}`)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    refetch()
                }
            })
    }

    const DeleteUser=(email)=>{
        axiosSecure.delete(`deleteUser/${email}`)
            .then(data=>{
                if(data.data.deletedCount===1){
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
                                        <tr  key={data._id} className={`${user.email===data.email?'bg-slate-200':''}`}>
                                            <th>{i + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td className="cursor-pointer" onClick={()=>makeAdmin(data.email)}>{data.role === 'admin' ? "admin" : 'user'}</td>
                                            <td><button onClick={()=>DeleteUser(data.email)} className="cursor-pointer bg-blue-500 text-white p-1 rounded">Delete</button></td>
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