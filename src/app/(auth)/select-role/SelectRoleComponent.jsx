"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@heroui/react";
import { FiUser, FiBriefcase, FiArrowRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SelectRoleComponent = () => {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState(null);
    const [errorMessage, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams()
    const redirectTo = searchParams.get('redirect') || "/"

    const handleRoleContinue = async () => {
        if (!selectedRole) {
            setError("Please select how you want to use LegalEase.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const { data, error } = await authClient.updateUser({
                role: selectedRole,
            });

            console.log("Selected role:", data, error);

            if (error) {
                setError(
                    error?.message ||
                    error?.statusText ||
                    "Something went wrong!"
                );
                return;
            }

            toast.success("Your role has been selected successfully!");

            router.push(redirectTo);
            router.refresh();

        } catch (error) {
            console.error("Role update error:", error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-4 py-12">

            {/* Decorative background glow */}
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

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">

                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-slate-900" />

                    {/* Header */}
                    <div className="mb-7">

                        <h2 className="text-2xl font-bold text-slate-900">
                            Choose your role
                        </h2>

                        <p className="mt-1.5 text-sm text-slate-500">
                            How would you like to use LegalEase?
                        </p>

                    </div>

                    {/* Roles */}
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
                                        professionals for your legal needs.
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

                    {/* Error */}
                    {errorMessage && (
                        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                            <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {/* Continue */}
                    <Button
                        onPress={handleRoleContinue}
                        isDisabled={loading}
                        className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-sm shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/40"
                    >
                        {loading ? "Saving..." : "Continue"}

                        {!loading && (
                            <FiArrowRight className="ml-2 h-4 w-4" />
                        )}
                    </Button>

                </div>

                <p className="mt-6 text-center text-xs text-slate-400">
                    By continuing, you agree to LegalEase's Terms & Privacy Policy.
                </p>

            </div>
        </div>
    );
}

export default SelectRoleComponent
