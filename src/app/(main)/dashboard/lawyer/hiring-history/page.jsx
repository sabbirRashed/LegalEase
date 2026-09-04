
import RequestAcceptBtn from '@/components/dashboard/lawyer/RequestAcceptBtn';
import RequestRejectBtn from '@/components/dashboard/lawyer/RequestRejectBtn';
import { getRequestByProfileId } from '@/lib/api/hiringRequest';
import { getUserSession } from '@/lib/core/session';
import { Button, Chip } from '@heroui/react';
import React from 'react';
import { FiInbox } from 'react-icons/fi';



const HiringHistory = async () => {


    const clientRequests = await getRequestByProfileId();

    return (
        <div className='w-11/12 max-w-7xl mx-auto my-20 '>

            {/* page header */}
            <div className='mb-8'>
                <h2 className="text-3xl font-bold text-slate-900">Hiring History</h2>
                <p className="mt-1.5 text-slate-500">Review and manage all hiring requests from your clients.</p>
            </div>

            {/* Request History Table */}
            <section className=' border bg-white p-6 sm:p-8 w-full min-w-0'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold text-slate-900'>Client Requests</h2>
                    <p className='text-slate-500 text-sm ms:text-base mt-1'>Review incoming hiring requests and respond to clients.</p>
                </div>

                {
                    clientRequests.length > 0 ?
                        <div className="rounded-2xl border border-slate-200 overflow-x-auto">

                            <table className=" text-left text-sm w-full min-w-[360px]">

                                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Client Name</th>
                                        <th className="px-4 py-3">Request Date</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>


                                <tbody className="divide-y divide-slate-100">
                                    {clientRequests.map((item) => (
                                        <tr key={item?._id} className="hover:bg-slate-50">

                                            <td className="px-4 py-3 font-medium text-slate-900">
                                                {item?.clientName}
                                            </td>

                                            <td className="px-4 py-3 text-slate-500">
                                                {new Date(item?.createAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </td>

                                            <td className='px-4 py-3'>
                                                <Chip className={` 
                                        inline-block px-3 py-1.5 rounded-full
                                        ${item?.status.toLowerCase() === "pending" ?
                                                        "text-amber-700 text-xs bg-amber-100"
                                                        : item?.status.toLowerCase() === "accepted" ?
                                                            "text-success bg-green-100" : "text-rose-500 bg-rose-100"}`}>{item?.status}
                                                </Chip>
                                            </td>

                                            <td className="px-4 py-3">

                                                <div className="flex items-center justify-end gap-2 md:gap-4">
                                                    {
                                                        item?.status.toLowerCase() === "pending" ?
                                                            <>
                                                                <RequestAcceptBtn id={item?._id} />
                                                                <RequestRejectBtn id={item?._id} />
                                                            </>
                                                            : item?.status.toLowerCase() === "accepted" ?
                                                                <Chip
                                                                    variant='secondary'
                                                                    size='sm'
                                                                    className="text-green-500 px-2 py-1 text-xs hover:text-green-600 "
                                                                >
                                                                    Accepted
                                                                </Chip>
                                                                : item?.status.toLowerCase() === "rejected" ?
                                                                    <Chip
                                                                        size='sm'
                                                                        variant='secondary'
                                                                        className="text-xs px-2 py-1 hover:text-rose-600 hover:bg-red-100 text-rose-500 transition-all duration-300"
                                                                    >
                                                                        Rejected
                                                                    </Chip>

                                                                    : ""
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        :
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-14 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <FiInbox className="h-7 w-7" />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                No Hiring Requests Yet
                            </h3>

                            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                                You don't have any client hiring requests at the moment.
                                New requests from clients will appear here when they hire you.
                            </p>
                        </div>
                }

            </section>
        </div>
    );
};

export default HiringHistory;