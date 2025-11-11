import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='bg-purple-100'>
                <Navbar></Navbar>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='bg-gray-400 mt-15'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;