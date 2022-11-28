import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../Assets/apple_icon.png'
import xiomi from '../Assets/xiomi_icon.png'
import google from '../Assets/google_icon.png'

const Brands = () => {
    return (
        <div>
            <h1 className="my-10 text-2xl font-semibold text-center">Brands We Deal</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                <Link to='/category/1'><img className='lg:w-1/2 w-1/3 mx-auto' src={apple} alt="" /></Link>
                <Link to='/category/2'><img className='lg:w-1/2 w-1/3 mx-auto' src={google} alt="" /></Link>
                <Link to='/category/3'><img className='lg:w-1/2 w-1/3 mx-auto' src={xiomi} alt="" /></Link>
            </div>
        </div>
    );
};

export default Brands;