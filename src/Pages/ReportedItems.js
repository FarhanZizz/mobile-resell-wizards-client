import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportedCard from '../Components/ReportedCard';
import Loading from './Loading';

const ReportedItems = () => {
    const { data: reportedItems = [], refetch, isLoading } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/products/reports`, {
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
    return (
        <div className='w-2/3 mx-auto grid grid-cols-1 gap-y-8 my-10'>
            <h1 className="mb-5 text-error text-2xl font-semibold text-center">Reported Products</h1>
            {
                reportedItems.map(reportedItem => <ReportedCard refetch={refetch} key={reportedItem._id} reportedItem={reportedItem}></ReportedCard>)
            }
        </div>
    );
};

export default ReportedItems;