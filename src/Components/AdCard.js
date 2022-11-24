import React from 'react';
import Button from '../Utilities/Button';

const AdCard = () => {
    return (
        <div className="card w-96 mx-auto shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://quickmobile.in/assets/images/upload/apple-iphone-x-1.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Button>Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default AdCard;