import img1 from '../../../../assets/images/team/1.jpg'
import img2 from '../../../../assets/images/team/2.jpg'
import img3 from '../../../../assets/images/team/3.jpg'
import tw from '../../../../assets/icons/Group4889(2).jpg'
import fb from '../../../../assets/icons/Group4889-(1).jpg'
import ind from '../../../../assets/icons/Group4889-(3).jpg'
const OurTeam = () => {
    return (
        <div className="">
            <div className="text-center mt-10 lg:mt-[147px]">
                <h1 className='text-red-400 font-semibold text-xl'>Team</h1>
                <h1 className='text-black lg:text-3xl font-bold'>Meet Our Team</h1>
                <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3'>
                <div className=" w-fit mx-auto mt-5 border border-gray-300 p-4 rounded-md">
                    <img className='w-[314px]  h-[290px] object-cover rounded-md' src={img1} alt="" />
                    <div className="mt-2 mb-2 text-center">
                        <h1 className='font-bold text-xl'>Car Engine Plug</h1>
                        <h1 className='text-gray-400'>Engine Expert</h1>
                    </div>
                    <div className="flex justify-center gap-5 mt-5 ">
                        <img className='rounded-3xl' src={ind} alt="" />
                        <img className='rounded-3xl' src={tw} alt="" />
                        <img className='rounded-3xl' src={fb} alt="" />
                    </div>
                </div>

                <div className="mx-auto w-fit mt-5 border border-gray-300 p-4 rounded-md">
                    <img className='w-[314px]  h-[290px] object-cover rounded-md' src={img2} alt="" />
                    <div className="mt-2 mb-2 text-center">
                        <h1 className='font-bold text-xl'>Car Engine Plug</h1>
                        <h1 className='text-gray-400'>Engine Expert</h1>
                    </div>
                    <div className="flex justify-center gap-5 mt-5">
                        <img className='rounded-3xl' src={ind} alt="" />
                        <img className='rounded-3xl' src={tw} alt="" />
                        <img className='rounded-3xl' src={fb} alt="" />
                    </div>
                </div>

                <div className="mx-auto w-fit mt-5 border border-gray-300 p-4 rounded-md">
                    <img className='w-[314px]  h-[290px] object-cover rounded-md' src={img3} alt="" />
                    <div className="mt-2 mb-2 text-center">
                        <h1 className='font-bold text-xl'>Car Engine Plug</h1>
                        <h1 className='text-gray-400'>Engine Expert</h1>
                    </div>
                    <div className="flex justify-center gap-5 mt-5">
                        <img className='rounded-3xl' src={ind} alt="" />
                        <img className='rounded-3xl' src={tw} alt="" />
                        <img className='rounded-3xl' src={fb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;