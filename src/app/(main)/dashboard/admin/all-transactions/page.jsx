import TransactionTable from '@/components/dashboard/admin/TransactionTable';
import { transactionFetchingApi } from '@/lib/api/transactions';
import React from 'react';
import { LuReceiptText } from 'react-icons/lu';

const AllTransactions = async () => {
    const transactions = await transactionFetchingApi()

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

                {
                    transactions.length > 0 ?
                        <TransactionTable transactions={transactions} />
                        :
                        <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                                <LuReceiptText className="h-7 w-7 text-slate-400" />
                            </div>

                            <h3 className="text-lg font-semibold text-slate-800">
                                No Transactions Available
                            </h3>

                            <p className="mt-2 max-w-md text-sm text-slate-500">
                                There are no transaction records available at the moment.
                                Transactions will appear here once a payment is completed.
                            </p>
                        </div>
                }

            </section>
        </div>
    );
};

export default AllTransactions;