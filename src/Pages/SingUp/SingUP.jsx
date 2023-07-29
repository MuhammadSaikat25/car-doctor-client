import { Link } from 'react-router-dom';
import img from '../../assets/images/singUp.jpg'
const SingUP = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className="lg:flex lg:gap-20">
                <div className="lg:w-[50%]">
                    <img className=' lg:h-[500px]' src={img} alt="" />
                </div>
                <div className="lg:w-[50%] border border-gray-300 rounded-md p-5">
                    <h1 className='text-center text-black font-bold mt-5 mb-4'>Sing Up</h1>
                    <form className='flex flex-col space-y-9'>
                        <input className='border border-gray-300 p-1 rounded' type="text" name="name" placeholder='Name' />
                        <input className='border border-gray-300 p-1 rounded' type="email" name="email" placeholder='Email' />
                        <input className='border border-gray-300 p-1 rounded' type="password" name="password" placeholder='Password' />
                        <button className='bg-orange-500 p-1 rounded text-white'>Sing Up</button>
                    </form>
                    <h1 className='text-center mt-4 text-2xl text-gray-500'>Already have an account? <span className='text-blue-500' ><Link to={'/logIn'}>Sing In</Link></span></h1>
                </div>
            </div>
        </div>
    );
};

export default SingUP;

