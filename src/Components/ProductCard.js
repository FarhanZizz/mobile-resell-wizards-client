import React from 'react';

const ProductCard = ({ product, setProductDetails }) => {

    const { name, img, used, seller, orginal_price, time, Price, location } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Used for : </span>{used}</p>
                <p><span className='font-semibold'>Seller Name : </span>{seller}</p>
                <p><span className='font-semibold'>Original Price : </span>{orginal_price}$</p>
                <p><span className='font-semibold'>Location : </span>{location}</p>
                <p className='font-semibold'>Posted : {time}</p>

                <div className="flex flex-row-reverse items-center justify-center">
                    <label onClick={() => { setProductDetails(product) }} htmlFor="booking-modal" className="btn btn-primary border-0 font-semibold hover:bg-[#d44040] text-white text-muted">Book Now</label>

                    <p className='text-xl font-bold text-primary'>Price : {Price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;