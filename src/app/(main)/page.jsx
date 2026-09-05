import HeroSection from '@/components/HeroSectin';
import TopLawyerCard from '@/components/TopLawyerCard';
import { getTopHiredLawyer } from '@/lib/api/lawyer';
import { getUserToken } from '@/lib/core/session';
import { h2 } from 'framer-motion/m';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaBalanceScale, FaBriefcase, FaBuilding, FaFileInvoiceDollar, FaGavel, FaHome, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const HomePage = async () => {
    const topHiredLawyers = await getTopHiredLawyer()

    const token = await getUserToken()
    console.log('token:', token);

    return (
        <div>
            <HeroSection />

            {/* top legal expert section */}
            <section className="mx-auto my-15 w-full max-w-7xl md:my-24">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-5 py-10 md:px-10 md:py-14">

                    {/* Section Heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                            Trusted Professionals
                        </span>

                        <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                            Top Legal Experts
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
                            Meet our most trusted lawyers, chosen by clients for their
                            expertise and experience.
                        </p>
                    </div>

                    {/* Lawyers */}
                    {
                        topHiredLawyers.length > 0 ?
                            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

                                {
                                    topHiredLawyers.map(lawyer => <TopLawyerCard
                                        key={lawyer?._id}
                                        lawyer={lawyer}
                                    />)
                                }

                            </div>
                            : <div className="mt-10 rounded-xl border border-blue-100 bg-white px-6 py-10 md: py-20 text-center">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    Top Legal Experts Are Coming Soon
                                </h3>

                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    We’re building our community of trusted legal experts. Check back soon
                                    to discover the most trusted lawyers on LegalEase.
                                </p>
                            </div>
                    }
                </div>
            </section>


            <section className="mx-auto my-15 w-full max-w-7xl md:my-24">

                <div className=" rounded-2xl border border-blue-100 bg-blue-50/50 px-5 py-10 md:px-10 md:py-14">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                            Legal Categories
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
                            Explore legal services by category and find the right lawyer for your needs.
                        </p>
                    </div>


                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

                        {/* Criminal */}
                        <Link
                            href="/lawyers?specialization=Criminal"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaGavel className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Criminal Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Legal help for criminal cases
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Corporate */}
                        <Link
                            href="/lawyers?specialization=Corporate"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaBuilding className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Corporate Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Business and corporate legal matters
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Family */}
                        <Link
                            href="/lawyers?specialization=Family"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaUsers className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Family Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Support for family-related matters
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Employment */}
                        <Link
                            href="/lawyers?specialization=Employment"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaBriefcase className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Employment Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Workplace and employment disputes
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Tax */}
                        <Link
                            href="/lawyers?specialization=Tax"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaFileInvoiceDollar className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Tax Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Guidance on tax-related matters
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Property */}
                        <Link
                            href="/lawyers?specialization=Property"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaHome className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Property Law
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Assistance with property matters
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Human Rights */}
                        <Link
                            href="/lawyers?specialization=Human"
                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <FaBalanceScale className="h-5 w-5" />
                            </div>

                            <h3 className="mt-4 font-semibold text-slate-900">
                                Human Rights
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                Protecting rights and freedoms
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                Explore
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* More */}
                        <Link
                            href="/lawyers"
                            className="group flex flex-col justify-between rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50"
                        >
                            <div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                                    <FaArrowRight className="h-5 w-5" />
                                </div>

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Explore All
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Browse all legal categories
                                </p>
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                View Lawyers
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomePage;