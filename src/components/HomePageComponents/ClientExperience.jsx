import React from 'react';
import ClientReviewCard from './ClientReviewCard';
import { FiCheckCircle } from 'react-icons/fi';

const ClientExperience = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 py-20">
            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">

                {/* Left */}
                <div className="lg:col-span-2">
                    <span className="text-xs font-semibold tracking-wide text-blue-600">
                        CLIENT EXPERIENCES
                    </span>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                        What Our Clients Say
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-500">
                        Real experiences from clients who connected with legal
                        professionals through LegalEase.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-600">
                        <FiCheckCircle className="text-blue-600" />
                        Verified client feedback
                    </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-3">
                    <ClientReviewCard />
                </div>

            </div>
        </section>
    );
};

export default ClientExperience;