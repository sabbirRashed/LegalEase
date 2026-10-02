import NoRequestsCard from '@/components/dashboard/user/NoRequestCard';
import { getRequestByClientId } from '@/lib/api/hiringRequest';
import { Check } from '@gravity-ui/icons';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const UserHiringHistory = async () => {
    const userRequest = await getRequestByClientId();

    const getStatusBtn = (status) => {
        if (status?.toLowerCase() === "accepted")
            return (
                <Chip color="success" size="sm" variant="soft">
                    {status}
                </Chip>
            );

        if (status?.toLowerCase() === "rejected")
            return (
                <Chip color="danger" size="sm" variant="soft">
                    {status}
                </Chip>
            );

        if (status?.toLowerCase() === "pending")
            return (
                <Chip color="warning" size="sm" variant="soft">
                    {status}
                </Chip>
            );

        return null;
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

            {/* Page Header */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Hiring History
                </h2>

                <p className="mt-1.5 max-w-2xl text-sm sm:text-base leading-6 text-slate-500">
                    Keep track of your legal requests, monitor their progress,
                    and stay informed about every step of your lawyer engagement.
                </p>
            </div>

            {/* Main Section */}
            <section className="w-full rounded-xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">

                {/* Section Header */}
                <div className="mb-5 sm:mb-6">
                    <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                        Your Legal Engagements
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm sm:text-base text-slate-500">
                        View your hiring requests, lawyer details, fees, and current
                        status—all in one place.
                    </p>
                </div>

                {userRequest.length > 0 ? (
                    <>
                        {/* ================= TABLET & DESKTOP ================= */}
                        <div className="hidden md:block w-full overflow-x-auto">
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

                                                    <Table.Cell>
                                                        <span className="font-medium text-slate-800">
                                                            {item?.lawyerName}
                                                        </span>
                                                    </Table.Cell>

                                                    <Table.Cell>
                                                        <span className="text-sm text-slate-600">
                                                            {item?.specialization || "Criminal Law"}
                                                        </span>
                                                    </Table.Cell>

                                                    <Table.Cell>
                                                        <span className="font-medium text-slate-700">
                                                            ৳{item?.consultationRate}
                                                        </span>
                                                    </Table.Cell>

                                                    <Table.Cell>
                                                        <span className="text-sm text-slate-600">
                                                            {formatDate(item?.createAt)}
                                                        </span>
                                                    </Table.Cell>

                                                    <Table.Cell>
                                                        {getStatusBtn(item?.status)}
                                                    </Table.Cell>

                                                    <Table.Cell>
                                                        {item?.status?.toLowerCase() === "accepted" ? (
                                                            item?.paymentStatus?.toLowerCase() === "unpaid" ? (
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
                                                                        className="rounded-md bg-emerald-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
                                                                        type="submit"
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
                        <div className="md:hidden space-y-4">

                            {userRequest.map((item) => (
                                <div
                                    key={item?._id}
                                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
                                >

                                    {/* Lawyer + Status */}
                                    <div className="flex items-start justify-between gap-3">

                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-400">
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
                                    <div className="mt-4 grid grid-cols-2 gap-4">

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Specialization
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-slate-700">
                                                {item?.specialization || "Criminal Law"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Consultation Fee
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                ৳{item?.consultationRate}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Hiring Date
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-slate-700">
                                                {formatDate(item?.createAt)}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Payment
                                            </p>

                                            <p className="mt-1 text-sm font-medium text-slate-700">
                                                {item?.paymentStatus || "—"}
                                            </p>
                                        </div>

                                    </div>

                                    {/* Payment Action */}
                                    {item?.status?.toLowerCase() === "accepted" && (
                                        <div className="mt-4 border-t border-slate-200 pt-4">

                                            {item?.paymentStatus?.toLowerCase() === "unpaid" ? (
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
                                                        className="w-full rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
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