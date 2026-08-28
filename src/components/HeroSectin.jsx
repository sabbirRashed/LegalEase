"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Replace with your own images in /public — Picsum used here as reliable placeholders
const slides = [
    {
        image: "/images/image1.jpg",
        alt: "Law books and legal library",
    },
    {
        image: "/images/image2.jpg",
        alt: "Modern office building",
    },
    {
        image: "/images/image3.jpg",
        alt: "Client and lawyer handshake",
    },
];

const AUTOPLAY_DELAY = 5000;

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Autoplay
    useEffect(() => {
        const timer = setInterval(nextSlide, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
            {/* Background image carousel */}
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.08 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1, ease: "easeInOut" },
                        scale: { duration: AUTOPLAY_DELAY / 1000, ease: "linear" },
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].alt}
                        fill
                        priority={current === 0}
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950/85" />

            {/* Centered content */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300 backdrop-blur-sm">
                    Trusted Legal Marketplace
                </span>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Find & Hire Expert{" "}
                    <span className="text-blue-400">Legal Counsel</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                    Connect with verified lawyers across every specialization —
                    transparent pricing, secure hiring, and trusted advice, all in
                    one place.
                </p>

                <div className="mt-8">
                    <Link
                        href="/lawyers"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 sm:text-base"
                    >
                        Browse Lawyers
                        <FiArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Carousel arrows */}
            <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6"
            >
                <FiChevronLeft className="h-5 w-5" />
            </button>

            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6"
            >
                <FiChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel dots */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.image}
                        type="button"
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${index === current
                            ? "w-8 bg-blue-500"
                            : "w-2 bg-white/50 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeroSection