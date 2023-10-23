import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  pb-20 my-20">
            <div className="hero-content flex-col lg:flex-row lg:gap-32">
                <div className='relative'>
                    <img src={person} className="rounded-lg shadow-2xl max-w-[460px] h-[450px]" />
                    <img src={parts} className="max-w-[325px] h-[330px] rounded-lg shadow-2xl absolute -bottom-20 -right-16 border-[15px] border-white" />
                </div>
                <div>
                    <h3 className='text-3xl font-bold mb-10 text-[#FF3811]'>About Us</h3>
                    <h2 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h2>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700 mt-5">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default About;