"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import { createLawyerProfile, updateLawyerProfile } from "@/lib/actions/lawyer";
import { useRouter } from "next/navigation";



export default function ProfileManager({ initialProfile, user }) {

    const [profile, setProfile] = useState(initialProfile);
    const [services, setServices] = useState(null);
    const [isEdit, setIsEdit] = useState(false);




    const isShowForm = !profile?.userId || isEdit

    const router = useRouter()

    const handleAddService = () => {
        // to do
    };

    const handleCancelEdit = () => {
        console.log('before cancel edit');
        setIsEdit(false)
    }

    const handleSubmitProfile = async (profileData) => {

        // console.log('after create:', profile);
        const res = await createLawyerProfile(profileData)

        setProfile(profileData)
        setIsEdit(false)
        router.refresh()
        return res
    }

    const handleUpdateProfile = async (profileId, updatedData,) => {
        console.log('from manage:', profileId, updatedData);
        const res = await updateLawyerProfile(profileId, updatedData);

        setIsEdit(false);
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
                        handleUpdateProfile={handleUpdateProfile}
                        onCancel={profile ? handleCancelEdit : null} />
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