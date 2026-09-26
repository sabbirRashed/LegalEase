'use client'
import { Input } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const GlobalSearch = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch = async (e) => {
        e.preventDefault()

        const value = search.trim();

        if (!value) {
            router.push("/lawyers");
            return;
        }

        // const searchParams = new URLSearchParams();
        // if(search.trim()){
        //     searchParams.set("search", search)
        // }

        // const strParams = searchParams.toString()
        // router.push(`/lawyers?${strParams}`)
        router.push(`/lawyers?search=${encodeURIComponent(value)}`);
    }

    return (
        <form 
        onSubmit={handleSearch}
        className="hidden md:block relative flex-1 max-w-sm">
            <FiSearch className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
                type="search"
                aria-label="Search lawyers"
                placeholder="Search by name or specialization"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 bg-slate-50 border border-slate-200"
            />
        </form>
    );
};

export default GlobalSearch;