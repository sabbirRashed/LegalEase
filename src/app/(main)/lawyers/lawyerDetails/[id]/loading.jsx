import { Skeleton } from "@heroui/react";

const Loading = () => {
    return (
        <div className="min-h-screen bg-sky-50/60">
            <div className="mx-auto w-11/12 max-w-7xl py-10">

                {/* Back */}
                <Skeleton className="mb-7 h-5 w-32 rounded" />

                {/* Profile + Hire */}
                <div className="grid gap-7 lg:grid-cols-[1fr_340px]">

                    {/* Profile */}
                    <div className="bg-white p-7 shadow-sm md:p-10">
                        <div className="flex flex-col gap-7 md:flex-row">
                            <Skeleton className="h-64 w-52 shrink-0 rounded" />

                            <div className="flex-1 space-y-4">
                                <Skeleton className="h-4 w-40 rounded" />
                                <Skeleton className="h-10 w-3/4 rounded" />
                                <Skeleton className="h-5 w-48 rounded" />
                                <Skeleton className="h-20 w-full rounded" />
                            </div>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-3">
                            <Skeleton className="h-12 rounded" />
                            <Skeleton className="h-12 rounded" />
                            <Skeleton className="h-12 rounded" />
                        </div>
                    </div>

                    {/* Hire Card */}
                    <div className="bg-white p-7 shadow-sm">
                        <Skeleton className="mx-auto h-7 w-40 rounded" />
                        <div className="my-7 space-y-5">
                            <Skeleton className="h-10 rounded" />
                            <Skeleton className="h-10 rounded" />
                            <Skeleton className="h-16 rounded-xl" />
                            <Skeleton className="h-12 rounded-xl" />
                        </div>
                    </div>
                </div>

                {/* About */}
                <div className="mt-8 bg-white p-7 shadow-sm md:p-10">
                    <Skeleton className="mb-6 h-7 w-48 rounded" />
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        <Skeleton className="h-20 rounded-xl" />
                        <Skeleton className="h-20 rounded-xl" />
                    </div>
                </div>

                {/* Comments */}
                <div className="mt-8 bg-white p-7 shadow-sm">
                    <Skeleton className="mb-5 h-7 w-40 rounded" />
                    <Skeleton className="h-16 w-full rounded-xl" />
                </div>

            </div>
        </div>
    );
};

export default Loading;