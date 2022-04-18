import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center text-2xl font-medium'>CheckOut</h2>
            <div>
                <div className="w-full mx-auto max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className='mb-2'>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="email here" required />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Address
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Address" required />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Phone
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="text" placeholder="Cell phone" required />
                        </div>
                        <div className="flex items-center justify-center">

                            <button className=" bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                <input type="submit" value="Submit"></input>
                            </button>

                        </div>
                        <div className='flex justify-center mt-3 pl-5'>
                            <p className='font-bold  text-xl mt-2 mr-4 text-gray-800'>Thank you </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;