import React from 'react';
import toast from 'react-hot-toast';
import { BsFillTrashFill } from 'react-icons/bs';

const ReportedCard = ({ reportedItem, refetch }) => {
    const { name, img, used, seller, orginal_price, time, Price, location, _id } = reportedItem;

    const handleDelete = () => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/product/delete/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    refetch();
                    toast.success('Deleted Successfully')
                }
            })
    }
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
                    <button onClick={handleDelete} className="btn btn-error border-0 font-semibold text-white"><BsFillTrashFill></BsFillTrashFill></button>


                    <p className='text-xl my-2 font-bold text-primary'>Price : {Price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ReportedCard;