import { serverFetch } from "../core/server";
import { getLogedInLawyerProfile } from "./lawyer"


export const getRequestByProfileId = async()=>{
    const lawyerProfile = await getLogedInLawyerProfile();
    const id = lawyerProfile?._id;
    return serverFetch(`/api/request/${id}`)
}