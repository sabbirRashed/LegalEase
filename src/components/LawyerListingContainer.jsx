"use client"

import React, { useEffect, useState } from 'react';
import LawyerCard from './lawyerCard';
import LawyerFilters from './lawlyerFilters';
import { useRouter } from 'next/navigation';

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
        <div>

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
                    // No card with meaningfull message
                    <h2></h2>
                )
            }
        </div>
    );
};

export default LawyerListingContainer;