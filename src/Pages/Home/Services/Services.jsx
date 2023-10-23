import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <div className="text-center">
                <h3 className=",b-5 font-bold text-3xl text-[#FF3811]">Service</h3>
                <h2 className="text-6xl font-bold">Our Service Area</h2>
                <p className="my-5">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="text-center my-10">
                <button className="btn btn-outline border-[#FF3811] hover:bg-[#FF3811] text-[#FF3811] font-semibold capitalize text-xl hover:border-none">More Services</button>
            </div>
        </div>
    );
};

export default Services;