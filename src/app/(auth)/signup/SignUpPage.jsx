"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, TextField, Input, Label } from "@heroui/react";
import {
    FiUser,
    FiMail,
    FiLock,
    FiBriefcase,
    FiArrowRight,
    FiCheck,
    FiEye,
    FiEyeOff,
    FiAlertCircle,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
    const [step, setStep] = useState("signup");
    const [selectedRole, setSelectedRole] = useState(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMessage, setError] = useState("");

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

        const { name, email, password, confirmPassword } = formData;
        console.log('formData: ', formData);

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
        })
        console.log( 'er: ', error);

        if (error) {
            setError(error?.statusText || 'Sign Up failed');
            return;
        }

        setStep("role");


    };
    // 
    const handleRoleContinue = async () => {
        if (!selectedRole) {
            setError("Please select how you want to use LegalEase.");
            return;
        }

        /*
         * Save role here.
         *
         * Example:
         *
         * await updateUserRole(selectedRole);
         *
         * selectedRole:
         * "user"
         * "lawyer"
         */

        console.log("Selected role:", selectedRole);
    };

    const handleGoogleSignup = async () => {
        /*
         * Better Auth Google OAuth goes here.
         *
         * Example:
         *
         * await authClient.signIn.social({
         *     provider: "google",
         *     callbackURL: "/select-role",
         * });
         */
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

                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-slate-900" />

                    <AnimatePresence mode="wait" initial={false}>
                        {step === "signup" ? (
                            <motion.div
                                key="signup"
                                initial={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: 40,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <div className="mb-7">
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        Create your account
                                    </h2>

                                    <p className="mt-1.5 text-sm text-slate-500">
                                        Join LegalEase and get started today.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    {/* Full Name */}
                                    <TextField className="space-y-2" isRequired>
                                        <Label
                                            htmlFor="name"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Full Name
                                        </Label>

                                        <div className="relative">
                                            <FiUser className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl pl-9 w-full"
                                            />
                                        </div>
                                    </TextField>

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
                                        <Label
                                            htmlFor="password"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Password
                                        </Label>

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

                                    {/* Confirm Password */}
                                    <TextField className="space-y-2" isRequired>
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Confirm Password
                                        </Label>

                                        <div className="relative">
                                            <FiLock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                            <Input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl pl-9 pr-10 w-full"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                                            >
                                                {showConfirmPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </TextField>

                                    {/* Error */}
                                    {errorMessage && (
                                        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                            <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-sm shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/40"
                                    >
                                        Create Account
                                        <FiArrowRight className="ml-2 h-4 w-4" />
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
                                        onPress={handleGoogleSignup}
                                        className="flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white font-semibold text-slate-700 shadow-none transition-colors hover:bg-slate-50"
                                    >

                                        <FcGoogle className="w-6 h-6" />
                                        Continue with Google
                                    </Button>
                                </form>

                                <p className="mt-7 text-center text-sm text-slate-500">
                                    Already have an account?{" "}
                                    <a
                                        href="/login"
                                        className="font-semibold text-blue-600 hover:text-blue-700"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="role"
                                initial={{
                                    opacity: 0,
                                    x: -80,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* Role Selection */}
                                <div className="mb-7">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep("signup");
                                            setError("");
                                        }}
                                        className="mb-5 text-sm font-medium text-slate-500 hover:text-slate-900"
                                    >
                                        ← Back
                                    </button>

                                    <h2 className="text-2xl font-bold text-slate-900">
                                        Choose your role
                                    </h2>

                                    <p className="mt-1.5 text-sm text-slate-500">
                                        How would you like to use LegalEase?
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {/* Client */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedRole("user");
                                            setError("");
                                        }}
                                        className={`group relative w-full rounded-2xl border-2 p-5 text-left transition-all ${selectedRole === "user"
                                            ? "border-blue-600 bg-blue-50/60 shadow-sm shadow-blue-600/10"
                                            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                                            }`}
                                    >
                                        {selectedRole === "user" && (
                                            <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                                <FiCheck className="h-3.5 w-3.5" />
                                            </span>
                                        )}

                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${selectedRole === "user"
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-blue-50 text-blue-600"
                                                    }`}
                                            >
                                                <FiUser className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-slate-900">
                                                    Client
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                                    Find and hire trusted legal
                                                    professionals for your legal
                                                    needs.
                                                </p>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Lawyer */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedRole("lawyer");
                                            setError("");
                                        }}
                                        className={`group relative w-full rounded-2xl border-2 p-5 text-left transition-all ${selectedRole === "lawyer"
                                            ? "border-blue-600 bg-blue-50/60 shadow-sm shadow-blue-600/10"
                                            : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                                            }`}
                                    >
                                        {selectedRole === "lawyer" && (
                                            <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                                <FiCheck className="h-3.5 w-3.5" />
                                            </span>
                                        )}

                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${selectedRole === "lawyer"
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-blue-50 text-blue-600"
                                                    }`}
                                            >
                                                <FiBriefcase className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-slate-900">
                                                    Lawyer
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                                    Offer your legal expertise and
                                                    connect with clients.
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {errorMessage && (
                                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                        <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <Button
                                    type="button"
                                    onPress={handleRoleContinue}
                                    className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-sm shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/40"
                                >
                                    Continue
                                    <FiArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <p className="mt-6 text-center text-xs text-slate-400">
                    By continuing, you agree to LegalEase's Terms & Privacy Policy.
                </p>
            </div>
        </div>
    );
}