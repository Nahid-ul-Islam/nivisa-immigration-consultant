import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-20 w-4/5 mx-auto'>
            <div>
                <div>
                    <h3>Difference between authorization and authentication? </h3>
                    <h6> 
                            
                            The identity of users is examined during the authentication process before they are allowed system access. The person's or user's authority to access the resources is verified during the authorization process.
                            
                            <br />
                            <br />
                            
                            In authentication process, users or persons are verified. While in this process, users or persons are validated.
                            
                            <br />
                            <br />
                            
                            Due to the authorization process, authentication must be completed. This authorization procedure is done after the authentication process.
                            
                        </h6>
                </div>

                <br />
                <div>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <h6>
                    Firebase Authentication  makes creating secure authentication systems simple while also simplifying end-user sign-in. It's an end-to-end identity system that includes email and password authentication, Google, Twitter, Facebook and GitHub login. Also there is some library availbale for firebase hooks that makes me feel comfortable to build an authentication system. This is why I am using firebse.
                    <br />
                    Auth0, MongoDB, Passport, Okta are the most popular alternatives to firebase authentication.
                    </h6>
                </div>

                <br />
                <div>
                    <h3>
                        What other services does firebase provide other than authentication?
                    </h3>
                    <h6>
                        There are many services which Firebase provides - 
                        
                            <li>
                             Hosting
                            </li>
                            <li>
                            Cloud Storage
                            </li>
                            <li>
                            Google Analytics
                            </li>
                            <li>
                            Cloud Messaging
                            </li>
                            <li>
                            Cloud Functions
                            </li>
                            <li>
                            Predictions
                            </li>
                        
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Blogs;