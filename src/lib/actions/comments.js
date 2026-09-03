"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server"

export const postComment = async(id, data)=>{
    const res = await serverMutation(`/api/comment`, data);
    revalidatePath(`/lawyer/lawyerDetails/${id}`);
    revalidatePath(`/dashboard/user/comments`);
    return res
}

export const updateComment = async(lawProfileId, commentId, data)=>{

    const res = await serverMutation(`/api/comment/${commentId}`, data, "PATCH");
    revalidatePath(`/dashboard/user/comments`);
    revalidatePath(`/lawyer/lawyerDetails/${lawProfileId}`);
    //revalidate detailspage
    return res
}

export const deleteCommentApi = async(lawProfileId, commentId)=>{
    const res = await serverMutation(`/api/comment/${commentId}`, null, 'DELETE');
    revalidatePath(`/dashboard/user/comments`);
    revalidatePath(`/lawyer/lawyerDetails/${lawProfileId}`);
    return res
}