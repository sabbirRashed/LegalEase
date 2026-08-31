"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, TextField, Input, Label } from "@heroui/react";
import {
    FiMail,
    FiLock,
    FiArrowRight,
    FiEye,
    FiEyeOff,
    FiAlertCircle,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || "/"

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            setError("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        
        if (error) {
            setError(error.message);
            setIsSubmitting(false);
            return;
        }

        router.push(redirectTo);


        setIsSubmitting(false);
    };


    const handleGoogleLogin = async () => {
        try {
            const { data: loginData, error } = await authClient.signIn.social({
                provider: "google",
                callbackURL: `/select-role?redirect=${redirectTo}`,
            });

            if (error) {
                toast.error(
                    error.message ||
                    error.statusText ||
                    "Something went wrong. Please try again!"
                );
                return;
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again!");
        }
    };



    return (
        <div className="relative flex w-full items-center justify-center overflow-hidden px-4 py-12">
            {/* Decorative background glow — purely visual, sits behind the card */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative w-full max-w-md">
                {/* Brand */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-lg shadow-slate-900/20">
                        <span className="text-xl font-bold">L</span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Legal<span className="text-blue-600">Ease</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Your trusted connection to legal expertise.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
                >
                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-slate-900" />

                    <div className="mb-7">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Welcome back
                        </h2>

                        <p className="mt-1.5 text-sm text-slate-500">
                            Sign in to continue to your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <TextField className="space-y-2" isRequired>
                            <Label
                                htmlFor="email"
                                className="text-sm font-medium text-slate-700"
                            >
                                Email Address
                            </Label>

                            <div className="relative">
                                <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="h-12 rounded-xl pl-9 w-full"
                                />
                            </div>
                        </TextField>

                        {/* Password */}
                        <TextField className="space-y-2" isRequired>
                            <div className="flex items-center justify-between">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Password
                                </Label>

                                <a
                                    href="#"
                                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="relative">
                                <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="h-12 rounded-xl pl-9 pr-10 w-full"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                                >
                                    {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                                </button>
                            </div>
                        </TextField>

                        {/* Remember me */}
                        <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            Remember me for 30 days
                        </label>

                        {/* Error */}
                        {error && (
                            <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Submit */}
                        <Button
                            type="submit"
                            isDisabled={isSubmitting}
                            className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-sm shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/40 disabled:opacity-70"
                        >
                            {isSubmitting ? "Signing in..." : "Sign In"}
                            {!isSubmitting && <FiArrowRight className="ml-2 h-4 w-4" />}
                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-slate-200" />

                            <span className="text-xs font-medium text-slate-400">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Google */}
                        <Button
                            type="button"
                            onPress={handleGoogleLogin}
                            className="flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white font-semibold text-slate-700 shadow-none transition-colors hover:bg-slate-50"
                        >

                            <FcGoogle className="w-6 h-6" />
                            Continue with Google
                        </Button>
                    </form>

                    <p className="mt-7 text-center text-sm text-slate-500">
                        Don't have an account?{" "}
                        <Link
                            href={`/signUp?redirect=${redirectTo}`}
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Sign up
                        </Link>
                    </p>
                </motion.div>

                <p className="mt-6 text-center text-xs text-slate-400">
                    By continuing, you agree to LegalEase's Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
}