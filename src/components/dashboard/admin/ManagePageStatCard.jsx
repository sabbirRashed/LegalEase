import {
    FaUsers,
    FaUser,
    FaUserTie,
    FaUserShield,
} from "react-icons/fa";

const ManagePageStatCard = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Users */}
            <div className="rounded-xl border border-default-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-default-500">
                            Total Users
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                            128
                        </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FaUsers className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Seekers */}
            <div className="rounded-xl border border-default-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-default-500">
                            Clients
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                            86
                        </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <FaUser className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Lawyers */}
            <div className="rounded-xl border border-default-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-default-500">
                            Lawyers
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                            40
                        </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <FaUserTie className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Admins */}
            <div className="rounded-xl border border-default-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-default-500">
                            Admins
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-foreground">
                            2
                        </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <FaUserShield className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePageStatCard;