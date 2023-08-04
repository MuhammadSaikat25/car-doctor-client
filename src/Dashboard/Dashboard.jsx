import { NavLink, Outlet } from "react-router-dom";
import { FaSlidersH, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [open, setOpen] = useState(false)
    const [admin] = useAdmin()
    return (
        <>
            <div className="max-w-7xl mx-auto w-full">
                <nav className="hidden max-w-7xl mx-auto lg:flex justify-between items-center p-3 font-semibold text-lg mt-5">
                    <div className="flex justify-center w-full gap-10">
                        
                            {

                                admin?.admin ? <>
                                     <NavLink to={'/'}>Home</NavLink>
                                     <NavLink to={'/Dashboard/allUser'}>AllUser</NavLink>
                                     <NavLink to={'/Dashboard/allUser'}>AddItem</NavLink>
                                     <NavLink to={'/Dashboard/allUser'}>Mange Item</NavLink>
     
                                 </>
                                     : <>
                                         <NavLink to={'/'}>Home</NavLink>
                                         <NavLink to={''}>My Booking</NavLink>
                                         <NavLink to={''}>Service</NavLink>
                                     </>
     
                             }
                        
                    </div>

                </nav>
                <span className="lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <FaTimes size={25}></FaTimes> : <FaSlidersH size={25}></FaSlidersH>
                    }
                </span>
                {
                    open && (
                        <nav className="flex flex-col absolute bg-slate-100 h-full w-full z-50 text-2xl font-semibold lg:hidden">
                            <div className="flex flex-col gap-2 mb-2">
                                {
                                    admin?.role === 'admin' ? <>
                                        <NavLink to={'/'}>Home</NavLink>
                                        <NavLink to={'/Dashboard/allUser'}>AllUser</NavLink>
                                        <NavLink to={'/Dashboard/allUser'}>AddItem</NavLink>
                                        <NavLink to={'/Dashboard/allUser'}>Mange Item</NavLink>

                                    </>
                                        : <>
                                            <NavLink to={'/'}>Home</NavLink>
                                            <NavLink to={''}>My Booking</NavLink>
                                            <NavLink to={''}>Service</NavLink>
                                        </>

                                }

                            </div>

                        </nav>
                    )
                }
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Dashboard;



