import img from '../../../../assets/images/about_us/parts.jpg'
import img2 from '../../../../assets/images/about_us/person.jpg'
const HomeAboutUs = () => {
    return (
        <section className='lg:flex items-center relative  p-2'>
            <div className="mt-16  w-[90%] mx-auto lg:w-[50%] lg:mx-0 ">
                <img className='w-[250px] h-[300px] lg:w-[460px] lg:h-[476px] rounded-md object-cover' src={img2} alt="" />
                <img className='w-[200px] h-[250px] left-[100px] top-[170px] object-cover lg:w-[327px] absolute lg:top-[220px] lg:left-[190px] lg:h-[332px] border-4 rounded-md border-lime-100 lg:border-8' src={img} alt="" />
            </div>
            {/* ========================== */}
            <div className="mt-24 lg:w-[50%] text-center text-xs lg:text-base lg:text-left p-4 lg:-mt-[2px] space-y-3 lg:space-y-7">
                <h1 className='text-[#FF3811] '>About Us</h1>
                <h1 className='hidden lg:block lg:text-5xl lg:font-bold '>We are qualified <br /> & of experience <br /> in this field</h1>
                <h1 className='text-xl font-semibold lg:hidden'>We are qualified & of experience in this field</h1>
                <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='bg-[#FF3811] p-2 rounded-md font-semibold text-white'>Get More Info</button>
            </div>
        </section>
    );
};

export default HomeAboutUs;