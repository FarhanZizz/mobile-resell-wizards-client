import React from 'react';
import AdsContainer from '../Components/AdsContainer';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import NewsLetter from '../Components/NewsLetter';
import WhyUs from '../Components/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdsContainer></AdsContainer>
            <Brands></Brands>
            <WhyUs></WhyUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;