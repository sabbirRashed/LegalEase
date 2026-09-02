import React from 'react';

const LawyerDashboardPage = () => {
    return (
        <div className=''>
            {/* <div className="rounded-2xl border border-slate-200">

                    <table className="text-left text-sm w-full">

                        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-4 py-3">Client Name</th>
                                <th className="px-4 py-3">Request Date</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>


                        <tbody className="divide-y divide-slate-100">
                            {lawyerRequests.map((item) => (
                                <tr key={item?._id} className="hover:bg-slate-50">

                                    <td className="px-4 py-3 font-medium text-slate-900">
                                        {item?.clientName}
                                    </td>

                                    <td className="px-4 py-3 text-slate-500">
                                        {item?.requestDate
                                        }
                                    </td>

                                    <td className="px-4 py-3 text-slate-500">
                                        {item?.status}
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2 md:gap-4">
                                            <Button>
                                                Accept
                                            </Button>

                                            <Button
                                                size='sm'
                                                variant='outline'
                                                className=" hover:text-rose-600 hover:bg-red-100 text-rose-500 transition-all duration-300"
                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
        </div>
    );
};

export default LawyerDashboardPage;