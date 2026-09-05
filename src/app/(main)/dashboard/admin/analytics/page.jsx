import AnalyticsCard from '@/components/dashboard/admin/AnalyticsCard';
import React from 'react';

const AnalyticsPage = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto md:px-6 py-8'>
            <div className='mb-4'>
                <h2 className="text-2xl font-bold text-slate-900">Analytics Overview</h2>
                <p className="mt-1 text-sm text-slate-500">Get a clear overview of platform activity, users, hires, and revenue.</p>
            </div>

            <AnalyticsCard/>
        </div>
    );
};

export default AnalyticsPage;