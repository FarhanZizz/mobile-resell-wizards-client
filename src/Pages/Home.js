import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdsContainer from '../Components/AdsContainer';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import Navbar from '../Components/Navbar';
import NewsLetter from '../Components/NewsLetter';
import WhyUs from '../Components/WhyUs';
import Loading from './Loading';
import Footer from '../Components/Footer'


const Home = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-resell-wizards-server.vercel.app/products/advertised`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {products.length && <AdsContainer products={products}></AdsContainer>}
            <Brands></Brands>
            <WhyUs></WhyUs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;