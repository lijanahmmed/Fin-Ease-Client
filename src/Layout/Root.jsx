import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='bg-purple-100'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;