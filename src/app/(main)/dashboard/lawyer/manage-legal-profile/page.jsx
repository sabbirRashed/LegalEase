import ProfileManager from "@/components/dashboard/lawyer/ProfileManager";

export const metadata = {
    title: "Manage Legal Profile | LegalEase",
    description: "Create and manage your professional lawyer profile and legal services.",
};

/*
 * Replace with a real DB/session call, e.g.:
 *
 * import { getServerSession } from "@/lib/auth";
 * import { getLawyerProfile, getLawyerServices } from "@/lib/db/lawyers";
 *
 * const session = await getServerSession();
 * const profile = await getLawyerProfile(session.user.id);
 * const services = await getLawyerServices(session.user.id);
 */
async function getInitialData() {
    // Mocked — returns null profile so the create-profile form shows first.
    return {
        profile: false,
        services: [],
    };
}

export default async function ManageLegalProfilePage() {
    const { profile, services } = await getInitialData();

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
                    initialServices={services}
                />
            </div>
        </div>
    );
}