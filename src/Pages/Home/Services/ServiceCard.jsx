import { AiOutlineArrowRight } from 'react-icons/ai';


const ServiceCard = ({ service }) => {

    const { title, img, price } = service;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-7 pt-7">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <p className="text-xl font-bold text-[#FF3811]">Price: ${price}</p>
                    <AiOutlineArrowRight className='font-bold text-xl text-[#FF3811]' />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;