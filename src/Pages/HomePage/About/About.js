import React from 'react';
import consultant from '../../../Images/consultant.jpg';

const About = () => {
    return (
        <div className='md:flex md:ml-32 md:mt-52 mt-20'>
            <div className='rounded-full flex justify-center mb-4'>
                <img className='rounded-full w-2/5 md:w-3/5' src={consultant} alt="" />
            </div>
            <div className='md:mt-24 mx-10 md:mx-0 md:mr-16 text-justify'>
                <div>
                    <h2>HI I'M Chris Evans</h2>
                    <h5>In Bangladesh, I am a licensed attorney who specializes in immigration law. I am a senior immigration advisor with three years of experience applying for PR visas in the United States and Canada, as well as student visas, tourist visas, visitor visas, work visas, and other types of visas. I assist my clients in obtaining an opportunity to settle overseas. I recommend several forms of visas based on their profile. I can offer you the most appropriate advice for your specific circumstance. You can find various types of packages with extremely reasonable pricing on my website.</h5>
                    <button className=" bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Read more
                    </button>
                </div>
            </div>
        </div>

    );
};

export default About;