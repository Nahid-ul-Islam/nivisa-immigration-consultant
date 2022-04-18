import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, image, name, price, about } = service;

    const navigate = useNavigate();

    const navigateToReadMore = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="p-5 max-w-sm rounded overflow-hidden shadow-2xl mb-16">
            <div className='flex justify-center'>
            <img src={image} alt="" srcSet="" />
            </div>
            <h2 className='text-2xl font-medium text-center'>{name}</h2>
            <p className='text-center font-medium'>Fees: {price}</p>
            <p className='mt-3 text-justify'>{about}</p>
            <div className='text-center'>
                <button onClick={()=> navigateToReadMore(id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5">Get Service</button>
            </div>
        </div>
    );
};

export default Service;