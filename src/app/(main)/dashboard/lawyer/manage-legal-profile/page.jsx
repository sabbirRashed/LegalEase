import ProfileManager from "@/components/dashboard/lawyer/ProfileManager";
import { getLawyerServiceByProfileId, getLogedInLawyerProfile } from "@/lib/api/lawyer";
import { getUserSession } from "@/lib/core/session";


export const metadata = {
    title: "Manage Legal Profile | LegalEase",
    description: "Create and manage your professional lawyer profile and legal services.",
};

// const services = [
//     {
//         id: 1,
//         name: "Criminal Case Consultation",
//         category: "Criminal Law",
//         price: 1800,
//         status: "active",
//     },
//     {
//         id: 2,
//         name: "Bail Application",
//         category: "Criminal Law",
//         price: 3500,
//         status: "active",
//     },
//     {
//         id: 3,
//         name: "Divorce Legal Consultation",
//         category: "Family Law",
//         price: 2000,
//         status: "active",
//     },
//     {
//         id: 4,
//         name: "Property Dispute Consultation",
//         category: "Property Law",
//         price: 2500,
//         status: "active",
//     },
//     {
//         id: 5,
//         name: "Legal Document Review",
//         category: "Corporate Law",
//         price: 1500,
//         status: "inactive",
//     },
//     {
//         id: 6,
//         name: "Business Contract Drafting",
//         category: "Corporate Law",
//         price: 3000,
//         status: "active",
//     },
//     {
//         id: 7,
//         name: "Land Ownership Consultation",
//         category: "Property Law",
//         price: 2200,
//         status: "active",
//     },
//     {
//         id: 8,
//         name: "Legal Notice Preparation",
//         category: "Civil Law",
//         price: 1800,
//         status: "inactive",
//     },
// ];


export default async function ManageLegalProfilePage() {

    const profile = await getLogedInLawyerProfile();
    const services = await getLawyerServiceByProfileId(profile?._id)
    const user = await getUserSession()


    return (
        <div className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8 ">
            <div className="mx-auto max-w-7xl">
                {/* Page header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 ">
                        Manage Legal Profile
                    </h1>
                    <p className="mt-1.5 text-slate-500">
                        Create and manage your professional information
                    </p>
                </div>

                <ProfileManager
                    profile={profile}
                    user={user}
                services={services}
                />
            </div>
        </div>
    );
}