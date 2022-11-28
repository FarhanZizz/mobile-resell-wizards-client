import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AddProduct from './AddProduct';
import AllSellers from './AllSellers';
import Loading from './Loading';
import MyOrders from './MyOrders';

const DashboardDefault = () => {
    const { user } = useContext(AuthContext);
    const { data: userData = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/user?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {userData[0]?.type === "buyer" && <MyOrders></MyOrders>}
            {userData[0]?.type === "seller" && <AddProduct></AddProduct>}
            {userData[0]?.type === "admin" && <AllSellers></AllSellers>}
        </div>
    );
};

export default DashboardDefault;