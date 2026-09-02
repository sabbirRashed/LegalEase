"use client";

import React, { useState } from "react";
import { Avatar, Button, Form, Input, Label, TextField } from "@heroui/react";
import { BiCamera } from "react-icons/bi";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserUpdateForm = ({ user }) => {

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(user?.image || null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Handle local photo
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Upload to ImgBB
    const uploadToImgBB = async (file) => {
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        const body = new FormData();
        body.append("image", file);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: "POST",
            body,
        });
        const data = await res.json();
        return data?.data?.display_url;
    };

    // Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const fullName = formData.get("name");

        try {
            let photoURL = imagePreview;
            if (imageFile) {
                photoURL = await uploadToImgBB(imageFile);
            }

            const { data, error } = await authClient.updateUser({
                name: fullName,
                image: photoURL || imagePreview || ""
            })

            if (data?.status) {
                router.push('/dashboard/user')
            }

            // Add your backend API call here
        } catch (err) {
            toast.success('Update successfull!')
            toast.error('Update failed!')
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    opacity: { duration: 1, ease: "easeInOut" },
                }}
                className="mx-auto w-full max-w-xl"
            >
                <div className="border border-slate-200 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Update Profile</h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Update your personal information and profile picture.
                        </p>
                    </div>

                    <Form onSubmit={handleSubmit} className="space-y-6">
                        {/* Avatar Upload */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <Avatar className="w-24 h-24 border border-slate-100">
                                    <Avatar.Image alt="User Avatar" src={imagePreview} />
                                    <Avatar.Fallback>U</Avatar.Fallback>
                                </Avatar>
                                <label
                                    htmlFor="avatar-upload"
                                    className="absolute bottom-0 right-0 p-2 bg-slate-900 text-white rounded-full cursor-pointer shadow-md hover:bg-slate-800"
                                >
                                    <BiCamera className="w-4 h-4" />
                                    <input
                                        id="avatar-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Name Field */}
                        <TextField className="w-full" name="name" type="text" defaultValue={user?.name} isRequired>
                            <Label className="text-sm font-medium text-slate-700">Full Name</Label>
                            <Input variant="secondary" placeholder="Enter your full name" className="py-2.5 shadow-none mt-1" />
                        </TextField>

                        {/* Email Field (Read-only) */}
                        <TextField className="w-full" name="email" type="email" value={user?.email} isReadOnly>
                            <Label className="text-sm font-medium text-slate-700">Email Address</Label>
                            <Input className="py-2.5 shadow-none mt-1 bg-slate-100 text-slate-500 cursor-not-allowed" />
                        </TextField>

                        <div className="h-px bg-slate-200 my-6" />

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button
                            onClick={()=> router.back()}
                             type="button" 
                             variant="secondary" 
                             className="rounded-lg px-5">
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={loading}
                                className="rounded-lg px-6 bg-slate-900 text-white"
                            >
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>
            </motion.div>
        </div>
    );
};

export default UserUpdateForm;