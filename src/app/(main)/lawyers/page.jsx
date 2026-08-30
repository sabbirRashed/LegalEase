import LawyerCard from "@/components/lawyerCard";
import LawyerListingContainer from "@/components/LawyerListingContainer";
import { getLawyerServices } from "@/lib/api/lawyer";



const BrowseLawyersPage = async () => {

    const services = await getLawyerServices();
    console.log('services', services.length);

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-15 md:py-20">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Browse Lawyers
                </h2>
                <p className="mt-2 text-slate-500">
                    Find and hire verified legal experts across every specialization.
                </p>
            </div>

            <LawyerListingContainer
            services={services}/>
        </div>
    );
};

export default BrowseLawyersPage;