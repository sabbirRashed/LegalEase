import LawyerCard from "@/components/lawyerCard";
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

            {/* Card container */}
            <div className="mt-10 grid min-h-50 grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
                {
                    services.map(service => <LawyerCard
                        key={service._id}
                        service={service} />)
                }
            </div>
        </div>
    );
};

export default BrowseLawyersPage;