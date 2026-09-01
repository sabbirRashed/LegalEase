"use client";

import { useState } from "react";
import { Button, Input, Label, TextField } from "@heroui/react";
import {
    FiUpload,
    FiAlertCircle,
    FiLoader,
    FiX,
    FiUser,
} from "react-icons/fi";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function ProfileForm({ existingProfile, user, handleSubmitProfile, handleUpdateProfile, onCancel }) {
    // ---- Text fields ----
    const [formData, setFormData] = useState({
        name: existingProfile?.name || "",
        specialization: existingProfile?.specialization || "",
        bio: existingProfile?.bio || "",
    });


    // ---- Image ----
    const [imagePreview, setImagePreview] = useState(existingProfile?.image || null);
    const [imageUrl, setImageUrl] = useState(existingProfile?.image || null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    // ---- Form status ----
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter()

    // Update a text field as the user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    //validation form
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required.";
        if (!formData.bio.trim()) newErrors.bio = "Bio is required.";
        if (!imageUrl) newErrors.image = "Image is required"

        return newErrors;
    };

    // Upload the selected image to ImgBB 
    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImagePreview(URL.createObjectURL(file));
        setIsUploadingImage(true);

        try {
            const formData = new FormData();
            formData.append("image", file);

            const uploadImageApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${uploadImageApiKey}`, {
                method: "POST",
                body: formData
            });
            const data = await res.json();

            if (!data.success) throw new Error("Upload failed");

            setImageUrl(data.data.url);

        } catch {
            setErrors((prev) => ({ ...prev, image: "Image upload failed. Please try again." }));
            setImageUrl(null);
        } finally {
            setIsUploadingImage(false);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        setImageUrl(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (isUploadingImage) {
            setErrors({ submit: "Please wait for the image to finish uploading." });
            return;
        }


        setIsSubmitting(true);
        setErrors({});

        try {
            const newProfile = {
                userId: user?.id,
                email: user?.email,
                image: imageUrl,
                ...formData,
            }
            setFormData(newProfile);


            const res = await handleSubmitProfile(newProfile)
            setErrors({})

            if (res.insertedId) {

                const savedProfile = { ...newProfile, _id: res.insertedId }

                setFormData(savedProfile);
                toast.success('successfully posted your profile');
                setFormData({ name: "", specialization: "", bio: "" });
                router.refresh()
            }

        } catch (error) {
            setErrors({ submit: "Failed to save profile. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        const updateData = {
            image: imageUrl,
            ...formData,
        }

        setIsSubmitting(true);
        try {
            const profileId = existingProfile?._id;
            const res = await handleUpdateProfile(profileId, updateData)

            if (res.modifiedCount > 0) {
                toast.success('Successfully update your profile')

            }
        } catch {
            setErrors({ submit: "Failed to update profile. Please try again." })
        } finally {
            setIsSubmitting(false);
        }

    }

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm max-w-5xl mx-auto">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
                <h2 className="text-lg font-bold text-slate-900">Professional Profile</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Add your professional information so clients can learn more about you.
                </p>
            </div>

            <form onSubmit={existingProfile?._id ? handleUpdate : handleSubmit} className="space-y-6 p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[180px_1fr]">
                    {/* Profile image */}
                    <div className="flex flex-col items-center gap-3 lg:items-start">
                        <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                            {imagePreview ? (
                                <>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={imagePreview} alt="Profile preview" className="h-full w-full object-cover" />
                                    {!isUploadingImage && (
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            aria-label="Remove image"
                                            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/70 text-white hover:bg-red-600"
                                        >
                                            <FiX className="h-3.5 w-3.5" />
                                        </button>
                                    )}
                                </>
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center gap-1.5 text-slate-400">
                                    <FiUser className="h-6 w-6" />
                                    <span className="text-xs font-medium">No photo</span>
                                </div>
                            )}

                            {isUploadingImage && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                                    <FiLoader className="h-6 w-6 animate-spin text-blue-600" />
                                </div>
                            )}
                        </div>

                        <label
                            htmlFor="profileImage"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                            <FiUpload className="h-3.5 w-3.5" />
                            {imagePreview ? "Change Photo" : "Choose Photo"}
                            <input
                                id="profileImage"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>

                        {errors.image && (
                            <p className="text-xs font-medium text-red-500">{errors.image}</p>
                        )}
                    </div>

                    {/* Name + Specialization */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <TextField className="space-y-2" isRequired isInvalid={!!errors.name}>
                            <Label className="text-sm font-semibold text-slate-700">
                                Full Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="e.g. John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="h-12 rounded-xl"
                            />
                            {errors.name && (
                                <p className="text-xs font-medium text-red-500">{errors.name}</p>
                            )}
                        </TextField>

                        <TextField className="space-y-2" isRequired isInvalid={!!errors.specialization}>
                            <Label htmlFor="specialization" className="text-sm font-semibold text-slate-700">
                                Specialization
                            </Label>
                            <Input
                                id="specialization"
                                name="specialization"
                                type="text"
                                placeholder="e.g. Criminal Law"
                                value={formData.specialization}
                                onChange={handleChange}
                                className="h-12 rounded-xl"
                            />
                            {errors.specialization && (
                                <p className="text-xs font-medium text-red-500">{errors.specialization}</p>
                            )}
                        </TextField>
                    </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                    <Label htmlFor="bio" className="text-sm font-semibold text-slate-700">
                        Bio
                    </Label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows={5}
                        placeholder="Tell clients about your experience..."
                        value={formData.bio}
                        onChange={handleChange}
                        className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 ${errors.bio
                            ? "border-red-300 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                            }`}
                    />
                    {errors.bio && (
                        <p className="text-xs font-medium text-red-500">{errors.bio}</p>
                    )}
                </div>

                {/* Submit error */}
                {errors.submit && (
                    <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{errors.submit}</span>
                    </div>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 border-t border-slate-100 pt-6">
                    {onCancel && (
                        <Button
                            type="button"
                            onPress={onCancel}
                            className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        >
                            Cancel
                        </Button>
                    )}
                    {
                        existingProfile?._id ? <>
                            <Button
                                type="submit"
                                isDisabled={isSubmitting || isUploadingImage}
                                className="h-11 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60"
                            >
                                {isSubmitting ? "Updating..." : "Update Profile"}
                            </Button>
                        </> : <>
                            <Button
                                type="submit"
                                isDisabled={isSubmitting || isUploadingImage}
                                className="h-11 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60"
                            >
                                {isSubmitting ? "Saving..." : "Save Profile"}
                            </Button>
                        </>
                    }
                </div>
            </form>
        </div>
    );
}