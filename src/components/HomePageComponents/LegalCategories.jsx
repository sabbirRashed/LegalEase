'use client';

import Link from 'next/link';
import React from 'react';
import {
    FaArrowRight,
    FaBalanceScale,
    FaBriefcase,
    FaBuilding,
    FaFileInvoiceDollar,
    FaGavel,
    FaHome,
    FaUsers,
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const categories = [
    {
        title: 'Criminal Law',
        description: 'Legal help for criminal cases',
        search: 'Criminal',
        icon: FaGavel,
    },
    {
        title: 'Corporate Law',
        description: 'Business and corporate legal matters',
        search: 'Corporate',
        icon: FaBuilding,
    },
    {
        title: 'Family Law',
        description: 'Support for family-related matters',
        search: 'Family',
        icon: FaUsers,
    },
    {
        title: 'Employment Law',
        description: 'Workplace and employment disputes',
        search: 'Employment',
        icon: FaBriefcase,
    },
    {
        title: 'Tax Law',
        description: 'Guidance on tax-related matters',
        search: 'Tax',
        icon: FaFileInvoiceDollar,
    },
    {
        title: 'Property Law',
        description: 'Assistance with property matters',
        search: 'Property',
        icon: FaHome,
    },
    {
        title: 'Human Rights',
        description: 'Protecting rights and freedoms',
        search: 'Human',
        icon: FaBalanceScale,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: 'easeOut',
        },
    },
};

const LegalCategories = () => {
    return (
        <section className="mx-auto my-20 w-full max-w-7xl md:my-24">

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-5 py-10 md:px-10 md:py-14">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        Legal Categories
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
                        Explore legal services by category and find the right lawyer for your needs.
                    </p>
                </motion.div>

                {/* Categories */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href={`/lawyers?search=${category.search}`}
                                    className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 15,
                                        }}
                                        className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="mt-4 font-semibold text-slate-900">
                                        {category.title}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {category.description}
                                    </p>

                                    {/* Explore */}
                                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                        Explore

                                        <motion.span
                                            className="inline-flex"
                                            whileHover={{ x: 4 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 15,
                                            }}
                                        >
                                            <FiArrowRight />
                                        </motion.span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* Explore All */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/lawyers"
                            className="group flex h-full flex-col justify-between rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-5 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
                        >
                            <div>
                                {/* Icon */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.08,
                                        rotate: 5,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 15,
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm"
                                >
                                    <FaArrowRight className="h-5 w-5" />
                                </motion.div>

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Explore All
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Browse all legal categories
                                </p>
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                                View Lawyers

                                <motion.span
                                    className="inline-flex"
                                    whileHover={{ x: 4 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 15,
                                    }}
                                >
                                    <FiArrowRight />
                                </motion.span>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default LegalCategories;