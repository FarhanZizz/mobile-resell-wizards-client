import React from 'react';
import AdCard from './AdCard';

const AdsContainer = () => {
    return (
        <div className='my-20'>
            <h1 className="my-10 text-center text-2xl font-semibold">Advertised Products!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1'>
                <AdCard></AdCard>
                <AdCard></AdCard>
                <AdCard></AdCard>
            </div>
        </div>
    );
};

export default AdsContainer;