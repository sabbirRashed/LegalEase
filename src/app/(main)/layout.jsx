import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>{children}</div>
            <Footer/>
        </div>
    );
};

export default MainLayout;