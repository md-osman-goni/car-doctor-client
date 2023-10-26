import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const location = form.location.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;
        
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service_id: _id,
            service_title: title,
            price: price,
            location: location,
            phone: phone,
            message: message
        }

        console.log(booking)
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service Booked Successfully')
            }
        })

    }

    return (
        <div className="card shadow-2xl bg-base-200 p-10">
            <h2 className="text-center font-bold text-4xl">Book Service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">

                <div className="md:flex md:gap-10">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name:</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Your Location" className="input input-bordered" required />
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
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>

                </div>

                <div className="md:flex md:gap-10">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$'+ price} readOnly placeholder="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date:</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="rounded-xl p-5" rows="10" name="message" placeholder="Your Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-active border-none bg-[#FF3811] text-white hover:bg-orange-700' type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;