import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BsCheckLg } from "react-icons/bs";

const ProductCard = ({ product, setProductDetails }) => {

    const { name, img, used, seller, orginal_price, time, Price, location, _id, verified } = product;

    const { user } = useContext(AuthContext)

    const handleReport = (id) => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/product/report/${id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast.success('Reported Successfully')
                }
                else {
                    toast.error('Product is already Reported')
                }
            })
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Used for : </span>{used}</p>
                <p><span className='font-semibold'>Seller Name : </span>{seller}{verified && <BsCheckLg className='inline mx-1'></BsCheckLg>}</p>
                <p><span className='font-semibold'>Original Price : </span>{orginal_price}$</p>
                <p><span className='font-semibold'>Location : </span>{location}</p>
                <p className='font-semibold'>Posted : {time}</p>

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center">
                    <div className="flex items-center">
                        <label onClick={() => { setProductDetails(product) }} htmlFor="booking-modal" className="btn btn-primary border-0 font-semibold hover:bg-[#d44040] text-white text-muted">Book Now</label>
                        {user?.email && <button onClick={() => handleReport(_id)} className="btn mx-1 btn-success border-0 font-semibold text-white">Report to admin</button>}
                    </div>

                    <p className='text-xl my-2 font-bold text-primary'>Price : {Price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;