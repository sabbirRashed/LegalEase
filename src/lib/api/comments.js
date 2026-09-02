import { serverFetch } from "../core/server"


export const getCommentsByProfileId = async(id)=>{
    return serverFetch(`/api/comments/${id}`);
}

export const getCommentsByClientId = async(id)=>{
    return serverFetch(`/api/comments/user/${id}`);
}