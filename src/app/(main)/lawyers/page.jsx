import LawyerCard from "@/components/lawyerCard";
import LawyerListingContainer from "@/components/LawyerListingContainer";
import { getLawyerServices } from "@/lib/api/lawyer";
import { q } from "framer-motion/m";



const BrowseLawyersPage = async ({ searchParams }) => {

    const search_params = await searchParams;
    const query = new URLSearchParams(search_params).toString()
    console.log(query);

    const services = await getLawyerServices(query);



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
                services={services}
                search_params={search_params}
            />
        </div>
    );
};

export default BrowseLawyersPage;