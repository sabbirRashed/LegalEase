"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import {
    FiFacebook,
    FiTwitter,
    FiLinkedin,
    FiInstagram,
    FiSend,
    FiCheck,
} from "react-icons/fi";

const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
    { label: "Facebook", href: "#", icon: FiFacebook },
    { label: "Twitter", href: "#", icon: FiTwitter },
    { label: "LinkedIn", href: "#", icon: FiLinkedin },
    { label: "Instagram", href: "#", icon: FiInstagram },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        // Frontend only — wire this up to your newsletter API later
        setSubscribed(true);
        setEmail("");
    };

    return (
        <footer className="w-full bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand + social */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-xl font-bold text-white">
                            Legal<span className="text-blue-500">Ease</span>
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed">
                            Connecting clients with trusted legal experts — simple, secure,
                            and accessible hiring for everyone.
                        </p>

                        <div className="flex items-center gap-3 mt-5">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm hover:text-blue-500 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/lawyers" className="text-sm hover:text-blue-500 transition-colors">
                                    Browse Lawyers
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="text-sm hover:text-blue-500 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm hover:text-blue-500 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                            Stay Updated
                        </h3>
                        <p className="mt-4 text-sm">
                            Get legal tips and platform updates in your inbox.
                        </p>

                        {subscribed ? (
                            <div className="flex items-center gap-2 mt-4 text-sm text-emerald-400">
                                <FiCheck className="w-4 h-4" />
                                Thanks for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex items-center gap-2 mt-4">
                                <Input
                                    type="email"
                                    aria-label="Email address"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-800 text-white placeholder:text-slate-500 border border-slate-700"
                                />
                                <Button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    <FiSend className="w-4 h-4" />
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} LegalEase. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500">
                        Built for connecting clients with trusted legal experts.
                    </p>
                </div>
            </div>
        </footer>
    );
}