"use client"

import { createLawyerProfile, updateLawyerProfile } from '@/lib/actions/lawyer';
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, ListBox, Modal, Surface, TextField, Select, TextArea, FieldError, } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiEdit, FiLoader, FiUpload, FiUser, FiX } from 'react-icons/fi';

const ProfileForms = ({ profile }) => {

    const [imagePreview, setImagePreview] = useState(profile?.imageUrl || null);
    const [imageUrl, setImageUrl] = useState(profile?.imageUrl || null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [status, setStatus] = useState(profile?.status || '')
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter()

    const { data, isPending } = authClient.useSession()
    const user = data?.user;



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
            console.log(data, 'imageBB');

            if (!data.success) throw new Error("Upload failed");

            setImageUrl(data.data.url);
            setErrors((prev) => ({ ...prev, image: "" }))

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

    const validate = (name, bio) => {
        const newError = {}
        if (!imageUrl) newError.image = "Image is required"
        if (name.length < 2) newError.name = "Name will be atleast 2 caracter"
        if (bio.length < 10) newError.bio = "Bio will be atleast 10 caracter"

        return newError
    }


    const handleSubmitProfile = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const { name, email, specialization, consultationRate, hourlyRate, bio } = Object.fromEntries(formData.entries())

        const validationErrors = validate(name, bio);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            return;
        }

        try {
            setIsSubmitting(true);

            const res = await createLawyerProfile({
                userId: user?.id,
                name: name,
                email: email,
                specialization: specialization,
                consultationRate: consultationRate,
                hourlyRate: hourlyRate,
                bio: bio,
                status: status,
                imageUrl: imageUrl,
            })

            if (res.insertedId) {
                toast.success("Successfully created your profile!")
                form.reset()
                router.refresh();
            }

            console.log(res, 'response');
        }
        catch (error) {
            console.log('error:', error);
            toast.error('Upload failed! Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }


    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const { name, email, specialization, consultationRate, hourlyRate, bio } = Object.fromEntries(formData.entries())

        const validationErrors = validate(name, bio);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);

            return;
        }

        try {
            setIsSubmitting(true);

            const res = await updateLawyerProfile(profile?._id, {
                userId: user?.id,
                name: name,
                email: email,
                specialization: specialization,
                consultationRate: consultationRate,
                hourlyRate: hourlyRate,
                bio: bio,
                status: status,
                imageUrl: imageUrl,
            })

            if (res.modifiedCount > 0) {
                toast.success("Successfully updated your profile!")
                form.reset()
                router.refresh();
            }

            console.log(res, 'updated');

        }
        catch (error) {
            console.log('error:', error);
            toast.error('Upload failed! Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <Modal>

            {
                profile?._id ? <Button
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 cursor-pointer"
                >
                    <FiEdit className="h-4 w-4" />
                    Edit Profile
                </Button>
                    : <Button
                        className="mt-5 h-11 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"

                    >
                        Create Professional Profile
                    </Button>
            }



            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl rounded-sm p-0">
                        <Modal.CloseTrigger />
                        <Modal.Header className='border-b border-b-slate-200 p-6 '>
                            <Modal.Heading className="text-xl text-slate-900">Professional Profile</Modal.Heading>
                            <p className=" text-sm leading-2 text-muted">
                                Keep your professional information up to date.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="px-6 pt-6 sm:px-8 sm:pt-8">
                            <Surface variant="default">

                                <form onSubmit={profile?._id ? handleUpdateProfile : handleSubmitProfile} className="flex flex-col gap-4">

                                    <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-6 md:gap-8'>
                                        {/* name + email + specialization*/}
                                        <div className='flex-1 space-y-4 w-full'>
                                            <TextField className="w-full" name="name" type="text" defaultValue={user?.name} variant="secondary">
                                                <Label>Name</Label>
                                                <Input placeholder="Enter your name" />
                                                {
                                                    errors.name && <p className='text-red-500 text-xs px-4 py-2 rounded-xl  bg-red-100'>{errors.name}</p>
                                                }
                                            </TextField>

                                            {/* email */}
                                            <TextField className="w-full" name="email" type="email" defaultValue={user?.email} variant="secondary">
                                                <Label>Email</Label>
                                                <Input placeholder="Enter your email" />
                                            </TextField>

                                            {/* specialization */}
                                            <TextField className="w-full" name="specialization" defaultValue={profile?.specialization} type='text' variant="secondary" isRequired>
                                                <Label>Specialization</Label>
                                                <Input placeholder="e.g Family Lawyers" />
                                            </TextField>
                                        </div>

                                        {/* profile image field */}
                                        <div className="flex flex-col items-center gap-3 lg:items-start sm:mt-4">
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
                                    </div>

                                    {/* consultation fee */}
                                    <TextField className="w-full" name="consultationRate" type='number' defaultValue={profile?.consultationRate} variant="secondary" isRequired>
                                        <Label>Consultation Fee</Label>
                                        <Input min={0} placeholder="e.g ৳ 1800" />
                                    </TextField>

                                    {/* hourly rate */}
                                    <TextField className="w-full" name="hourlyRate" type='number' defaultValue={profile?.hourlyRate} variant="secondary" isRequired>
                                        <Label>Hourly Rate</Label>
                                        <Input min={0} placeholder="e.g ৳ 2500" />
                                    </TextField>

                                    {/* availability status */}
                                    <Select
                                        value={status}
                                        onChange={(value) => setStatus(value)} className="w-full" placeholder="Select one" variant='secondary' isRequired>
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover className={'rounded-md'}>
                                            <ListBox >
                                                <ListBox.Item id="available" textValue="available" >
                                                    Available
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="busy" textValue="busy">
                                                    Busy
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField
                                        isRequired
                                        name="bio"
                                        defaultValue={profile?.bio}
                                        variant='secondary'
                                    >
                                        <Label>Bio</Label>
                                        <TextArea rows={3} placeholder="Tell us about yourself..." />
                                        <FieldError />
                                        {
                                            errors.bio && <p className='text-red-500 text-xs px-4 py-4 rounded-xl  bg-red-100'>{errors.bio}</p>
                                        }
                                    </TextField>

                                    <div className=' pt-10 pb-6  flex items-center gap-4 justify-end bg-white sticky bottom-0'>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        {
                                            profile?._id ? <Button type='submit'>Update Profile</Button>
                                                : <Button type='submit'>Save Profile</Button>

                                        }


                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ProfileForms;