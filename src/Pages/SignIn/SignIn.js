import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './SignIn.css';


const SignIn = () => {

    let errorElement;
    const emailRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(user){
        console.log(user);
    }

    if(loading || sending){
        return <div className='text-center mt-10'>loading...</div>
    }
    if(error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email);

        signInWithEmailAndPassword(email, password);
    }

    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if(email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else{
            toast("Please enter your email");
        }
    }

    return (
        <div>
            <h2 className='text-center mt-24'>Login</h2>
            <div className="w-full mx-auto max-w-xs">
                <form onSubmit={handleSignin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" ref={emailRef} placeholder="email"required/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******" required/>
                            
                    </div>
                    <div className="flex items-center justify-center">
                        
                        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <input type="submit" value="Login"></input>
                        </button> 
                        
                    </div>
                    <div className='flex justify-center mt-3 pl-5'>
                    <Link to="/signup">
                        <p className='font-bold text-md mt-2 mr-4 text-blue-500 hover:text-blue-800 cursor-pointer'>New to LIVISA? </p>    
                        </Link>
                    </div>
                    
                    
                </form>
                <div className='flex justify-center ml-5 margin-top'>
                    
                    <button onClick={forgetPassword} className="font-bold text-md mr-4 text-blue-500 hover:text-blue-800 cursor-pointer">Forget Password</button>
                    
                         
                    </div>
                
                {errorElement}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;