import { serverFetch } from "../core/server";
import { getUserSession } from "../core/session";
import { getLogedInLawyerProfile } from "./lawyer"


export const getRequestByProfileId = async()=>{
    const lawyerProfile = await getLogedInLawyerProfile();
    const id = lawyerProfile?._id;
    return serverFetch(`/api/request/${id}`)
}

export const getRequestByClientId = async()=>{
    const user = await getUserSession();
    const id = user?.id;
    console.log('request on call api');
    return serverFetch(`/api/request/user/${id}`)
}