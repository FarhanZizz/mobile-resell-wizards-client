import React from 'react';
import AdsContainer from '../Components/AdsContainer';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import WhyUs from '../Components/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdsContainer></AdsContainer>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;