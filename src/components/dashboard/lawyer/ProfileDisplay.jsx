"use client";


import { FiEdit3, FiUser } from "react-icons/fi";
import ProfileForm from "./ProfileForm";
import ProfileForms from "./ProfileForms";
import HireCard from "@/components/HireCard";
import { Briefcase, Calendar, ShieldCheck } from "@gravity-ui/icons";
import Image from "next/image";

export default function ProfileDisplay({ profile }) {


    return (
        // <div className="border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
        //     <div className="flex items-start justify-between ">
        //         <h2 className="text-xl font-bold text-slate-900">
        //             Professional Profile
        //         </h2>
        //         <ProfileForms profile={profile} />

        //     </div>

        //     <div className="mt-6 flex flex-col gap-6 sm:flex-row">
        //         {/* Avatar */}
        //         <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        //             {profile.imageUrl ? (
        //                 // eslint-disable-next-line @next/next/no-img-element
        //                 <img
        //                     src={profile.imageUrl}
        //                     alt={profile.name}
        //                     className="h-full w-full object-cover"
        //                 />
        //             ) : (
        //                 <FiUser className="h-10 w-10 text-slate-300" />
        //             )}
        //         </div>

        //         {/* Info */}
        //         <div className="flex-1">
        //             <h3 className="text-lg font-bold text-slate-900">
        //                 {profile.name}
        //             </h3>

        //             <span className="mt-1.5 inline-block leading-relaxed rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
        //                 {profile.specialization}
        //             </span>

        //             <p className="mt-4 text-sm  text-slate-500 max-w-xl">
        //                 {profile.bio}
        //             </p>
        //         </div>
        //     </div>
        // </div>

        <section className="relative border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="absolute top-6 right-6 z-20"><ProfileForms profile={profile} /></div>

            <div>

            
                <div className="flex flex-col gap-8 md:gap-15 md:flex-row ">


                    {/* IMAGE */}
                    <div className="shrink-0">
                        <div className="relative">

                            <div className="absolute -right-3 -top-3 h-full w-full border-t-8 border-r-8 border-sky-600" />

                            <div className="relative h-64 w-52 overflow-hidden bg-slate-100">
                                <Image
                                    src={profile.imageUrl}
                                    alt={profile.name}
                                    fill
                                    sizes="208px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Status */}
                            <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                {profile.status}
                            </div>
                        </div>
                    </div>

                    {/* INTRO */}
                    <div className="flex-1 pt-1">

                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sky-600">
                            <Briefcase className="h-4 w-4" />
                            Legal Professional
                        </div>

                        <h1 className=" text-4xl font-medium uppercase tracking-tight text-slate-900 md:text-5xl">
                            {profile.name}
                        </h1>

                        <p className="mt-2 text-lg font-medium text-slate-500">
                            {profile.specialization}
                        </p>

                        {/* Divider */}
                        <div className="my-7 h-px w-full bg-slate-200" />

                        {/* Quote / Bio */}
                        <div className="border-l-4 border-sky-500 pl-5">
                            <p className="text-base italic leading-8 text-slate-600">
                                {profile.bio}
                            </p>
                        </div>

                    </div>
                </div>

                {/* ----------------INFORFATION-------------------------- */}
                <div className="mt-12 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">

                    <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                            <Briefcase className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Specialization
                            </p>
                            <p className="mt-1 font-semibold text-slate-800">
                                {profile.specialization}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                            <Calendar className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Member Since
                            </p>
                            <p className="mt-1 font-semibold text-slate-800">
                                {new Date(profile.createAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <ShieldCheck className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Availability
                            </p>
                            <p className="mt-1 font-semibold text-emerald-600">
                                {profile.status}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}