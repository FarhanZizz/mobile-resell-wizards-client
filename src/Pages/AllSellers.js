import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsFillTrashFill } from 'react-icons/bs';
import Loading from './Loading';

const AllSellers = () => {

    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/sellers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/user/delete/${id}`, {
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
    const handleVerify = (email) => {
        fetch(`https://mobile-resell-wizards-server.vercel.app/seller/verify?email=${email}`, {
            method: 'PATCH',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Seller Verified Successfully')
                }
                else {
                    toast.error('seller is alredy verified')
                }
            })
    }
    return (
        <div className="overflow-x-auto rounded">
            <h1 className="my-5 text-xl font-bold text-center">All Sellers</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((seller, i) =>
                        <tr key={seller._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>
                                <div className="flex">
                                    <button onClick={() => handleVerify(seller.email)} className="btn btn-primary border-0 font-semibold text-white mx-1">Verify Seller</button>
                                    <button onClick={() => handleDelete(seller._id)} className="btn btn-error border-0 font-semibold text-white"><BsFillTrashFill></BsFillTrashFill></button>
                                </div>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};
export default AllSellers