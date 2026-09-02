
import RequestAcceptBtn from '@/components/dashboard/lawyer/RequestAcceptBtn';
import RequestRejectBtn from '@/components/dashboard/lawyer/RequestRejectBtn';
import { getRequestByProfileId } from '@/lib/api/hiringRequest';
import { getUserSession } from '@/lib/core/session';
import { Button } from '@heroui/react';
import React from 'react';


const lawyerRequests = [
    {
        _id: 1,
        clientName: "Eleanor Vance",
        requestDate: "2026-09-01",
        status: "pending",
        action: ["accept", "reject"]
    },
    {
        _id: 2,
        clientName: "Marcus Thorne",
        requestDate: "2026-08-28",
        status: "accept",
        action: ["reject"]
    },
    {
        _id: 3,
        clientName: "Julian Davis",
        requestDate: "2026-08-15",
        status: "reject",
        action: ["accept"]
    }
];

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
                                        <span className={` 
                                        inline-block px-3 py-1.5 rounded-full
                                        ${item?.status.toLowerCase() === "pending"? 
                                        "text-amber-700 text-xs bg-amber-100" 
                                        : item?.status.toLowerCase() === "accept"?
                                        "text-success bg-green-100" : "text-rose-500 bg-rose-100" }`}>{item?.status}</span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2 md:gap-4">
                                            <RequestAcceptBtn id={item?._id} />

                                            <RequestRejectBtn id={item?._id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default HiringHistory;