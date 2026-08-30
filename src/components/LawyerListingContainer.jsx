"use client"

import React, { useEffect, useState } from 'react';
import LawyerCard from './lawyerCard';
import LawyerFilters from './lawlyerFilters';
import { useRouter } from 'next/navigation';
import { FiRotateCcw, FiUserX } from 'react-icons/fi';

const LawyerListingContainer = ({ services, search_params }) => {
    const [searchQuery, setSearchQuery] = useState(search_params?.search || '');
    const [minFeeRange, setMinFeeRange] = useState(search_params?.minFee || '');
    const [maxFeeRange, setMaxFeeRange] = useState(search_params?.maxFee || '');
    const [availability, setAvailability] = useState(search_params?.status || 'all');

    const router = useRouter()

    // console.log("search:", searchQuery);
    // console.log("minFee:", minFeeRange);
    // console.log("maxFee:", maxFeeRange);
    // console.log("availab::", availability);

    useEffect(() => {
        const searchParams = new URLSearchParams();

        if (searchQuery.trim()) {
            searchParams.set('search', searchQuery)
        }
        if (minFeeRange) {
            searchParams.set('minFee', minFeeRange)
        }
        if (maxFeeRange) {
            searchParams.set('maxFee', maxFeeRange)
        }
        if (availability !== "all") {
            searchParams.set('status', availability)
        }

        const path = `?${searchParams.toString()}`
        router.push(path)

    }, [searchQuery, minFeeRange, maxFeeRange, availability, router])


    return (
        <div className='mt-10'>

            <LawyerFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                minFeeRange={minFeeRange}
                setMinFeeRange={setMinFeeRange}
                maxFeeRange={maxFeeRange}
                setMaxFeeRange={setMaxFeeRange}
                availability={availability}
                setAvailability={setAvailability}
            />

            {/* Card container */}
            {
                services.length > 0 ? (
                    <div className="mt-10 grid min-h-50 grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
                        {
                            services.map(service => <LawyerCard
                                key={service._id}
                                service={service} />)
                        }
                    </div>
                ) : (
                    <div className="flex flex-col items-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <FiUserX className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                            No lawyers found
                        </h3>

                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
                            We couldn't find any lawyers matching your search or filters.
                            Try adjusting your criteria or clearing the filters to see more results.
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default LawyerListingContainer;