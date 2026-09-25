"use client";

import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiArrowRight,
    FiCheckCircle,
    FiChevronRight,
    FiMessageSquare,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const ClientReviewCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full"
        >
            {/* Decorative element */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-blue-100/60 blur-[1px]" />

            {/* Main Card */}
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
            >
                {/* Top accent line */}
                <div className="h-1 w-full bg-blue-600" />

                <div className="p-6 sm:p-7">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4">
                        {/* Quote icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <FaQuoteLeft className="text-base" />
                        </div>

                        {/* Verified badge */}
                        <div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
                            <FiCheckCircle className="text-sm text-emerald-600" />

                            <span className="text-xs font-semibold text-emerald-700">
                                Verified Client
                            </span>
                        </div>
                    </div>

                    {/* Review */}
                    <div className="mt-6">
                        <p className="text-[17px] font-medium leading-7 text-slate-800 sm:text-lg sm:leading-8">
                            “LegalEase made it easy for me to find the right lawyer for my
                            legal issue. The process was simple, and I received helpful
                            guidance throughout.”
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-slate-100" />

                    {/* Client */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                                SR
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-slate-900">
                                    Sabbir Rahman
                                </h4>

                                <p className="mt-0.5 text-xs text-slate-500">
                                    Legal Service Client
                                </p>
                            </div>
                        </div>

                        <span className="hidden text-xs text-slate-400 sm:block">
                            Recently
                        </span>
                    </div>

                    {/* Lawyer information */}
                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                                    Reviewed Lawyer
                                </p>

                                <p className="mt-1 truncate text-sm font-semibold text-slate-800">
                                    Adv. Nusrat Jahan
                                </p>
                            </div>

                            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm sm:flex">
                                <FiMessageSquare className="text-base" />
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                            <span className="text-xs font-medium text-slate-500">
                                Human Rights Law
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                        {/* Carousel indicator */}
                        <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-5 rounded-full bg-blue-600" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Previous review"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                                <FiArrowLeft className="text-sm" />
                            </button>

                            <button
                                type="button"
                                aria-label="Next review"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                                <FiArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Small floating element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="absolute -bottom-3 -left-3 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md sm:flex"
            >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FiCheckCircle className="text-sm" />
                </div>

                <div>
                    <p className="text-[10px] font-medium text-slate-400">
                        Trusted Feedback
                    </p>

                    <p className="text-xs font-semibold text-slate-700">
                        From a real client
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ClientReviewCard;