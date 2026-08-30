"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

// Swap for your currency symbol, e.g. "৳"
const CURRENCY = "$";

const LawyerCard = ({ service }) => {
    const { _id, name, imageUrl, specialization, hourlyRate, status } = service;

    const isBusy = status !== "Available";

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex flex-col flex-1 items-center rounded-2xl border border-slate-200 bg-white p-3 sm:p-6 text-center shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
        >
            {/* Busy badge */}
            {isBusy && (
                <span className="absolute right-1 sm:right-4 top-1 sm:top-4 rounded-full bg-red-50 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-red-600">
                    Busy
                </span>
            )}

            {/* Avatar */}
            <div className="relative">
                <div className="h-18 sm:h-24 w-18 sm:w-24 overflow-hidden rounded-full border-4 border-slate-50 ring-1 ring-slate-200">

                    <Image
                        src={imageUrl}
                        alt={name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                    >
                    </Image>
                </div>

                {/* Availability dot */}
                <span
                    className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${isBusy ? "bg-red-500" : "bg-emerald-500"
                        }`}
                />
            </div>

            {/* Name */}
            <h3 className="mt-3 sm:mt-4 text-md sm:text-lg font-bold text-slate-900">{name}</h3>

            {/* Specialization */}
            <span className="mt-1.5 rounded-full bg-blue-50 px-3 py-1 text-[10px] sm:text-xs font-semibold text-blue-600">
                {specialization}
            </span>

            {/* Hourly rate + CTA */}
            <div className="mt-3 sm:mt-5 flex flex-col gap-1.5 sm:flex-row w-full items-center justify-between border-t border-slate-100 pt-2 sm:pt-4">
                <div className="text-left w-full">
                    <p className="text-[10px] sm:text-xs text-slate-400">Hourly Rate</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                        $
                        {hourlyRate}
                        <span className=" text-slate-400">/hr</span>
                    </p>
                </div>

                <Link
                    href={`/lawyers/lawyerDetails/${_id}`}
                    className="w-full  flex justify-center items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 "
                >
                    View Profile
                    <FiArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </motion.div>
    );
}

export default LawyerCard