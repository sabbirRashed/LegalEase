"use server"

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"


// PROFILE RELATED
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


// SERVICE RELATED API
export const createService = async(data)=>{
    const res = serverMutation(`/api/service`, data);
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}

export const updateService = async(id, data)=>{
    const res = serverMutation(`/api/service/${id}`, data, "PATCH");
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}