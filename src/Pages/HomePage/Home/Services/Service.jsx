import { useContext } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../FireBase/AuthProvider';

const Service = ({ data }) => {
    const { img, price, title } = data
    const {user}=useContext(AuthContext)
    const privetRoute=()=>{
        if(!user){
            <Navigate to={'/logIn'}></Navigate>
        }
    }
    return (
        <div className="border w-fit rounded-md p-2 space-y-3 hover:scale-110 duration-300">
            <img className="w-full lg:w-[313px] lg:h-[208px] rounded-md object-cover" src={img} alt="" />
            <h1 className="text-2xl">{title}</h1>
            <div className="flex justify-between items-center ">
                <p className="text-orange-400 text-xl">Price: ${price}</p>
               <Link to={`/serviceDetail/${data._id}`}><BsArrowRightShort onClick={privetRoute} className='cursor-pointer' size={25} color='orange'></BsArrowRightShort></Link>
            </div>
        </div>
    );
};

export default Service;
