import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeContact from './HomeContact/HomeContact';
import OurTeam from './HomeContact/OurTeam';
import Services from './Services/Services';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
const Home = () => {
    return (
        <>
            <div className=' rounded-md mt-[50px]  max-w-7xl mx-auto w-full'>
                <div className="carousel relative">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="lg:w-[1280px] mx-auto lg:h-[600px] object-cover rounded-md" />
                        <div className="absolute w-[70%] top-12 z-10 lg:z-50 lg:w-[35%] lg:top-[99px] lg:left-[100px] text-white lg:space-y-10">
                            <h1 className='lg:text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-3 mt-10">
                                <button className='bg-orange-500 text-white p-1 rounded'>Discover More</button>
                                <button className=' text-white p-1 rounded border' >Latest project</button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-full w-full -translate-y-1/2  top-1/2">
                            <a href="#slide4" className="btn btn-circle bg-opacity-5">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-opacity-5">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="lg:w-[1280px] mx-auto lg:h-[600px] rounded-md" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-opacity-5">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-opacity-5">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="lg:w-[1280px] mx-auto lg:h-[600px] rounded-md" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-opacity-5">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-opacity-5">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="lg:w-[1280px] mx-auto lg:h-[600px] rounded-md" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-opacity-5">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-opacity-5">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========== About us section======== */}
            <div className="max-w-7xl mx-auto w-full">
                <HomeAboutUs></HomeAboutUs>
            </div>
            {/* ============ Services Section========== */}
            <div className="max-w-7xl mx-auto w-full">
                <Services></Services>

            </div>
            {/* ============= ContactInfo section============ */}
            <div className="max-w-7xl mx-auto w-full">
                <HomeContact></HomeContact>

            </div>
            {/* =========== Met Our Team=========== */}
            <div className="max-w-7xl mx-auto w-full">
                <OurTeam></OurTeam>

            </div>
            {/* ============ Why Choose Us============= */}
            <div className="max-w-7xl mx-auto w-full">

                <WhyChooseUs></WhyChooseUs>
            </div>
        </>
    );
};

export default Home;