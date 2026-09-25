"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import ClientReviewCard from "./ClientReviewCard";

const ClientExperience = ({ featuredComments = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    if (!featuredComments.length) return null;

    const currentComment = featuredComments[currentIndex];

    const goToPrevious = () => {
        setDirection(-1);

        setCurrentIndex((prev) =>
            prev === 0 ? featuredComments.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setDirection(1);

        setCurrentIndex((prev) =>
            prev === featuredComments.length - 1 ? 0 : prev + 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    return (
        <section className="mx-auto max-w-5xl px-4 my-24">
            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2"
                >
                    <span className="text-[10px] text-xs font-semibold tracking-[0.12em] text-blue-600">
                        CLIENT EXPERIENCES
                    </span>

                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                        What Our Clients Say
                    </h2>

                    <p className="mt-4 text-sm md:text-base leading-7 text-slate-500">
                        Real experiences from clients who connected with legal
                        professionals through LegalEase.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-600">
                        <FiCheckCircle className="text-blue-600" />
                        Verified client feedback
                    </div>

                    {/* Review counter */}
                    <div className="mt-8">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                            Client Review
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {String(currentIndex + 1).padStart(2, "0")}
                            <span className="mx-1 text-slate-300">/</span>
                            {String(featuredComments.length).padStart(2, "0")}
                        </p>
                    </div>
                </motion.div>

                {/* Right Carousel */}
                <div className="relative lg:col-span-3">
                    <AnimatePresence
                        mode="wait"
                        custom={direction}
                    >
                        <ClientReviewCard
                            key={currentComment?._id}
                            comment={currentComment}
                            direction={direction}
                            onPrevious={goToPrevious}
                            onNext={goToNext}
                        />
                    </AnimatePresence>

                    {/* Carousel indicators */}
                    {featuredComments.length > 1 && (
                        <div className="mt-5 flex justify-center gap-1.5">
                            {featuredComments.map((comment, index) => (
                                <button
                                    key={comment?._id}
                                    type="button"
                                    aria-label={`Go to review ${index + 1}`}
                                    onClick={() => goToSlide(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-6 bg-blue-600"
                                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClientExperience;