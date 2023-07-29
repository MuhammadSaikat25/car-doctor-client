import img from '../assets/icons/Wrench.jpg'
const Footer = () => {

    return (
        <div className=' bg-[#151515] text-white mx-auto mt-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 lg:w-[70%] mx-auto">
                <div className="">
                    <img src={img} alt="" />
                    <h1 className='mt-2'>Car Doctor</h1>
                    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                </div>
                <div className="">
                    <h1>About</h1>
                    <h1>Home</h1>
                    <h1>Service</h1>
                    <h1>Contact</h1>
                </div>
                <div className="">
                    <h1>Company</h1>
                    <h1>Why Car Doctor</h1>
                    <h1>About</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;