"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import { createLawyerProfile, updateLawyerProfile } from "@/lib/actions/lawyer";
import { useRouter } from "next/navigation";
import LegalServicesSection from "./LegalServicesSection";


const fakeServices = [
    // {
    //     id: "srv-101",
    //     name: "Full-Stack Web Development",
    //     category: "Development",
    //     price: "1,200",
    //     status: "active",
    // },
    // {
    //     id: "srv-102",
    //     name: "UI/UX Dashboard Redesign",
    //     category: "Design",
    //     price: "850",
    //     status: "active",
    // },
    // {
    //     id: "srv-103",
    //     name: "SEO Optimization & Audit",
    //     category: "Marketing",
    //     price: "450",
    //     status: "inactive",
    // },
    // {
    //     id: "srv-104",
    //     name: "REST API Integration",
    //     category: "Backend",
    //     price: "600",
    //     status: "active",
    // },
    // {
    //     id: "srv-105",
    //     name: "Custom Graphic Design",
    //     category: "Branding",
    //     price: "300",
    //     status: "inactive",
    // },
];



export default function ProfileManager({ initialProfile, user }) {

    const [profile, setProfile] = useState(initialProfile);
    const [services, setServices] = useState(fakeServices);
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
                        handleUpdateProfile={handleUpdateProfile}
                        onCancel={profile?._id ? handleCancelEdit : null} />
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