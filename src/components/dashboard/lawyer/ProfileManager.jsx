"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import { createLawyerProfile } from "@/lib/actions/lawyer";
import { useRouter } from "next/navigation";



export default function ProfileManager({ initialProfile, user }) {
    // console.log('ini: ', initialProfile, 'user: ', user);
    const [profile, setProfile] = useState(initialProfile);
    const [services, setServices] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

 
    console.log('after create:', profile);

    const isShowForm = !profile?.userId || isEdit

    const router = useRouter()

    const handleAddService = () => {
        // to do
    };
    
    const handleSubmitProfile = async (profileData) => {
        const res = await createLawyerProfile(profileData)

        setProfile(profileData)
        setIsEdit(false)
        router.refresh()
        return res
    }

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Professional Profile section */}
            <div className="p-6 sm:p-8">
                {isShowForm ? (
                    <ProfileForm
                        existingProfile={profile}
                        user={user}
                        handleSubmitProfile={handleSubmitProfile}
                        onCancel={profile ? () => setIsEdit(false) : null} />
                ) : (
                    <>
                        <ProfileDisplay
                            profile={profile}
                            onEdit={() => setIsEdit(true)}
                        />

                        {/* Legal Services section */}
                        {/* <div className="border-t border-slate-200 p-6 sm:p-8">
                            <LegalServicesSection
                                services={services}
                                onAddService={handleAddService}
                            />
                        </div> */}
                    </>
                )}
            </div>


        </div>
    );
}