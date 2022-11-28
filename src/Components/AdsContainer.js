import React, { useState } from 'react';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const AdsContainer = ({ products }) => {

    const [productDetails, setProductDetails] = useState(null)
    return (
        <div className='w-2/3 mx-auto grid grid-cols-1 gap-y-8 my-10' >
            <h1 className="mb-5 text-2xl font-semibold text-center">Advertised Products!</h1>
            {
                products.map(product => <ProductCard key={product._id} setProductDetails={setProductDetails} product={product}></ProductCard>)
            }
            {
                productDetails && <BookingModal setProductDetails={setProductDetails} productDetails={productDetails}></BookingModal>
            }
        </div >

    );
};

export default AdsContainer;