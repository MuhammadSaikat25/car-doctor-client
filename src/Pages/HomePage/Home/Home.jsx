import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
const Home = () => {
    return (
        <div className='lg:w-[1140px] mx-auto lg:h-[600px] rounded-md mt-[50px]'>
            <div className="carousel relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-md" />
                    <div className="absolute w-[70%] top-12 z-50 lg:w-[35%] lg:top-[99px] lg:left-[100px] text-white space-y-4">
                        <h1 className='lg:text-6xl font-semibold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-3">
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
                    <img src={img2} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-opacity-5">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-5">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-opacity-5">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-5">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-opacity-5">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-opacity-5">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;