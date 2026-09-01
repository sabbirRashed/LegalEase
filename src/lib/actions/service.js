"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

// SERVICE RELATED API
export const createService = async (data) => {
    const res = await serverMutation(`/api/service`, data);
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}

export const updateService = async (id, data) => {
    const res = await serverMutation(`/api/service/${id}`, data, "PATCH");
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}

export const deleteService = async (id) => {
    const res = await serverMutation(`/api/service/${id}`, null, "DELETE");
    revalidatePath('/dashboard/lawyer/manage-legal-profile');
    return res
}