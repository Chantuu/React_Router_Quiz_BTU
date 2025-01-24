import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="bg-white h-8/10 px-3 md:px-14 py-2 md:py-4">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;
