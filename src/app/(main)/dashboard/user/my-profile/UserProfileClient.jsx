"use client";

import { useState } from "react";
import {
    Avatar,
    Button,
    Input,
    Label,
    ListBox,
    Select,
    Separator,
    TextArea,
} from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiEdit2,
    FiSave,
    FiX,
    FiShield,
    FiCheckCircle,
    FiAlertCircle,
    FiFileText,
} from "react-icons/fi";

const inputClassNames = {
    base: "w-full",
    inputWrapper:
        "border border-slate-200 bg-white shadow-none hover:border-blue-300 focus-within:border-blue-500",
};

export default function UserProfileClient({ initialUser }) {
    const [profile, setProfile] = useState({
        id: initialUser?.id ?? "",
        name: initialUser?.name ?? "",
        email: initialUser?.email ?? "",
        image: initialUser?.image ?? "",
        role: initialUser?.role ?? "user",
        emailVerified: initialUser?.emailVerified ?? false,
        phone: initialUser?.phone ?? "",
        gender: initialUser?.gender ?? "",
        location: initialUser?.location ?? "",
        bio: initialUser?.bio ?? "",
    });

    const [formData, setFormData] = useState({ ...profile });
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const updateField = (field, value) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    };

    const handleEdit = () => {
        setFormData({ ...profile });
        setError("");
        setSuccess("");
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFormData({ ...profile });
        setError("");
        setIsEditing(false);
    };

    const handleSave = async (event) => {
        event.preventDefault();

        setIsSaving(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("/api/user/profile", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    gender: formData.gender,
                    location: formData.location.trim(),
                    bio: formData.bio.trim(),
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to update your profile."
                );
            }

            const updatedUser = {
                ...profile,
                ...formData,
                ...(result.user ?? {}),
            };

            setProfile(updatedUser);
            setFormData(updatedUser);
            setIsEditing(false);
            setSuccess("Your profile has been updated successfully.");
        } catch (err) {
            setError(
                err.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsSaving(false);
        }
    };

    const displayName = profile.name || "User";

    const initials = displayName
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    const roleLabel =
        profile.role?.charAt(0).toUpperCase() +
        profile.role?.slice(1);

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-6">
                {/* Page heading */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Account settings
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        My Profile
                    </h1>

                    <p className="mt-2 text-sm text-slate-500 sm:text-base">
                        Manage your personal information and account details.
                    </p>
                </div>

                {/* Feedback messages */}
                <AnimatePresence mode="wait">
                    {success && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                        >
                            <FiCheckCircle className="mt-0.5 shrink-0" />
                            <p>{success}</p>
                        </motion.div>
                    )}

                    {error && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                        >
                            <FiAlertCircle className="mt-0.5 shrink-0" />
                            <p>{error}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Profile header */}
                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="h-28 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 sm:h-36" />

                    <div className="px-5 pb-6 sm:px-8">
                        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
                            <div className="flex min-w-0 items-end gap-4">
                                <Avatar className="h-24 w-24 shrink-0 border-4 border-white bg-blue-100 text-2xl font-bold text-blue-700 shadow-sm sm:h-28 sm:w-28">
                                    {profile.image ? (
                                        <Avatar.Image
                                            src={profile.image}
                                            alt={displayName}
                                        />
                                    ) : (
                                        <Avatar.Fallback>{initials}</Avatar.Fallback>
                                    )}
                                </Avatar>

                                <div className="min-w-0 pb-1">
                                    <h2 className="truncate text-xl font-bold text-slate-900 sm:text-2xl translate-y-1 sm:translate-y-0">
                                        {displayName}
                                    </h2>

                                    <p className="mt-0 sm:mt-1 translate-y-1.5 sm:translate-y-0 truncate text-sm text-slate-500 ">
                                        {profile.email}
                                    </p>

                                    <span className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                        {roleLabel || "User"}
                                    </span>
                                </div>
                            </div>

                            {!isEditing && (
                                <Button
                                    onPress={handleEdit}
                                    className="w-full bg-blue-600 font-semibold text-white hover:bg-blue-700 sm:w-auto"
                                >
                                    <FiEdit2 className="mr-2" />
                                    Edit Profile
                                </Button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Personal information */}
                <form onSubmit={handleSave} className="space-y-6">
                    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                                <FiUser className="h-5 w-5" />
                            </div>

                            <div>
                                <h2 className="font-bold text-slate-900">
                                    Personal Information
                                </h2>
                                <p className="text-sm text-slate-500">
                                    Your basic profile details.
                                </p>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label>Name</Label>

                                {isEditing ? (
                                    <Input
                                        aria-label="Name"
                                        value={formData.name}
                                        onChange={(value) => updateField("name", value)}
                                        placeholder="Enter your full name"
                                        className={inputClassNames.base}
                                        isRequired
                                    />
                                ) : (
                                    <div className="flex min-h-11 items-center gap-3 rounded-xl bg-slate-50 px-4 text-sm text-slate-700">
                                        <FiUser className="shrink-0 text-slate-400" />
                                        <span>{profile.name || "Not provided"}</span>
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label>Email Address</Label>

                                <div className="flex min-h-11 items-center gap-3 rounded-xl bg-slate-50 px-4 text-sm text-slate-700">
                                    <FiMail className="shrink-0 text-slate-400" />
                                    <span className="min-w-0 break-all">
                                        {profile.email}
                                    </span>

                                    {profile.emailVerified && (
                                        <FiCheckCircle
                                            className="ml-auto shrink-0 text-emerald-600"
                                            title="Email verified"
                                        />
                                    )}
                                </div>

                                <p className="text-xs text-slate-400">
                                    Email address cannot be changed here.
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <Label>Phone Number</Label>

                                {isEditing ? (
                                    <Input
                                        aria-label="Phone Number"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(value) => updateField("phone", value)}
                                        placeholder="Enter your phone number"
                                        className={inputClassNames.base}
                                    />
                                ) : (
                                    <div className="flex min-h-11 items-center gap-3 rounded-xl bg-slate-50 px-4 text-sm text-slate-700">
                                        <FiPhone className="shrink-0 text-slate-400" />
                                        <span>{profile.phone || "Not provided"}</span>
                                    </div>
                                )}
                            </div>

                            {/* Gender */}
                            <div className="space-y-2">
                                <Label>Gender</Label>

                                {isEditing ? (
                                    <Select
                                        selectedKey={formData.gender || null}
                                        onSelectionChange={(key) =>
                                            updateField("gender", key ? String(key) : "")
                                        }
                                        placeholder="Select gender"
                                        className="w-full"
                                    >
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>

                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="male">Male</ListBox.Item>
                                                <ListBox.Item id="female">Female</ListBox.Item>
                                                <ListBox.Item id="other">Other</ListBox.Item>
                                                <ListBox.Item id="prefer-not-to-say">
                                                    Prefer not to say
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                ) : (
                                    <div className="flex min-h-11 items-center rounded-xl bg-slate-50 px-4 text-sm capitalize text-slate-700">
                                        {profile.gender?.replaceAll("-", " ") ||
                                            "Not provided"}
                                    </div>
                                )}
                            </div>

                            {/* Location */}
                            <div className="space-y-2 md:col-span-2">
                                <Label>Location</Label>

                                {isEditing ? (
                                    <Input
                                        aria-label="Location"
                                        value={formData.location}
                                        onChange={(value) =>
                                            updateField("location", value)
                                        }
                                        placeholder="City, district, or address"
                                        className={inputClassNames.base}
                                    />
                                ) : (
                                    <div className="flex min-h-11 items-center gap-3 rounded-xl bg-slate-50 px-4 text-sm text-slate-700">
                                        <FiMapPin className="shrink-0 text-slate-400" />
                                        <span>
                                            {profile.location || "Not provided"}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Bio */}
                            <div className="space-y-2 md:col-span-2">
                                <Label>About Me</Label>

                                {isEditing ? (
                                    <TextArea
                                        aria-label="About Me"
                                        value={formData.bio}
                                        onChange={(value) => updateField("bio", value)}
                                        placeholder="Write a short introduction about yourself..."
                                        className="w-full"
                                        rows={4}
                                    />
                                ) : (
                                    <div className="flex min-h-24 gap-3 rounded-xl bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700">
                                        <FiFileText className="mt-1 shrink-0 text-slate-400" />
                                        <p className="whitespace-pre-wrap">
                                            {profile.bio || "You haven't added a bio yet."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Edit actions */}
                        {isEditing && (
                            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                                <Button
                                    type="button"
                                    variant="bordered"
                                    onPress={handleCancel}
                                    isDisabled={isSaving}
                                    className="w-full sm:w-auto"
                                >
                                    <FiX className="mr-2" />
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    isDisabled={
                                        isSaving || !formData.name.trim()
                                    }
                                    className="w-full bg-blue-600 font-semibold text-white hover:bg-blue-700 sm:w-auto"
                                >
                                    <FiSave className="mr-2" />
                                    {isSaving ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        )}
                    </section>
                </form>

                {/* Account information */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
                            <FiShield className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="font-bold text-slate-900">
                                Account Information
                            </h2>
                            <p className="text-sm text-slate-500">
                                Your account status and access details.
                            </p>
                        </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-100 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Account Role
                            </p>
                            <p className="mt-2 font-semibold capitalize text-slate-800">
                                {profile.role || "user"}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Email Verification
                            </p>
                            <p
                                className={`mt-2 font-semibold ${profile.emailVerified
                                        ? "text-emerald-700"
                                        : "text-amber-700"
                                    }`}
                            >
                                {profile.emailVerified
                                    ? "Verified"
                                    : "Not verified"}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-100 p-4 sm:col-span-2">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                User ID
                            </p>
                            <p className="mt-2 break-all font-mono text-sm text-slate-600">
                                {profile.id || "Unavailable"}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}