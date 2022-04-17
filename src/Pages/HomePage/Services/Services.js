import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className='text-center text-5xl font-medium mt-16 md:mt-32'>Services 
            </h2>
            <div className=' w-9/12 md:grid lg:grid-cols-3 md:grid-cols-2
            gap-4 mx-auto mt-10 md:mt-8 place-items-center'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;