
import Image from "next/image";
import {
    ArrowLeft,
    Calendar,
    Person,
    Briefcase,
    ShieldCheck,
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import HireCard from "@/components/HireCard";
import { getLawyerProfileById } from "@/lib/api/lawyer";
import { getUserSession } from "@/lib/core/session";
import CommentsSection from "@/components/CommentsSection";
import { getCommentsByProfileId } from "@/lib/api/comments";


// const comments = [
//     {
//         id: 1,
//         name: "Rahim Ahmed",
//         comment:
//             "Nusrat Jahan was very professional and explained everything clearly. She handled my case with great care.",
//         date: "August 24, 2026",
//     },
//     {
//         id: 2,
//         name: "Sadia Karim",
//         comment:
//             "Very helpful and responsive. I really appreciated her professional approach and clear communication.",
//         date: "August 18, 2026",
//     },
// ];

const LawyerDetails = async ({ params }) => {
    const { id } = await params;

    const lawyer = await getLawyerProfileById(id);
    const comments = await getCommentsByProfileId(id)
    const user = await getUserSession()


    return (
        <div className="min-h-screen bg-sky-50/60">
            {/* ------------HEADER------------ */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex w-11/12 max-w-7xl items-center gap-2 py-4 text-sm text-slate-500">
                    <Link href={'/lawyers'} className="cursor-pointer hover:text-sky-600">
                        Lawyers
                    </Link >

                    <span>/</span>

                    <span className="font-medium text-slate-800">
                        {lawyer.name}
                    </span>
                </div>
            </section>

            {/* ------------------MAIN------------- */}
            <div className="mx-auto w-11/12 max-w-7xl py-10 md:py-14">

                {/* BACK */}
                <Link href={'/lawyers'}>
                    <button className="cursor-pointer mb-7 flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-600">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Lawyers
                    </button>
                </Link>

                {/* ----------------HERO PROFILE--------------*/}
                <section className="grid gap-7 lg:grid-cols-[1fr_340px]">

                    {/* PROFILE CARD*/}
                    <div className="bg-white p-6 shadow-sm md:p-10">

                        <div className="flex flex-col gap-8 md:flex-row">

                            {/* IMAGE */}
                            <div className="shrink-0">
                                <div className="relative">

                                    {/* blue offset decoration */}
                                    <div className="absolute -right-3 -top-3 h-full w-full border-t-8 border-r-8 border-sky-600" />

                                    <div className="relative h-64 w-52 overflow-hidden bg-slate-100">
                                        <Image
                                            src={lawyer.imageUrl}
                                            alt={lawyer.name}
                                            fill
                                            sizes="208px"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Status */}
                                    <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        {lawyer.status}
                                    </div>
                                </div>
                            </div>

                            {/* INTRO */}
                            <div className="flex-1 pt-1">

                                <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sky-600">
                                    <Briefcase className="h-4 w-4" />
                                    Legal Professional
                                </div>

                                <h1 className="font-serif text-4xl font-medium uppercase tracking-tight text-slate-900 md:text-5xl">
                                    {lawyer.name}
                                </h1>

                                <p className="mt-2 text-lg font-medium text-slate-500">
                                    {lawyer.specialization}
                                </p>

                                <div className="my-7 h-px w-full bg-slate-200" />

                                {/* Bio */}
                                <div className="border-l-4 border-sky-500 pl-5">
                                    <p className="text-base italic leading-8 text-slate-600">
                                        {lawyer.bio}
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
                                        {lawyer.specialization}
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
                                        {lawyer.joinedDate}
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
                                        {lawyer.status}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ---------HIRE CARD---------- */}
                    <HireCard lawyer={lawyer} user={user} />
                </section>

                {/* ---------------------ABOUT SECTION------------ */}
                <section className="mt-8 bg-white p-7 shadow-sm md:p-10">

                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-8 w-1 bg-sky-500" />

                        <h2 className="font-serif text-2xl uppercase text-slate-900">
                            About the Lawyer
                        </h2>
                    </div>

                    <p className="max-w-4xl text-base leading-8 text-slate-600">
                        {lawyer.bio}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                        <div className="rounded-xl border border-slate-200 p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Practice Area
                            </p>

                            <p className="mt-2 text-lg font-semibold text-slate-800">
                                {lawyer.specialization}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Professional Status
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                                <p className="text-lg font-semibold text-slate-800">
                                    {lawyer.status}
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* -------------------COMMENT SECTION--------------------- */}
                {
                    user?.role === "user" && <CommentsSection lawyer={lawyer} comments={comments} user={user} />
                }
            </div>
        </div>
    );
};

export default LawyerDetails;