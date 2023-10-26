import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData();

    const { title, _id } = service;


    return (

        <div className="card shadow-2xl bg-base-200 p-10">
            <h2 className="text-center font-bold text-4xl">Book Service: {title}</h2>
            <form className="card-body">

                <div className="md:flex md:gap-10">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" name="firstName" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date:</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                    </div>

                </div>

                <div className="md:flex md:gap-10">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Phone:</span>
                        </label>
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="rounded-xl p-5" rows="10" name="message" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700' type="submit" value="Login" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;