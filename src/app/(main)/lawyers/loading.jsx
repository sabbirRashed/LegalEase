import LawyerCardSkeleton from "@/components/loaderSkeleton";


export default function Loading() {
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-15 md:py-20">
            {/* Header Skeleton */}
            <div className="flex flex-col items-center justify-center text-center">
                <div className="h-9 sm:h-10 w-64 bg-slate-200 rounded-lg animate-pulse" />
                <div className="mt-2 h-4 w-80 max-w-full bg-slate-200 rounded animate-pulse" />
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