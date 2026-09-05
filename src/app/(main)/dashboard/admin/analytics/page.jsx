import AnalyticsCard from '@/components/dashboard/admin/AnalyticsCard';
import RevenueRechart from '@/components/dashboard/admin/RevenueRechart';
import { getAnalyticsData } from '@/lib/api/analytics';
import React from 'react';

const AnalyticsPage = async () => {

    const analyticsData = await getAnalyticsData();
    const {revenueResult} = analyticsData;

    return (
        <div className='w-11/12 max-w-7xl mx-auto md:px-6 py-8'>
            <div className='mb-4'>
                <h2 className="text-2xl font-bold text-slate-900">Analytics Overview</h2>
                <p className="mt-1 text-sm text-slate-500">Get a clear overview of platform activity, users, hires, and revenue.</p>
            </div>

            <AnalyticsCard analyticsData={analyticsData} />

            {/* Revenue overview */}
            <section className="mt-10 rounded-xl border border-default-200 bg-white p-5 shadow-sm">
                <div className="mb-5">
                    <h2 className="text-lg font-semibold text-foreground">
                        Revenue Overview
                    </h2>

                    <p className="mt-1 text-sm text-default-500">
                        Monthly revenue from paid transactions
                    </p>
                </div>

                <RevenueRechart revenueResult={revenueResult} />
            </section>
        </div>
    );
};

export default AnalyticsPage;