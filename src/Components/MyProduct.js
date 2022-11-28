import React from 'react';
import toast from 'react-hot-toast';
import { BsFillTrashFill } from "react-icons/bs";
const MyProduct = ({ myProduct, refetch }) => {

    const { img, name, time, Price, status, _id } = myProduct;

    const handleDelete = () => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/product/delete/${_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success('Deleted Successfully')
                }
            })
    }
    const handleAdvertise = () => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/product/advertise/${_id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast.success('Advertised Successfully')
                }
                else {
                    toast.error('Product is already Advertised')
                }
            })
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-lg">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Status : </span>{status}</p>
                <p className='font-semibold'>Posted : {time}</p>

                <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center">
                    <div className='flex items-center'>
                        <button onClick={handleAdvertise} className="btn mx-1 btn-primary border-0 font-semibold text-white">Advertise</button>
                        <button onClick={handleDelete} className="btn btn-error border-0 font-semibold text-white"><BsFillTrashFill></BsFillTrashFill></button>
                    </div>

                    <p className='text-xl my-2 font-bold text-primary'>Price : {Price}$</p>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;