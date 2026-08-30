import { Skeleton } from "@heroui/react";


const LawyerCardSkeleton = () => {
    return (
        <div className="relative flex flex-col flex-1 items-center rounded-2xl border border-slate-200 bg-white p-3 sm:p-6 text-center shadow-sm">
      
            <Skeleton className="absolute right-1 sm:right-4 top-1 sm:top-4 h-5 w-12 rounded-full" />

            <div className="relative">
                <Skeleton className="h-18 w-18 sm:h-24 sm:w-24 rounded-full" />
            </div>

            <Skeleton className="mt-3 sm:mt-4 h-5 sm:h-6 w-3/4 rounded-lg" />

            <Skeleton className="mt-2 h-5 w-24 rounded-full" />

            <div className="mt-3 sm:mt-5 flex flex-col gap-2 sm:flex-row w-full items-center justify-between border-t border-slate-100 pt-2 sm:pt-4">
                <div className="flex flex-col gap-1 w-full sm:w-1/2 items-center sm:items-start">
                    <Skeleton className="h-3 w-16 rounded" />
                    <Skeleton className="h-4 w-12 rounded" />
                </div>

                <Skeleton className="h-8 w-full rounded-lg sm:w-24" />
            </div>
        </div>
    );
};

export default LawyerCardSkeleton;