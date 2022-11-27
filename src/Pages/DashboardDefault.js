import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AddProduct from './AddProduct';
import AllSellers from './AllSellers';
import MyOrders from './MyOrders';

const DashboardDefault = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])
    return (
        <div>
            {userData[0]?.type === "buyer" && <MyOrders></MyOrders>}
            {userData[0]?.type === "seller" && <AddProduct></AddProduct>}
            {userData[0]?.type === "admin" && <AllSellers></AllSellers>}
        </div>
    );
};

export default DashboardDefault;