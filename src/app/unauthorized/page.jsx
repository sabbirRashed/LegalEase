"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiShield, FiArrowLeft, FiHome } from "react-icons/fi";

export default function UnauthorizedPage() {
    const router = useRouter()
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-lg text-center">

                {/* Icon */}
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                    <FiShield className="h-10 w-10" />
                </div>

                {/* 403 */}
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Access Denied
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    You’re not authorized
                </h1>

                <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-500">
                    Sorry, you don't have permission to access this page.
                    Please make sure you are using an account with the
                    appropriate role.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        <FiHome className="h-4 w-4" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => router.back()}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <FiArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>

                {/* Brand */}
                <div className="mt-12">
                    <p className="text-lg font-bold text-slate-900">
                        Legal<span className="text-blue-600">Ease</span>
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Your trusted connection to legal expertise.
                    </p>
                </div>
            </div>
        </main>
    );
}