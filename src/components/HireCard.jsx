"use client"

import { Check, Clock, CreditCard } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const HireCard = ({ lawyer, user, id }) => {

    const [showHireModal, setShowHireModal] = useState(false);

    const handleHire = () => {
        console.log("Hiring request sent");
        setShowHireModal(false);
    };


    return (
        <aside className="lg:sticky lg:top-24 lg:self-start">

            <div className="bg-white p-7 shadow-sm">

                <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Need Legal Help?
                    </p>

                    <h2 className="mt-2 font-serif text-2xl uppercase text-slate-900">
                        Hire{" "}
                        <span className="text-sky-500">
                            This Lawyer
                        </span>
                    </h2>
                </div>

                <div className="my-7 h-px bg-slate-200" />

                {/* Consultation */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-sky-500" />

                        <div>
                            <p className="text-xs text-slate-400">
                                Consultation
                            </p>

                            <p className="font-semibold text-slate-800">
                                One Session
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-slate-900">
                        ৳{lawyer.consultationRate.toLocaleString()}
                    </p>
                </div>

                {/* Hourly */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-sky-500" />

                        <div>
                            <p className="text-xs text-slate-400">
                                Hourly Rate
                            </p>

                            <p className="font-semibold text-slate-800">
                                Legal Service
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-slate-900">
                        ৳{lawyer.hourlyRate.toLocaleString()}
                        <span className="text-xs font-normal text-slate-400">
                            /hr
                        </span>
                    </p>
                </div>

                {/* Status */}
                <div className="mt-7 rounded-xl bg-emerald-50 p-4">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                            <Check className="h-4 w-4 text-emerald-600" />
                        </span>

                        <div>
                            <p className="text-xs text-emerald-600">
                                Current Status
                            </p>

                            <p className="font-bold text-emerald-700">
                                Available for Hire
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                {
                    user ? (<>

                        <Button
                            onPress={() => setShowHireModal(true)}
                            className="mt-6 h-12 w-full rounded-xl bg-sky-600 text-sm font-bold text-white shadow-sm hover:bg-sky-700"
                        >
                            Hire Lawyer
                        </Button>

                        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                            A hiring request will be sent to the lawyer
                            for confirmation.
                        </p>

                    </>) : (
                        <>
                            <Link href={`/login?redirect=lawyers/lawyerDetails/${id}`}>
                                <Button
                                    className="mt-6 h-12 w-full rounded-xl bg-sky-600 text-sm font-bold text-white shadow-sm hover:bg-sky-700"
                                >
                                    Login to Hire Now
                                </Button>
                            </Link>

                            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                                You must be logged in to send a hiring request
                            </p>
                        </>
                    )
                }
            </div>


            {/* ================= HIRE MODAL ================= */}
            {showHireModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">

                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                                    Hiring Request
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                                    Hire {lawyer.name}?
                                </h3>
                            </div>

                            <button
                                onClick={() => setShowHireModal(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mt-6 rounded-xl bg-slate-50 p-4">
                            <div className="flex items-center gap-4">

                                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                                    <Image
                                        src={lawyer.imageUrl}
                                        alt={lawyer.name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="font-bold text-slate-900">
                                        {lawyer.name}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {lawyer.specialization}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-5 space-y-3 text-sm">

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Consultation Fee
                                </span>

                                <span className="font-semibold text-slate-900">
                                    ৳{lawyer.consultationRate.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-slate-500">
                                    Hourly Rate
                                </span>

                                <span className="font-semibold text-slate-900">
                                    ৳{lawyer.hourlyRate.toLocaleString()}/hr
                                </span>
                            </div>

                        </div>

                        <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4">
                            <p className="text-sm leading-6 text-sky-800">
                                Your hiring request will be sent to the lawyer.
                                The lawyer can review and respond to your
                                request.
                            </p>
                        </div>

                        <div className="mt-7 flex gap-3">
                            <Button
                                onPress={() => setShowHireModal(false)}
                                variant="bordered"
                                className="h-11 flex-1 rounded-xl border-slate-300 font-semibold text-slate-700"
                            >
                                Cancel
                            </Button>

                            <Button
                                onPress={handleHire}
                                className="h-11 flex-1 rounded-xl bg-sky-600 font-semibold text-white hover:bg-sky-700"
                            >
                                Confirm Hire
                            </Button>
                        </div>

                    </div>
                </div>
            )}
        </aside>
    );
};

export default HireCard;