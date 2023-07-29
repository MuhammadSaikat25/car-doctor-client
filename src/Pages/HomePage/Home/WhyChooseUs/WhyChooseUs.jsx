import img1 from '../../../../assets/icons/Group1.jpg'
import img2 from '../../../../assets/icons/Group2.jpg'
import img3 from '../../../../assets/icons/Group3.jpg'
import img4 from '../../../../assets/icons/Group6.jpg'
import img5 from '../../../../assets/icons/Wrench.jpg'
const WhyChooseUs = () => {
    return (
        <div>
            <div className="mt-10 lg:mt-[130px] text-center p-5">
                <h1 className="text-red-500 font-semibold">Core Features</h1>
                <p className="text-black text-4xl font-bold">Why Choose Us</p>
                <p className="text-[#737373] mt-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 mt-5">
                <img className='w-[50px] h-[50px] object-cover mx-auto' src={img1} alt="" />
                <img className='w-[50px] h-[50px] object-cover mx-auto' src={img2} alt="" />
                <img className='w-[50px] h-[50px] object-cover mx-auto' src={img3} alt="" />
                <img className='w-[50px] h-[50px] object-cover mx-auto' src={img4} alt="" />
                <img className='w-[50px] h-[50px] object-cover mx-auto' src={img5} alt="" />
            </div>
        </div>
    );
};

export default WhyChooseUs;