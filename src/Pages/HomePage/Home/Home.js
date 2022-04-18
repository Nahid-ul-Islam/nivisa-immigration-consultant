import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            {/* <CustomerFeedback></CustomerFeedback> */}
        </div>
    );
};

export default Home;