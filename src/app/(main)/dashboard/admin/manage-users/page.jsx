import ManagePageStatCard from '@/components/dashboard/admin/ManagePageStatCard';
import UserManagementTable from '@/components/dashboard/admin/UserManagementTable';
import { Button, Table } from '@heroui/react';
import React from 'react';

const ManageUsersPage = () => {
    const users = 6

    return (
        <div className='w-11/12 max-w-7xl mx-auto md:px-6 py-8'>
            <div className='mb-10'>
                <h1 className="text-2xl font-bold text-slate-900">
                    Manage Users
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    View users, manage their roles, and control access across the platform.
                </p>
            </div>

            <ManagePageStatCard/>

            {/* Manage user table */}
            <section className='mt-10 border bg-white p-6 sm:p-8 w-full rounded-lg'>
                <div className='mb-4'>
                    <h2 className='text-lg font-semibold text-slate-900'>Your Legal Engagements</h2>
                    <p className='text-slate-500 text-sm ms:text-base mt-1 max-w-lg'>View your hiring requests, lawyer details, fees, and current status—all in one place.</p>
                </div>

                <UserManagementTable/>

            </section>
        </div>
    );
};

export default ManageUsersPage;