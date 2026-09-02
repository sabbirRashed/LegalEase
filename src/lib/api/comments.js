import { serverFetch } from "../core/server"


export const getCommentsByProfileId = async(id)=>{
    return serverFetch(`/api/comments/${id}`);
}