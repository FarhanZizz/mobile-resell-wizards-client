
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Components/BookingModal';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const products = useLoaderData();

    const [productDetails, setProductDetails] = useState(null)
    return (
        <div className='w-2/3 mx-auto grid grid-cols-1 gap-y-8 my-20'>
            <h1 className="mb-5 text-2xl font-semibold text-center">Products Available Right Now!</h1>
            {
                products.map(product => <ProductCard key={product._id} setProductDetails={setProductDetails} product={product}></ProductCard>)
            }
            {
                productDetails && <BookingModal setProductDetails={setProductDetails} productDetails={productDetails}></BookingModal>
            }
        </div>
    );
};

export default Products;