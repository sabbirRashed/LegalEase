"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

// HIRING REQUEST RELATED
export const sendRequest = async (id, data) => {
    const res = await serverMutation(`/api/request`, data);
    revalidatePath(`/lawyers/lawyerDetails/${id}`);
    return res
}

export const updateRequestStatus = async (id, data) => {
    const res = await serverMutation(`/api/request/${id}`, data, "PATCH");
    revalidatePath(`/dashboard/lawyer/hiring-history`);
    return res
}