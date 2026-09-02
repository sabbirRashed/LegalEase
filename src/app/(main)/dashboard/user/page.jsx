import { getUserSession } from "@/lib/core/session";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";


const UserDashboardPage = async () => {

    const user = await getUserSession()
    return (
        <main className="min-h-screen bg-slate-50">
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

                                {/* <Avatar.Fallback>
                                    {user?.name
                                        ?.slice(0, 2)
                                        .toUpperCase()}
                                </Avatar.Fallback> */}
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
                                className="rounded-md bg-slate-900 px-5 font-medium text-white hover:bg-slate-800"
                            >
                                Update Profile
                            </Button>
                        </Link>


                    </div>
                </section>

                {/* Statistics */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Total Hiring Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            5
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Accepted Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-emerald-600">
                            2
                        </p>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-6">
                        <p className="text-sm text-slate-500">
                            Pending Requests
                        </p>

                        <p className="mt-2 text-3xl font-bold text-amber-600">
                            3
                        </p>
                    </div>

                </div>

                {/* Recent Requests */}
                <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Recent Hiring Requests
                        </h2>

                        <Button
                            href="/dashboard/user/hiring-history"
                            variant="secondary"
                            size="sm"
                            className="rounded-md"
                        >
                            View All
                        </Button>
                    </div>

                    {/* Your request table/list goes here */}
                </section>

            </div>
        </main>
    );
};

export default UserDashboardPage;