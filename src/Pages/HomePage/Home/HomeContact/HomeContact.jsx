import { BiCalendar } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';



const HomeContact = () => {
    return (
        <div className='space-y-3 mt-16 lg:flex justify-around lg:mt-[147px] text-white bg-[#151515] p-10 rounded-md hover:bg-orange-600 duration-300'>
            <div className="flex items-center gap-2">
                <BiCalendar size={25}></BiCalendar>
                <div className="">
                    <h1>We are open monday-friday</h1>
                    <p>7:00 am - 9:00 pm</p>
                </div>
            </div>
            {/* ================ */}
            <div className="flex items-center gap-2">
                <BsFillTelephoneFill size={25}></BsFillTelephoneFill>
                <div className="">
                    <h1>Have a question?</h1>
                    <p>+2546 251 2658</p>
                </div>
            </div>
            {/* ================= */}
            <div className="flex items-center gap-2">
                <CiLocationOn size={25} color='white'></CiLocationOn>
                <div className="">
                    <h1>Need a repair? our address</h1>
                    <p>Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;