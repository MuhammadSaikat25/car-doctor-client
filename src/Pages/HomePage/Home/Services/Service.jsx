import { BsArrowRightShort } from 'react-icons/bs';

const Service = ({ data }) => {
    console.log(data)
    const { img, price, title } = data
    return (
        <div className="border w-fit rounded-md p-2 space-y-3">
            <img className="lg:w-[313px] lg:h-[208px] rounded-md object-cover" src={img} alt="" />
            <h1 className="text-2xl">{title}</h1>
            <div className="flex justify-between items-center ">
                <p className="text-orange-400 text-xl">Price: ${price}</p>
                <BsArrowRightShort size={25} color='orange'></BsArrowRightShort>
            </div>
        </div>
    );
};

export default Service;