"use client";

import { FiEdit3, FiUser } from "react-icons/fi";

export default function ProfileDisplay({ profile, onEdit }) {
    return (
        <div>
            <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                    Professional Profile
                </h2>

                <button
                    type="button"
                    onClick={onEdit}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 cursor-pointer"
                >
                    <FiEdit3 className="h-4 w-4" />
                    Edit Profile
                </button>
            </div>

            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
                {/* Avatar */}
                <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    {profile.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <FiUser className="h-10 w-10 text-slate-300" />
                    )}
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                        {profile.name}
                    </h3>

                    <span className="mt-1.5 inline-block leading-relaxed rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {profile.specialization}
                    </span>

                    <p className="mt-4 text-sm  text-slate-500 max-w-xl">
                        {profile.bio}
                    </p>
                </div>
            </div>
        </div>
    );
}