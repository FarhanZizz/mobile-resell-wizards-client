import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from './Loading';
const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const { data: userData = [], isLoading } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/user?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    const menuItems = <>
        {
            userData[0]?.type === "buyer" &&
            <>
                <li className='items-center'><Link className='font-semibold' to='/dashboard'>My Orders</Link></li>

            </>

        }
        {
            userData[0]?.type === "seller" &&
            <>
                <li className='items-center'><Link className='font-semibold' to='/dashboard'>Add Product</Link></li>
                <li className='items-center'><Link className='font-semibold' to='/dashboard/myproducts'>My Product</Link></li>
                <li className='items-center'><Link className='font-semibold' to='/dashboard/mybuyers'>My Buyers</Link></li>
            </>

        }
        {
            userData[0]?.type === "admin" &&
            <>
                <li className='items-center'><Link className='font-semibold' to='/dashboard'>All Sellers</Link></li>
                <li className='items-center'><Link className='font-semibold' to='/dashboard/buyers'>All Buyers</Link></li>
                <li className='items-center'><Link className='font-semibold' to='/dashboard/reporteditems'>Reported Items</Link></li>
            </>

        }
    </>

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <h1 className="my-5 text-xl font-bold text-center">Welcome <span className='text-primary'>{user?.displayName}!</span></h1>

                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;