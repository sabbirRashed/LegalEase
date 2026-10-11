import NoRequestsCard from '@/components/dashboard/user/NoRequestCard';
import { getRequestByClientId } from '@/lib/api/hiringRequest';
import { Check } from '@gravity-ui/icons';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const UserHiringHistory = async () => {
    const userRequest = await getRequestByClientId();

    const getStatusBtn = (status) => {
        const currentStatus = status?.toLowerCase();

        if (currentStatus === 'accepted') {
            return (
                <Chip color="success" size="sm" variant="soft">
                    {status}
                </Chip>
            );
        }

        if (currentStatus === 'rejected') {
            return (
                <Chip color="danger" size="sm" variant="soft">
                    {status}
                </Chip>
            );
        }

        if (currentStatus === 'pending') {
            return (
                <Chip color="warning" size="sm" variant="soft">
                    {status}
                </Chip>
            );
        }

        return null;
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

            {/* Page Header */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    Hiring History
                </h2>

                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                    Keep track of your legal requests, monitor their progress,
                    and stay informed about every step of your lawyer engagement.
                </p>
            </div>

            {/* Main Section */}
            <section className="w-full rounded-xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">

                {/* Section Header */}
                <div className="mb-5 sm:mb-6">
                    <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                        Your Legal Engagements
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm leading-5 text-slate-500 sm:text-base">
                        View your hiring requests, lawyer details, fees, and current
                        status—all in one place.
                    </p>
                </div>

                {userRequest.length > 0 ? (
                    <>
                        {/* ================= TABLET & DESKTOP ================= */}
                        <div className="hidden w-full overflow-x-auto md:block">
                            <Table>
                                <Table.ResizableContainer>
                                    <Table.Content
                                        aria-label="Hiring history table"
                                        className="min-w-[750px]"
                                    >
                                        <Table.Header>

                                            <Table.Column
                                                isRowHeader
                                                defaultWidth="1fr"
                                                id="name"
                                                minWidth={160}
                                            >
                                                Lawyer Name
                                                <Table.ColumnResizer />
                                            </Table.Column>

                                            <Table.Column
                                                defaultWidth="1fr"
                                                id="specialization"
                                                minWidth={200}
                                            >
                                                Specialization
                                                <Table.ColumnResizer />
                                            </Table.Column>

                                            <Table.Column
                                                defaultWidth="1fr"
                                                id="fee"
                                                minWidth={130}
                                            >
                                                Fee
                                            </Table.Column>

                                            <Table.Column
                                                defaultWidth="1fr"
                                                id="date"
                                                minWidth={160}
                                            >
                                                Hiring Date
                                            </Table.Column>

                                            <Table.Column
                                                defaultWidth="1fr"
                                                id="status"
                                                minWidth={110}
                                            >
                                                Status
                                                <Table.ColumnResizer />
                                            </Table.Column>

                                            <Table.Column
                                                defaultWidth="1fr"
                                                id="action"
                                                minWidth={130}
                                            >
                                                Action
                                            </Table.Column>

                                        </Table.Header>

                                        <Table.Body>
                                            {userRequest.map((item) => (
                                                <Table.Row key={item?._id}>

                                                    {/* Lawyer Name */}
                                                    <Table.Cell>
                                                        <span className="font-medium text-slate-800">
                                                            {item?.lawyerName}
                                                        </span>
                                                    </Table.Cell>

                                                    {/* Specialization */}
                                                    <Table.Cell>
                                                        <span className="text-sm text-slate-600">
                                                            {item?.specialization || 'Criminal Law'}
                                                        </span>
                                                    </Table.Cell>

                                                    {/* Fee */}
                                                    <Table.Cell>
                                                        <span className="font-medium text-slate-700">
                                                            ৳{item?.consultationRate}
                                                        </span>
                                                    </Table.Cell>

                                                    {/* Hiring Date */}
                                                    <Table.Cell>
                                                        <span className="text-sm text-slate-600">
                                                            {formatDate(item?.createAt)}
                                                        </span>
                                                    </Table.Cell>

                                                    {/* Status */}
                                                    <Table.Cell>
                                                        {getStatusBtn(item?.status)}
                                                    </Table.Cell>

                                                    {/* Action */}
                                                    <Table.Cell>
                                                        {item?.status?.toLowerCase() === 'accepted' ? (
                                                            item?.paymentStatus?.toLowerCase() === 'unpaid' ? (
                                                                <form
                                                                    action="/api/checkout_sessions"
                                                                    method="POST"
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        name="requestId"
                                                                        value={item?._id}
                                                                    />

                                                                    <button
                                                                        type="submit"
                                                                        className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                                                                    >
                                                                        Pay Now
                                                                    </button>
                                                                </form>
                                                            ) : (
                                                                <Button
                                                                    size="sm"
                                                                    isDisabled
                                                                    className="items-center gap-1 rounded-md bg-emerald-600/10 text-xs font-medium text-emerald-600"
                                                                >
                                                                    <Check />
                                                                    Paid
                                                                </Button>
                                                            )
                                                        ) : (
                                                            <span className="text-sm text-slate-400">
                                                                —
                                                            </span>
                                                        )}
                                                    </Table.Cell>

                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table.Content>
                                </Table.ResizableContainer>
                            </Table>
                        </div>

                        {/* ================= MOBILE ================= */}
                        <div className="space-y-4 md:hidden">

                            {userRequest.map((item) => (
                                <div
                                    key={item?._id}
                                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
                                >

                                    {/* Lawyer + Status */}
                                    <div className="flex items-start justify-between gap-3">

                                        <div className="min-w-0">
                                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                                Lawyer
                                            </p>

                                            <h3 className="mt-1 truncate text-base font-semibold text-slate-900">
                                                {item?.lawyerName}
                                            </h3>
                                        </div>

                                        <div className="shrink-0">
                                            {getStatusBtn(item?.status)}
                                        </div>

                                    </div>

                                    {/* Details */}
                                    <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">

                                        {/* Specialization */}
                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Specialization
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-slate-700">
                                                {item?.specialization || 'Criminal Law'}
                                            </p>
                                        </div>

                                        {/* Fee */}
                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Consultation Fee
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                ৳{item?.consultationRate}
                                            </p>
                                        </div>

                                        {/* Hiring Date */}
                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Hiring Date
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-slate-700">
                                                {formatDate(item?.createAt)}
                                            </p>
                                        </div>

                                        {/* Payment */}
                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Payment
                                            </p>

                                            <p className="mt-1 text-sm font-medium capitalize text-slate-700">
                                                {item?.paymentStatus || '—'}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Payment Action */}
                                    {item?.status?.toLowerCase() === 'accepted' && (
                                        <div className="mt-5 border-t border-slate-200 pt-4">

                                            {item?.paymentStatus?.toLowerCase() === 'unpaid' ? (
                                                <form
                                                    action="/api/checkout_sessions"
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="requestId"
                                                        value={item?._id}
                                                    />

                                                    <button
                                                        type="submit"
                                                        className="w-full cursor-pointer rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                                                    >
                                                        Pay Now
                                                    </button>
                                                </form>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    isDisabled
                                                    className="flex w-full items-center justify-center gap-1 rounded-md bg-emerald-600/10 text-sm font-medium text-emerald-600"
                                                >
                                                    <Check />
                                                    Paid
                                                </Button>
                                            )}

                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>
                    </>
                ) : (
                    <NoRequestsCard />
                )}

            </section>
        </div>
    );
};

export default UserHiringHistory;