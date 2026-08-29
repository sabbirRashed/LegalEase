"use client"

import { Avatar, Button, Description, Form, Input, Label, Surface, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiAlertCircle, FiUpload } from 'react-icons/fi';

const ProfileForms = () => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);
    };

    
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
                <h2 className="text-lg font-bold text-slate-900">Professional Profile</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Add your professional information so clients can learn more about you.
                </p>
            </div>

            <Form>
                <Surface className="flex w-full min-w-[340px] flex-col gap-4 rounded-3xl p-6">

                    <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
                        <div className="flex flex-col mx-auto">
                            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                                {preview ? (
                                    <Image
                                        src={preview}
                                        alt="Lawyer image preview"
                                        fill
                                        className="object-cover"
                                        sizes="144px"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-center text-xs font-medium text-slate-400">
                                        No photo selected
                                    </div>
                                )}
                            </div>

                            <Label className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                                <FiUpload className="h-3.5 w-3.5" />
                                Choose Photo

                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </Label>
                        </div>


                        <div className='col-span-2 space-y-4'>
                            {/* Name Field */}
                            <TextField name="name" variant="secondary">
                                <Label>Your full name</Label>
                                <Input
                                    className="w-full"
                                    placeholder="John" />
                            </TextField>

                            {/* Specialization */}
                            <TextField name="specialization" variant="secondary">
                                <Label>Your specialization</Label>
                                <Input
                                    className="w-full"
                                    placeholder="e.g. Criminal Law" />
                            </TextField>
                        </div>
                    </div>


                    <TextField name="bio" variant="secondary">
                        <Label>Bio</Label>
                        <TextArea
                            className="w-full"
                            placeholder="Tell us about yourself..."
                            rows={4} />
                    </TextField>
                </Surface>
            </Form>
        </div>
    );
};

export default ProfileForms;