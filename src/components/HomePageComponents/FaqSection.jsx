"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
    {
        question: "How can I find the right lawyer for my case?",
        answer:
            "You can browse lawyers by specialization, review their profiles, compare services and fees, and choose a lawyer based on your specific legal needs.",
    },
    {
        question: "How do I book a consultation with a lawyer?",
        answer:
            "First, select a lawyer and explore their available services. After choosing a service, you can submit a request and proceed with the consultation process.",
    },
    {
        question: "Do I need an account to book a lawyer?",
        answer:
            "Yes. You need to create an account and sign in before submitting a lawyer request or booking a legal service.",
    },
    {
        question: "How does the payment process work?",
        answer:
            "Once your request is accepted by the lawyer, you can complete the payment securely through the available payment options on the platform.",
    },
    {
        question: "Can I communicate with a lawyer before booking?",
        answer:
            "You can review the lawyer's profile, specialization, services, fees, and other available information before submitting a request.",
    },
    {
        question: "Can I leave a review for a lawyer?",
        answer:
            "Yes. After completing an accepted legal service, eligible clients can leave a review and rating based on their experience.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="my-16 sm:my-20 lg:my-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
                >
                    <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                        FAQ
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                        Find answers to common questions about finding lawyers,
                        booking legal services, payments, and more.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                                className={`overflow-hidden rounded-xl border bg-white transition-colors ${isOpen
                                        ? "border-blue-200 shadow-sm"
                                        : "border-slate-200"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`text-sm font-semibold sm:text-base ${isOpen
                                                ? "text-blue-600"
                                                : "text-slate-800"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                                                ? "bg-blue-50 text-blue-600"
                                                : "bg-slate-50 text-slate-500"
                                            }`}
                                    >
                                        <motion.span
                                            animate={{
                                                rotate: isOpen ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <FiChevronDown className="h-4 w-4" />
                                        </motion.span>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <div className="border-t border-slate-100 px-5 pb-5 pt-3 sm:px-6">
                                                <p className="text-sm leading-6 text-slate-900">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;