"use client";

import { FiPlus, FiBriefcase, FiEdit3, FiTrash2 } from "react-icons/fi";
import AddServiceForm from "./AddServiceForm";
import { Button } from "@heroui/react";

export default function LegalServicesSection({profile, services,  }) {
    const hasServices = services && services.length > 0;

    return (
        <div>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Legal Services
                    </h2>
                    <p className="text-slate-500 text-sm ms:text-base mt-1">Manage the services you currently offer to clients.</p>
                </div>
                <AddServiceForm profile={profile} />
            </div>

            <div className="mt-5">
                {hasServices ? (
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 w-full">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                <tr>
                                    <th className="px-4 py-3">Service Name</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {services.map((service) => (
                                    <tr key={service.id} className="hover:bg-slate-50">
                                        <td className="px-4 py-3 font-medium text-slate-900">
                                            {service.name}
                                        </td>
                                        <td className="px-4 py-3 text-slate-500">
                                            {service.category}
                                        </td>
                                        <td className="px-4 py-3 text-slate-500">
                                            ${service.price}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2 md:gap-4">
                                                <button
                                                    type="button"
                                                    aria-label="Edit service"
                                                    className="cursor-pointer text-slate-400 hover:bg-blue-200 hover:text-blue-600 p-1 rounded-full active:scale-95"
                                                >
                                                    <FiEdit3 className="h-4 w-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    aria-label="Delete service"
                                                    className="cursor-pointer  hover:text-red-600 p-1 rounded-full hover:bg-red-100 text-red-500 transition-all duration-300 active:scale-95"
                                                >
                                                    <FiTrash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <FiBriefcase className="h-6 w-6" />
                        </div>

                        <h3 className="mt-4 text-base font-semibold text-slate-900">
                            No services added yet
                        </h3>

                        <p className="mt-1.5 max-w-sm text-sm text-slate-500">
                            You haven't added any legal services yet. Add your first
                            service so clients can discover and hire you.
                        </p>

                        <button
                            type="button"
                            className="cursor-pointer mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/30 transition-colors hover:bg-blue-700"
                        >
                            <FiPlus className="h-4 w-4" />
                            Add Your First Service
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}