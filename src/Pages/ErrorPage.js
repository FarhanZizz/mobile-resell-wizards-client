import React from 'react';
import img from '../Assets/Error.jpg'
import Button from '../Utilities/Button';

const ErrorPage = () => {
    return (
        <div className='flex justify-center flex-col items-center my-10'>
            <img className='w-1/2' src={img} alt="" />
            <Button>Go to home</Button>
        </div>
    );
};

export default ErrorPage;