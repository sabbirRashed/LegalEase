import TransactionTable from '@/components/dashboard/admin/TransactionTable';
import React from 'react';

const AllTransactions = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto md:px-6 py-8'>
            <div className='mb-10'>
                <h1 className="text-2xl font-bold text-slate-900">
                    All Transactions
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    View and monitor all platform transactions in one place.
                </p>
            </div>


            {/* Manage user table */}
            <section className='mt-10 border bg-white p-6 sm:p-8 w-full rounded-lg'>
                <div className='mb-4'>
                    <h2 className='text-lg font-semibold text-slate-900'>Transaction Records</h2>
                    <p className='text-slate-500 text-sm ms:text-base mt-1 max-w-lg'>View detailed payment records, including transaction IDs, participant emails, amounts, and transaction dates</p>
                </div>

                <TransactionTable />

            </section>
        </div>
    );
};

export default AllTransactions;