"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server"

export const postComment = async(id, data)=>{
    const res = await serverMutation(`/api/comment`, data);
    revalidatePath(`/lawyer/lawyerDetails/${id}`);
    return res
}