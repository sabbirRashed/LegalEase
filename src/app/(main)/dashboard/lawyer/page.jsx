import { getUserSession } from "@/lib/core/session";
import Link from "next/link";
import { FaBriefcase, FaMoneyBillWave, FaUserTie } from "react-icons/fa";

const LawyerHomePage = async() => {

    const user = await getUserSession();

    return (
        <main className="min-h-screen bg-slate-50 p-4 md:p-6">
            <div className="mx-auto w-full max-w-7xl">

                {/* Welcome */}
                <section className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm md:p-8">
                    <p className="text-sm font-medium text-blue-100">
                        Lawyer Dashboard
                    </p>

                    <h1 className="mt-2 text-2xl font-bold md:text-3xl">
                        Welcome back, {user?.name}!
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100">
                        Manage your legal profile, review hiring requests, and
                        connect with your clients from one place.
                    </p>
                </section>

                {/* Quick Actions */}
                <section className="mt-6">
                    <h2 className="text-lg font-bold text-slate-900">
                        Quick Actions
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your legal services and client activities.
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        <Link
                            href="/dashboard/lawyer/manage-legal-profile"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <FaUserTie />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Manage Legal Profile
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Update your profile, specialization and fees.
                            </p>

                            <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                                Manage Profile →
                            </span>
                        </Link>

                        <Link
                            href="/dashboard/lawyer/hiring-history"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <FaBriefcase />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Hiring History
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                View your client requests and hiring activity.
                            </p>

                            <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                                View History →
                            </span>
                        </Link>

                        <Link
                            href="/dashboard/lawyer/transactions"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <FaMoneyBillWave />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Transactions
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Track your payment and transaction history.
                            </p>

                            <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
                                View Transactions →
                            </span>
                        </Link>

                    </div>
                </section>

                {/* Profile Status */}
                <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="font-bold text-slate-900">
                                Profile Status
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Your legal profile is currently visible to clients.
                            </p>
                        </div>

                        <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                            ● Available
                        </span>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default LawyerHomePage;