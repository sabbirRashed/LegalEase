import { DashboardSidebar } from '@/components/dashboard/DashboardSideBar';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async ({ children }) => {
    const user = await getUserSession();

    if (!user?.role) {
        redirect('/signUp')
    }
    return (
        <div className="flex  h-screen overflow-hidden">

            <DashboardSidebar />
            <main className="flex-1 h-screen overflow-y-auto ">
                {children}
            </main>

        </div>
    );
};

export default DashboardLayout;