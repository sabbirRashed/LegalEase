"use client";

import { useState } from "react";
import ProfileDisplay from "./ProfileDisplay";
import LegalServicesSection from "./LegalServicesSection";
import ProfileForms from "./ProfileForm";
import { FiUser } from "react-icons/fi";



export default function ProfileManager({ profile, services}) {

    const isShowForm = !profile?.userId 


    const handleAddService = () => {
        // to do
    };

 
    return (
        <div>
            {/* Professional Profile section */}
            <div >
                {isShowForm ? (
                    <div className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                                <FiUser className="h-7 w-7 text-blue-600" />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-slate-900">
                                Your professional profile isn’t set up yet
                            </h2>

                            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                                Create your profile first to let clients know who you are,
                                what you specialize in, and what legal services you offer.
                            </p>

                            <ProfileForms profile={profile} />
                        </div>
                    </div>
                ) : (
                    <>
                        <ProfileDisplay
                            profile={profile}
                            
                        />
                    </>
                )}
            </div>

            {/* Legal Services section */}
            <div className="min-w-0  p-6 sm:p-8 mt-20 border border-slate-200 bg-white shadow-sm">
                <LegalServicesSection
                    services={services}
                    onAddService={handleAddService}
                />
            </div>
        </div>
    );
}