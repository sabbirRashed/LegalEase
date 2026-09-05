import HeroSection from '@/components/HeroSectin';
import TopLawyerCard from '@/components/TopLawyerCard';
import { getTopHiredLawyer } from '@/lib/api/lawyer';
import { h2 } from 'framer-motion/m';
import React from 'react';

const HomePage = async () => {
    const topHiredLawyers = await getTopHiredLawyer()

    return (
        <div>
            <HeroSection />
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
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">

                        {
                            topHiredLawyers.map(lawyer => <TopLawyerCard
                                key={lawyer?._id}
                                lawyer={lawyer}
                            />)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;