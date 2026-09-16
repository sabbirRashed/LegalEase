import { protectedFetch, serverFetch } from "../core/server"


export const getCommentsByProfileId = async(id)=>{
    return serverFetch(`/api/comments/${id}`);
    
}

export const getCommentsByClientId = async(id)=>{
    return protectedFetch(`/api/comments/user/${id}`);
}


