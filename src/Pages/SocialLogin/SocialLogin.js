import React from 'react';
import google from '../../Images/Social/google.png';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <div className='text-center mt-10'>loading...</div>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            {errorElement}
            <div className='flex justify-center'>
                
                <button onClick={() => signInWithGoogle()} className="flex items-center  bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> <img src={google} alt="" srcset="" />
                   <p className='mb-0 ml-5'>Google Sign In</p> 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;