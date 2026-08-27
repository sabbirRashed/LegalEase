import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;