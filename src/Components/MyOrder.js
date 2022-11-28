import React from 'react';
import toast from 'react-hot-toast';

const MyOrder = ({ myOrder }) => {

    const { img, price, product } = myOrder;
    const handlePayment = () => {
        toast.error('Payment Options Coming Soon')
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product}</h2>

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center">
                    <div className="flex items-center">
                        <button onClick={handlePayment} className="btn btn-primary border-0 font-semibold hover:bg-[#d44040] text-white text-muted">Purchase Now</button>
                    </div>

                    <p className='text-xl my-2 font-bold text-primary'>Price : {price}$</p>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;