import ProfileManager from "@/components/dashboard/lawyer/ProfileManager";
import { getLawyerProfileByUserId, getLogedInLawyerProfile } from "@/lib/api/lawyer";
import { getUserSession } from "@/lib/core/session";

export const metadata = {
    title: "Manage Legal Profile | LegalEase",
    description: "Create and manage your professional lawyer profile and legal services.",
};



export default async function ManageLegalProfilePage() {
    
    const profile = await getLogedInLawyerProfile();
    const user = await getUserSession()


    return (
        <div className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-7xl">
                {/* Page header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Manage Legal Profile
                    </h1>
                    <p className="mt-1.5 text-slate-500">
                        Create and manage your professional information
                    </p>
                </div>

                <ProfileManager
                    initialProfile={profile}
                    user={user}
                    // initialServices={services}
                />
            </div>
        </div>
    );
}