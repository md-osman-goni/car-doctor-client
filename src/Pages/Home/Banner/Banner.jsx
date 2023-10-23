import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute transform text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex items-center pl-20 rounded-xl">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='capitalize my-7'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                        <div className='flex gap-5'>
                            <button className="btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700">Discover More</button>
                            <button className="btn btn-outline border-[#FF3811] text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>

                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide2" className="carousel-item relative w-full">

                <div className="absolute transform text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex items-center pl-20 rounded-xl">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='capitalize my-7'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                        <div className='flex gap-5'>
                            <button className="btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700">Discover More</button>
                            <button className="btn btn-outline border-[#FF3811] text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>

                </div>

                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">

                <div className="absolute transform text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex items-center pl-20 rounded-xl">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='capitalize my-7'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                        <div className='flex gap-5'>
                            <button className="btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700">Discover More</button>
                            <button className="btn btn-outline border-[#FF3811] text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>

                </div>

                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">

                <div className="absolute transform text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full flex items-center pl-20 rounded-xl">
                    <div>
                        <h2 className='text-6xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className='capitalize my-7'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

                        <div className='flex gap-5'>
                            <button className="btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700">Discover More</button>
                            <button className="btn btn-outline border-[#FF3811] text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>

                </div>

                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;