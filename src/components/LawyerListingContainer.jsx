"use client"

import React, { useState } from 'react';
import LawyerCard from './lawyerCard';
import LawyerFilters from './lawlyerFilters';

const LawyerListingContainer = ({ services }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minFeeRange, setMinFeeRange] = useState('');
    const [maxFeeRange, setMaxFeeRange] = useState('');
    const [availability, setAvailability] = useState('');


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