import AnalyticsCard from "@/components/dashboard/admin/AnalyticsCard";
import { getAnalyticsData } from "@/lib/api/analytics";
import { Button } from "@heroui/react";
import Link from "next/link";
import {
    FaUsers,
    FaUserTie,
    FaBriefcase,
    FaMoneyBillWave,
    FaArrowRight,
} from "react-icons/fa";

const AdminDashboardHome = async () => {

    const analyticsData = await getAnalyticsData();

    return (
        <div className='w-11/12 max-w-7xl mx-auto md:px-6 py-8'>

            {/* Header */}
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-slate-900">
                    Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Welcome back! Here's an overview of your platform.
                </p>
            </div>

            {/* Stats */}
            <AnalyticsCard analyticsData={analyticsData} />


            {/* Main Content */}
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* Welcome Card */}
                <div className="rounded-xl border border-default-200 bg-white p-6 shadow-sm lg:col-span-2">
                    <div className="flex h-full flex-col justify-between">

                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Platform Overview
                            </h2>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                                Manage users, lawyers, hiring requests and
                                transactions from your admin dashboard.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href={'/dashboard/admin/manage-users'}>
                                <Button className="inline-flex items-center gap-2 rounded-lg bg-blue-600  transition hover:bg-blue-700">
                                    Manage Users
                                    <FaArrowRight className="text-xs" />
                                </Button>
                            </Link>

                            <Link href={'/dashboard/admin/all-transactions'}>
                                <Button
                                    variant="outline"
                                    className="inline-flex items-center gap-2 rounded-lg  text-slate-700 ">
                                    View Transactions
                                    <FaArrowRight className="text-xs" />
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Quick Actions */}
                <div className="rounded-xl border border-default-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Quick Actions
                    </h2>

                    <div className="mt-4 space-y-3">

                        <Link href={'/dashboard/admin/manage-users'}
                            className="block">
                            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition hover:bg-slate-50 cursor-pointer">
                                <span className="text-sm font-medium text-slate-700">
                                    Manage Users
                                </span>
                                <FaArrowRight className="text-xs text-slate-400" />
                            </button>
                        </Link>

                        <Link href={'/dashboard/admin/all-transactions'}
                            className="block">
                            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition hover:bg-slate-50 cursor-pointer">
                                <span className="text-sm font-medium text-slate-700">
                                    View Transactions
                                </span>
                                <FaArrowRight className="text-xs text-slate-400" />
                            </button>
                        </Link>

                        <Link href={'/dashboard/admin/analytics'}
                            className="block">
                            <button className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition hover:bg-slate-50 cursor-pointer">
                                <span className="text-sm font-medium text-slate-700">
                                    View Analytics
                                </span>
                                <FaArrowRight className="text-xs text-slate-400" />
                            </button>
                        </Link>

                    </div>
                </div>

            </div>

            {/* Recent Activity */}
            <div className="mt-6 rounded-xl border border-default-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Recent Activity
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Latest activities on your platform
                        </p>
                    </div>

                    <Link href={'/dashboard/admin/analytics'}>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                            View All
                        </button>
                    </Link>
                </div>

                <div className="flex min-h-32 items-center justify-center">
                    <p className="text-sm text-slate-400">
                        No recent activity available.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboardHome;