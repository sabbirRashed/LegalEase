
import Link from "next/link";

const ForbiddenPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-sky-50 px-5">
            <div className="text-center">

                <h1 className="text-7xl font-bold text-rose-500">
                    403
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-slate-800">
                    Access Forbidden
                </h2>

                <p className="mt-2 text-slate-500">
                    You don't have permission to access this page.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};


