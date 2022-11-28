import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsFillTrashFill } from 'react-icons/bs';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers`);
            const data = await res.json();
            return data
        }
    });
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/delete/${id}`, { method: 'DELETE' })
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
                    {sellers.map((seller, i) =>
                        <tr key={seller._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button onClick={() => handleDelete(seller._id)} className="btn btn-error border-0 font-semibold text-white"><BsFillTrashFill></BsFillTrashFill></button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    );
};
export default AllSellers