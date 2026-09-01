"use client";

import { useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import { createLawyerProfile, updateLawyerProfile } from "@/lib/actions/lawyer";
import { useRouter } from "next/navigation";
import LegalServicesSection from "./LegalServicesSection";
import ProfileForms from "./ProfileForms";
import { Button } from "@heroui/react";
import { FiUser } from "react-icons/fi";


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
        <div className="overflow-hidden ">
            {/* Professional Profile section */}
            <div className="">
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

                            <ProfileForms profile={profile}/>
                        </div>
                    </div>
                ) : (
                    <>
                        <ProfileDisplay
                            profile={profile}
                            onEdit={() => setIsEdit(true)}
                        />
                    </>
                )}
            </div>

            {/* Legal Services section */}
            <div className="border-t  p-6 sm:p-8 mt-20 border border-slate-200 bg-white shadow-sm">
                <LegalServicesSection
                    services={services}
                    onAddService={handleAddService}
                />
            </div>
        </div>
    );
}