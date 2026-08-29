"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import LegalServicesSection from "./LegalServicesSection";
import { authClient } from "@/lib/auth-client";
import { createLawyerProfile } from "@/lib/actions/lawyer";

export default function ProfileManager({ initialProfile, initialServices }) {
    const [profile, setProfile] = useState(initialProfile);
    const [services, setServices] = useState(initialServices);
    const [isEdit, setIsEdit] = useState(false);

  const isShowForm = !true || isEdit

   
    const handleAddService = () => {
        /*
         * Replace with real navigation/modal, e.g.:
         * router.push("/dashboard/manage-legal-profile/services/new");
         */
        // console.log("Add service clicked");
    };

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Professional Profile section */}
            <div className="p-6 sm:p-8">
                {isShowForm ? (
                    <ProfileForm 
                    existingProfile={profile}
                    setIsEdit={()=> setIsEdit(true)} />
                ) : (
                    <>
                        <ProfileDisplay
                            profile={profile}
                            onEdit={() => setIsEdit(true)}
                        />

                        {/* Legal Services section */}
                        <div className="border-t border-slate-200 p-6 sm:p-8">
                            <LegalServicesSection
                                services={services}
                                onAddService={handleAddService}
                            />
                        </div>
                    </>
                )}
            </div>


        </div>
    );
}