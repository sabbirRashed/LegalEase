"use server"

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"



export const createLawyerProfile = async (profileData) => {
    const res = serverMutation('/api/lawyer', profileData)
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}

export const updateLawyerProfile = async (profileId, newData) => {
    const res = serverMutation(`/api/lawyer/${profileId}`, newData, "PATCH");
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}