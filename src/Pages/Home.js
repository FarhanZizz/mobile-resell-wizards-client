import React from 'react';
import AdsContainer from '../Components/AdsContainer';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import WhyUs from '../Components/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdsContainer></AdsContainer>
            <WhyUs></WhyUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;