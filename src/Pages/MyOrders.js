import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyOrder from '../Components/MyOrder';
import Loading from './Loading';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/bookings?email=${user.email}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-2/3 mx-auto grid grid-cols-1 gap-y-8 my-20'>
            <h1 className="mb-5 text-2xl font-semibold text-center">My Orders</h1>
            {
                myOrders.map(myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;