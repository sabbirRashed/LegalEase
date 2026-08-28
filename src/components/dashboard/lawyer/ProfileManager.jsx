"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import LegalServicesSection from "./LegalServicesSection";
import { authClient } from "@/lib/auth-client";

export default function ProfileManager({ initialProfile, initialServices }) {
    const [profile, setProfile] = useState(initialProfile);
    const [services, setServices] = useState(initialServices);
    const [isEditing, setIsEditing] = useState(false);

    const {data:session, isPending} = authClient.useSession();
    const user = session?.user;

    // Show the form on first visit (no profile yet) or when editing an existing one
    const showForm = !profile || isEditing;

    const handleSave = (savedProfile) => {
        /*
         * Replace with a real API call before updating local state, e.g.:
         *
         * const res = await fetch("/api/lawyer/profile", {
         *     method: profile ? "PATCH" : "POST",
         *     headers: { "Content-Type": "application/json" },
         *     body: JSON.stringify(savedProfile),
         * });
         * const data = await res.json();
         * setProfile(data);
         */
        setProfile(savedProfile);
        setIsEditing(false);
    };

    const handleAddService = () => {
        /*
         * Replace with real navigation/modal, e.g.:
         * router.push("/dashboard/manage-legal-profile/services/new");
         */
        console.log("Add service clicked");
    };

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Professional Profile section */}
            <div className="p-6 sm:p-8">
                {showForm ? (
                    <ProfileForm
                        existingProfile={profile}
                        user={user}
                        onSave={handleSave}
                        setIsEditing={setIsEditing}
                        isEditing={isEditing}
                    />
                ) : (
                    <>
                        <ProfileDisplay
                            profile={profile}
                            onEdit={() => setIsEditing(true)}
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