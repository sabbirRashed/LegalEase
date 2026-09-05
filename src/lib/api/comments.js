import { protectedFetch } from "../core/server"


export const getCommentsByProfileId = async(id)=>{
    return protectedFetch(`/api/comments/${id}`);
}

export const getCommentsByClientId = async(id)=>{
    return protectedFetch(`/api/comments/user/${id}`);
}


