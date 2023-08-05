import { Link, NavLink } from "react-router-dom";
import img from '../assets/icons/Wrench.jpg'
import { FaSlidersH, FaTimes } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../FireBase/AuthProvider";


const Nav = () => {
    const { logOut, user } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(res = {})
            .catch(error => { })
    }
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="hidden max-w-7xl mx-auto lg:flex justify-between items-center p-3 font-semibold text-lg mt-5">
                <Link to={'/'}> <img src={img} alt="" /></Link>
                <div className="flex gap-10">
                    <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/'}>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/services'}>Services</NavLink>
                    <NavLink>Contact</NavLink>

                    {
                        user ? <>
                            <NavLink onClick={handelLogOut}>log Out</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/singUp'}>Sing Up</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/dashboard'}>Dashboard</NavLink>
                        </>
                            : <>
                                <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/LogIn'}>log In</NavLink>
                                <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/singUp'}>Sing Up</NavLink>
                            </>
                    }
                </div>
                <button className="border border-orange-400 p-2 rounded-md text-orange-400">
                    <NavLink>Blog</NavLink>
                </button>
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
                            <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/'}>Home</NavLink>
                            <NavLink>About</NavLink>
                            <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/services'}>Services</NavLink>
                            <NavLink>Contact</NavLink>
                            {
                                user ? <>
                                    <NavLink className={({isActive})=>isActive?'text-sky-500':''} onClick={handelLogOut}>log Out</NavLink>
                                    <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/singUp'}>Sing Up</NavLink>
                                    <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/dashboard'}>Dashboard</NavLink>
                                </>
                                    : <>
                                        <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/LogIn'}>log In</NavLink>
                                        <NavLink className={({isActive})=>isActive?'text-sky-500':''} to={'/singUp'}>Sing Up</NavLink>
                                    </>
                            }
                        </div>
                        <div className="">
                            <NavLink>Blog</NavLink>
                        </div>
                    </nav>
                )
            }
        </>
    );
};

export default Nav;