import React from 'react';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        console.log(user);
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******"/>
                            
                    </div>
                    <div className="flex items-center justify-between">
                        
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <input type="submit" value="Login"></input>
                        </button>
                       
                        <Link to="/signup">
                        <p className='font-bold text-md mt-2 mr-4 text-blue-500 hover:text-blue-800 cursor-pointer'>New to LIVISA? </p>    
                        </Link> 
                        
                    </div>
                    <div>
                         {/* <p className=" ml-6 pt-3 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">Forget Password <Link to="/login"></Link> </p> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;