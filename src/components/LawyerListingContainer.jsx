"use client"

import React, { useEffect, useState } from 'react';
import LawyerCard from './lawyerCard';
import LawyerFilters from './lawlyerFilters';
import { useRouter } from 'next/navigation';
import { FiRotateCcw, FiUserX } from 'react-icons/fi';
import { Pagination } from '@heroui/react';

const LawyerListingContainer = ({ profiles, search_params , total}) => {
    const [searchQuery, setSearchQuery] = useState(search_params?.search || '');
    const [minFeeRange, setMinFeeRange] = useState(search_params?.minFee || '');
    const [maxFeeRange, setMaxFeeRange] = useState(search_params?.maxFee || '');
    const [availability, setAvailability] = useState(search_params?.status || 'all');
    const [page, setPage] = useState(Number(search_params?.page) || 1);

    const router = useRouter()
    //------------------------------------------


    const totalItems = total;
    const itemsPerPage = 12;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (page > 3) {
                pages.push("ellipsis");
            }
            const start = Math.max(2, page - 1);
            const end = Math.min(totalPages - 1, page + 1);
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (page < totalPages - 2) {
                pages.push("ellipsis");
            }
            pages.push(totalPages);
        }
        return pages;
    };

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);


    //-----------------------------------------------------
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
        if(page){
            searchParams.set("page", page)
        }

        const path = `?${searchParams.toString()}`
        router.push(path)

    }, [searchQuery, minFeeRange, maxFeeRange, availability, router, page])


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
                page={page}
                setPage={setPage}
            />

            {/* Card container */}
            {
                profiles.length > 0 ? (
                    <>
                        <div className="mt-10 grid min-h-50 grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 mb-10">
                            {
                                profiles.map(profile => <LawyerCard
                                    key={profile._id}
                                    service={profile} />)
                            }
                        </div>

                        <Pagination>
                            <Pagination.Summary>
                                Showing {startItem}-{endItem} of {totalItems} results
                            </Pagination.Summary>
                            <Pagination.Content>
                                <Pagination.Item>
                                    <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                                        <Pagination.PreviousIcon />
                                        <span>Previous</span>
                                    </Pagination.Previous>
                                </Pagination.Item>
                                {getPageNumbers().map((p, i) =>
                                    p === "ellipsis" ? (
                                        <Pagination.Item key={`ellipsis-${i}`}>
                                            <Pagination.Ellipsis />
                                        </Pagination.Item>
                                    ) : (
                                        <Pagination.Item key={p}>
                                            <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                                                {p}
                                            </Pagination.Link>
                                        </Pagination.Item>
                                    ),
                                )}
                                <Pagination.Item>
                                    <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                                        <span>Next</span>
                                        <Pagination.NextIcon />
                                    </Pagination.Next>
                                </Pagination.Item>
                            </Pagination.Content>
                        </Pagination>
                    </>
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