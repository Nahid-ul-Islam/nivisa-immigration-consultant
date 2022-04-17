import React, { useEffect, useRef, useState } from 'react';
import banner5 from '../../../Images/Banner/banner5.jpg';
import banner6 from '../../../Images/Banner/banner6.jpg';
import banner7 from '../../../Images/Banner/banner7.jpg';

import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

const bannerImages = [
    banner5,
    banner6,
    banner7,
];

let count = 0;
let slideInterval;

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);


        //startSlider();
        return () => {
            pauseSlider();
        }
    }, [])

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 4000)
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % bannerImages.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }

    const handleOnPrevClick = () => {
        const bannersLength = bannerImages.length;
        count = (currentIndex + bannersLength - 1) % bannersLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }

    return (
        <div ref={slideRef} className='w-full select-none relative'>
            <div className='aspect-w-16 aspect-h-9'>
                    <img src={bannerImages[currentIndex]} alt="" />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}></AiOutlineVerticalRight></button>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}></AiOutlineVerticalLeft></button>
            </div>

        </div>

        // <div>
        //     <div className='w-100 relative'>
        //         <img className='absolute opacity-80' src={banner5} alt="" />
        //         <div className='absolute'>
        //             <h2>Travelling</h2>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;