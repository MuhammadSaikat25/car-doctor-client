import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../FireBase/AuthProvider";


const AllUser = () => {
    const { user } = useContext(AuthContext)
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axios(`${import.meta.env.VITE_SERVER}getAllUser`)
        return res.data
    })

    const makeAdmin = () => {
        axios.patch(`${import.meta.env.VITE_SERVER}makeAdmin/${user?.email}`)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    refetch()
                }
            })
    }
    
    return (
        <div>
           
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
                                <tr key={data._id} className="">
                                    <th>{i + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td className="cursor-pointer" onClick={makeAdmin}>{data.role === 'admin' ? "admin" : 'user'}</td>
                                    <td className="cursor-pointer">Delete</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;