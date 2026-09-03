"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server"

export const postComment = async(id, data)=>{
    const res = await serverMutation(`/api/comment`, data);
    revalidatePath(`/lawyer/lawyerDetails/${id}`);
    revalidatePath(`/dashboard/user/comments`);
    return res
}

export const updateComment = async(commentId, data)=>{

    console.log('commentId from update api: ', commentId);
    const res = await serverMutation(`/api/comment/${commentId}`, data, "PATCH");
    revalidatePath(`/dashboard/user/comments`);
    //revalidate detailspage
    return res
}