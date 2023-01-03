import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsFillTrashFill } from 'react-icons/bs';
import Loading from './Loading';

const AllBuyers = () => {
    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/buyers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            }
            );
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
    return (
        <div className="overflow-x-auto rounded">
            <h1 className="my-5 text-xl font-bold text-center">All Buyers</h1>
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
                    {buyers.map((buyer, i) =>
                        <tr key={buyer._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button onClick={() => handleDelete(buyer._id)} className="btn btn-error border-0 font-semibold text-white"><BsFillTrashFill></BsFillTrashFill></button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;