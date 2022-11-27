import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyProduct from '../Components/MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)


    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    return (
        <div className='w-2/3 mx-auto grid grid-cols-1 gap-y-8 my-10'>
            <h1 className="mb-5 text-2xl font-semibold text-center">My Products!</h1>
            {
                myProducts.map(myProduct => <MyProduct key={myProduct._id} refetch={refetch} myProduct={myProduct}></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;