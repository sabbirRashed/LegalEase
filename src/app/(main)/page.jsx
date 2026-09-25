import ClientExperience from '@/components/HomePageComponents/ClientExperience';
import HeroSection from '@/components/HomePageComponents/HeroSectin';
import LegalCategories from '@/components/HomePageComponents/LegalCategories';
import TopLawyerCard from '@/components/HomePageComponents/TopLawyerCard';
import { getFeaturedComments } from '@/lib/api/comments';
import { getTopHiredLawyer } from '@/lib/api/lawyer';
import { getUserToken } from '@/lib/core/session';
import { h2 } from 'framer-motion/m';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaBalanceScale, FaBriefcase, FaBuilding, FaFileInvoiceDollar, FaGavel, FaHome, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const HomePage = async () => {
    const topHiredLawyers = await getTopHiredLawyer();
    const featuredComments = await getFeaturedComments();
    console.log('featured comnts:', featuredComments);


    return (
        <div>
            <HeroSection />

            {/* top legal expert */}
            <section className="mx-auto my-20 w-full max-w-7xl md:my-24">
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
                                    We're building our community of trusted legal experts. Check back soon
                                    to discover the most trusted lawyers on LegalEase.
                                </p>
                            </div>
                    }
                </div>
            </section>


            {/* legal categories */}
            <LegalCategories />

            {/* client experience */}
            <ClientExperience featuredComments={featuredComments} />
        </div>
    );
};

export default HomePage;