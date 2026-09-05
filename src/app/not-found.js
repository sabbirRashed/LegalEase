import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-sky-50 px-5">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-sky-600">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-slate-800">
                    Page Not Found
                </h2>

                <p className="mt-2 text-slate-500">
                    Sorry, the page you are looking for doesn't exist.
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

export default NotFound;