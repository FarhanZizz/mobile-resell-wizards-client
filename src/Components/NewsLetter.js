import React from 'react';
import img from '../Assets/166929739917131063.webp'
import Button from '../Utilities/Button';

const NewsLetter = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto bg-base-200 p-6 my-20">
            <img className='mx-auto' src={img} alt="" />
            <div>
                <h1 className="my-6 text-2xl font-semibold"> <span style={{ color: '#0371EC' }}>Join Our Newsletter,</span> So That We Can Reach Out To You With Our Best News And Offers</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
                <Button>Subscribe</Button>
            </div>
        </section>
    );
};

export default NewsLetter;