import LawyerCardSkeleton from "@/components/loaderSkeleton";
import { Skeleton } from "@heroui/react";


const Loading = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-15 md:py-20 min-h-screen bg-slate-50">
            {/* Header Skeleton */}
            <div className="flex flex-col items-center justify-center text-center">
                <div className="h-9 sm:h-10 w-64 bg-slate-200 rounded-lg animate-pulse" />
                <div className="mt-2 h-4 w-80 max-w-full bg-slate-200 rounded animate-pulse" />
            </div>

            <div className="grid w-full grid-cols-3 gap-4 mt-20">
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
            </div>

            {/* Card Grid Skeleton */}
            <div className="mt-10 grid min-h-50 grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <LawyerCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}

export default Loading