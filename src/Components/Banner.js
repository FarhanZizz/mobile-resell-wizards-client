import React from 'react';
import bannerImg from '../Assets/banner-img.png'
import Button from '../Utilities/Button';
const Banner = () => {
    return (
        <section className="hero  mx-auto text-white bg-[url('/src/Assets/banner-bg.jpg')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="lg:w-1/2 rounded-lg" src={bannerImg} alt="" />
                <div>
                    <h1 className="text-5xl leading-tight font-bold">The Largest Mobile Resell Marketplace in Bangladesh!</h1>
                    <p className="py-6">Sell Your Old Android/iOS Phone at <span className='font-bold'>MRW</span> & Get the Best Services, Quote & Free Pickup. Unlock the Best Market Price for Your Phone Now!</p>

                    <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;