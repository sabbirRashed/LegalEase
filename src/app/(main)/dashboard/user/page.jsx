import NoRequestsCard from "@/components/dashboard/user/NoRequestCard";
import { getRequestByClientId } from "@/lib/api/hiringRequest";
import { getUserSession } from "@/lib/core/session";
import { Avatar, Button, Chip, Table } from "@heroui/react";
import Link from "next/link";


const UserDashboardPage = async () => {

    const user = await getUserSession()
    const userRequest = await getRequestByClientId();

    const acceptedReq = userRequest.filter(item => item.status.toLowerCase() === "accepted")
    const pendingReq = userRequest.filter(item => item.status.toLowerCase() === "pending")


    const getStatusBtn = (status) => {
        if (status.toLowerCase() === "accepted") return <Chip color="success" size="sm" variant="soft">{status}</Chip>
        if (status.toLowerCase() === "rejected") return <Chip color="danger" size="sm" variant="soft">{status}</Chip>
        if (status.toLowerCase() === "pending") return <Chip color="warning" size="sm" variant="soft">{status}</Chip>
    }

    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-8">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        User Dashboard
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Welcome back, {user?.name}
                    </p>
                </div>

                {/* Profile Card */}
                <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <Avatar.Image
                                    src={user?.image}
                                    alt={user?.name}
                                />

                                <Avatar.Fallback>
                                    {user?.name
                                        ?.slice(0, 2)
                                        .toUpperCase()}
                                </Avatar.Fallback>
                            </Avatar>

                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">
                                    {user?.name}
                                </h2>

                                <p className="text-sm text-slate-500">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        {/* Update Profile Button */}

                        <Link href="/dashboard/user/update-profile">
                            <Button
                                variant="primary"
                                className="rounded-md bg-blue-600 px-5 font-medium text-white hover:bg-slate-800"
                            >
                                Update Profile
                            </Button>
                        </Link>


                    </div>
                </section>

                {/* Statistics */}
                <div className="mt-6 mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Total Hiring Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            {userRequest.length}
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Accepted Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-emerald-600">
                            {
                                acceptedReq.length
                            }
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Pending Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-amber-600">
                            {pendingReq.length}
                        </p>
                    </div>

                </div>

                {/* Recent Requests */}
                {userRequest.length > 0 ? <section className=" rounded-lg border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Recent Hiring Requests
                        </h2>

                        <Link href={'/dashboard/user/hiring-history'}>
                            <Button
                                href="/dashboard/user/hiring-history"
                                variant="secondary"
                                size="sm"
                                className="rounded-md"
                            >
                                View All
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-10">
                        <Table>
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
                                                    </Table.Row>
                                                )
                                            })
                                        }

                                    </Table.Body>
                                </Table.Content>
                            </Table.ResizableContainer>
                        </Table>
                    </div>
                </section>
                    : <NoRequestsCard />}

            </div>
        </main>
    );
};

export default UserDashboardPage;