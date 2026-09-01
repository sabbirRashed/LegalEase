"use server"

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"


// PROFILE RELATED
export const createLawyerProfile = async (profileData) => {
    const res = await serverMutation('/api/lawyer', profileData)
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}

export const updateLawyerProfile = async (profileId, newData) => {
    const res = await serverMutation(`/api/lawyer/${profileId}`, newData, "PATCH");
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}


