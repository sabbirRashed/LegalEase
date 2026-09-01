"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

// HIRING REQUEST RELATED
export const sendRequest = async (id, data) => {
    console.log('id: ', id, 'data:', data);
    const res = await serverMutation(`/api/request`, data);
    revalidatePath(`/lawyers/lawyerDetails/${id}`);
    return res
}