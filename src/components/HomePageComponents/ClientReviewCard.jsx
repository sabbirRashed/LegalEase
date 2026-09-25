"use client";

import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiArrowRight,
    FiCheckCircle,
    FiMessageSquare,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const ClientReviewCard = ({
    comment,
    direction,
    onPrevious,
    onNext,
}) => {
    return (
        <motion.div
            custom={direction}
            variants={{
                enter: (direction) => ({
                    opacity: 0,
                    x: direction > 0 ? 40 : -40,
                }),

                center: {
                    opacity: 1,
                    x: 0,
                },

                exit: (direction) => ({
                    opacity: 0,
                    x: direction > 0 ? -40 : 40,
                }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full"
        >
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full bg-blue-100/60 blur-[1px]" />

            {/* Main Card */}
            <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
            >
                {/* Top Accent */}
                <div className="h-1 w-full bg-blue-600" />

                <div className="p-6 sm:p-7">

                    {/* Header */}
                    <div className="flex items-center justify-between gap-4">

                        {/* Quote Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FaQuoteLeft className="text-sm" />
                        </div>

                        {/* Verified Badge */}
                        <div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
                            <FiCheckCircle className="text-sm text-emerald-600" />

                            <span className="text-xs font-semibold text-emerald-700">
                                Verified Client
                            </span>
                        </div>
                    </div>

                    {/* Review */}
                    <div className="mt-6 min-h-[120px]">
                        <p className="text-[17px] font-medium leading-7 text-slate-800 sm:text-lg sm:leading-8">
                            “{comment?.comment?.trim()}”
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-slate-100" />

                    {/* Client Information */}
                    <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                            {/* Client Avatar */}
                            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-blue-100">
                                {comment?.clientImage ? (
                                    <img
                                        src={comment.clientImage}
                                        alt={comment?.clientName || "Client"}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-blue-700">
                                        {comment?.clientName
                                            ?.charAt(0)
                                            ?.toUpperCase()}
                                    </div>
                                )}
                            </div>

                            {/* Client Name */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900">
                                    {comment?.clientName}
                                </h4>

                                <p className="mt-0.5 text-xs text-slate-500">
                                    Legal Service Client
                                </p>
                            </div>
                        </div>

                        {/* Verified Text */}
                        <span className="hidden text-xs text-slate-400 sm:block">
                            Verified
                        </span>
                    </div>

                    {/* Lawyer Information */}
                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-4">

                        <div className="flex items-center justify-between gap-4">

                            <div className="min-w-0">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                                    Reviewed Lawyer
                                </p>

                                <p className="mt-1 truncate text-sm font-semibold text-slate-800">
                                    {comment?.lawyerName}
                                </p>

                            </div>

                            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm sm:flex">
                                <FiMessageSquare className="text-base" />
                            </div>

                        </div>

                        {/* Lawyer Specialization */}
                        <div className="mt-3 flex items-center gap-2">

                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                            <span className="text-xs font-medium text-slate-500">
                                {comment?.lawyerCategory}
                            </span>

                        </div>

                    </div>

                    {/* Navigation */}
                    <div className="mt-6 flex items-center justify-end">

                        <div className="flex items-center gap-2">

                            {/* Previous */}
                            <button
                                type="button"
                                onClick={onPrevious}
                                aria-label="Previous review"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
                            >
                                <FiArrowLeft className="text-sm" />
                            </button>

                            {/* Next */}
                            <button
                                type="button"
                                onClick={onNext}
                                aria-label="Next review"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
                            >
                                <FiArrowRight className="text-sm" />
                            </button>

                        </div>

                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default ClientReviewCard;