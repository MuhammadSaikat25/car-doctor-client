import { Link, NavLink } from "react-router-dom";
import img from '../assets/icons/Wrench.jpg'
import { FaSlidersH, FaTimes } from 'react-icons/fa';
import { useState } from "react";


const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="hidden max-w-7xl mx-auto lg:flex justify-between items-center p-3 font-semibold text-lg mt-5">
                <Link to={'/'}> <img src={img} alt="" /></Link>
                <div className="flex gap-10">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink to={'/singUp'}>Sing Up</NavLink>
                    <NavLink to={'/LogIn'}>log In</NavLink>
                </div>
                <button className="border border-orange-400 p-2 rounded-md text-orange-400">
                    <NavLink>Appointment</NavLink>
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
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink>About</NavLink>
                            <NavLink>Services</NavLink>
                            <NavLink>Contact</NavLink>
                            <NavLink to={'/singUp'}>Sing Up</NavLink>
                            <NavLink to={'/logIn'}>log In</NavLink>
                        </div>
                        <div className="">
                            <NavLink>Appointment</NavLink>
                        </div>
                    </nav>
                )
            }
        </>
    );
};

export default Nav;