"use client";

import { TextField, InputGroup, Label, Select, ListBox, Input, Button } from "@heroui/react";
import { FiSearch, FiChevronDown, FiX } from "react-icons/fi";

const AVAILABILITY_OPTIONS = [
    { id: "all", label: "All Lawyers" },
    { id: "Available", label: "Available" },
    { id: "Busy", label: "Busy" },
];

export default function LawyerFilters({
    searchQuery,
    setSearchQuery,
    minFeeRange,
    setMinFeeRange,
    maxFeeRange,
    setMaxFeeRange,
    availability,
    setAvailability,
    page,
    setPage
}) {



    const handleReset = () => {
        setSearchQuery("");
        setMinFeeRange("");
        setMaxFeeRange("");
        setAvailability("all");
    };

    return (
        <div className="mb-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                {/* Search */}
                <TextField className="flex flex-col gap-1.5 lg:col-span-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Search Lawyers
                    </Label>
                    <InputGroup className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors focus-within:border-blue-500 ring-0 shadow-none">
                        <InputGroup.Prefix className="text-slate-400">
                            <FiSearch className="h-4 w-4" />
                        </InputGroup.Prefix>
                        <InputGroup.Input
                            type="text"
                            placeholder="Name or specialization..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                        />
                    </InputGroup>
                </TextField>

                {/* Fee range */}
                <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Fee Range ($/hr)
                    </Label>
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 transition-colors focus-within:border-blue-500 focus-within:bg-white">
                        <Input
                            type="number"
                            min="0"
                            placeholder="Min"
                            value={minFeeRange}
                            onChange={(e) => setMinFeeRange(e.target.value)}
                            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 ring-0 shadow-none"
                        />
                        <span className="text-slate-300">-</span>
                        <Input
                            type="number"
                            min="0"
                            placeholder="Max"
                            value={maxFeeRange}
                            onChange={(e) => setMaxFeeRange(e.target.value)}
                            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400  ring-0 shadow-none"
                        />
                    </div>
                </div>

                {/* Availability */}
                <Select
                    className="group flex flex-col gap-1.5"
                    value={availability}
                    onChange={(value) => setAvailability(value)}
                >
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Availability
                    </Label>
                    <Select.Trigger className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 text-sm text-slate-900 transition-colors  focus:border-blue-500 shadow-none">
                        <Select.Value placeholder="All Lawyers" />
                        <Select.Indicator className="text-slate-400">
                            <FiChevronDown className="h-4 w-4" />
                        </Select.Indicator>
                    </Select.Trigger>


                    <Select.Popover className="group:min-w-full z-50 mt-1 rounded-2xl border border-slate-200 bg-white p-1 shadow-xl">
                        <ListBox className="flex flex-col gap-1">
                            {AVAILABILITY_OPTIONS.map((option) => (
                                <ListBox.Item
                                    key={option.id}
                                    id={option.id}
                                    textValue={option.label}
                                    className=" rounded-xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                                >
                                    {option.label}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>

            {/* Reset */}
            {(
                <div className="flex justify-end">
                    <Button
                        size="sm"
                        variant="white"
                        onClick={handleReset}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-red-600"
                    >
                        <FiX className="h-3.5 w-3.5" />
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
}