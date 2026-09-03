import NoRequestsCard from '@/components/dashboard/user/NoRequestCard';
import { getRequestByClientId } from '@/lib/api/hiringRequest';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const UserHiringHistory = async () => {

    const userRequest = await getRequestByClientId();

    const getStatusBtn = (status) => {
        if (status.toLowerCase() === "accepted") return <Chip color="success" size="sm" variant="soft">{status}</Chip>
        if (status.toLowerCase() === "rejected") return <Chip color="danger" size="sm" variant="soft">{status}</Chip>
        if (status.toLowerCase() === "pending") return <Chip color="warning" size="sm" variant="soft">{status}</Chip>
    }

    const getPayBtn = (status) => {
        if (status.toLowerCase() === "accepted") {
            return (<Button
                size="sm"
                variant="primary"
                className="rounded-md bg-emerald-600 px-4 text-xs font-medium text-white transition hover:bg-emerald-700"
            >
                Pay Now
            </Button>)
        }
        return
    }

    return (
        <div className='w-11/12 max-w-7xl mx-auto px-6 py-8'>

            {/* page header */}
            <div className='mb-8'>
                <h2 className="text-2xl font-bold text-slate-900">Hiring History</h2>
                <p className="mt-1.5 text-slate-500 max-w-xl">Keep track of your legal requests, monitor their progress, and stay informed about every step of your lawyer engagement</p>
            </div>

            <section className='border bg-white p-6 sm:p-8 w-full rounded-lg'>
                <div className='mb-4'>
                    <h2 className='text-lg font-semibold text-slate-900'>Your Legal Engagements</h2>
                    <p className='text-slate-500 text-sm ms:text-base mt-1 max-w-lg'>View your hiring requests, lawyer details, fees, and current status—all in one place.</p>
                </div>

                {
                    userRequest.length > 0 ? <Table>
                        <Table.ResizableContainer>
                            <Table.Content aria-label="Table with resizable columns" className="min-w-[700px]">
                                <Table.Header>
                                    <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                                        Lawyer Name
                                        <Table.ColumnResizer />
                                    </Table.Column>
                                    <Table.Column defaultWidth="1fr" id="specialization" minWidth={220}>
                                        Specialization
                                        <Table.ColumnResizer />
                                    </Table.Column>
                                    <Table.Column defaultWidth="1fr" id="fee" minWidth={200}>
                                        Fee
                                    </Table.Column>
                                    <Table.Column defaultWidth="1fr" id="date" minWidth={200}>
                                        Hiring Date
                                    </Table.Column>
                                    <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                        Status
                                        <Table.ColumnResizer />
                                    </Table.Column>
                                    <Table.Column defaultWidth="1fr" id="action" minWidth={200}>
                                        Action
                                    </Table.Column>
                                </Table.Header>

                                <Table.Body>

                                    {
                                        userRequest.map(item => {
                                            return (
                                                <Table.Row key={item?._id}>
                                                    <Table.Cell>{item?.lawyerName}</Table.Cell>
                                                    <Table.Cell>{item?.specialization || "Criminal Law"}</Table.Cell>
                                                    <Table.Cell>৳{item?.consultationRate}</Table.Cell>
                                                    <Table.Cell>
                                                        {new Date(item.createAt).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {
                                                            getStatusBtn(item?.status)
                                                        }
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {
                                                            getPayBtn(item?.status) || "---"
                                                        }
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    }

                                </Table.Body>
                            </Table.Content>
                        </Table.ResizableContainer>
                    </Table>
                    :
                    <NoRequestsCard />
                }

            </section>
        </div>
    );
};

export default UserHiringHistory;