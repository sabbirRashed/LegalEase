import { protectedFetch, serverFetch } from "../core/server";
import { getUserSession } from "../core/session";
import { getLogedInLawyerProfile } from "./lawyer"


export const getRequestByProfileId = async () => {
    const lawyerProfile = await getLogedInLawyerProfile();
    const id = lawyerProfile?._id;
    return protectedFetch(`/api/request/${id}`)
}

export const getRequestByClientId = async () => {
    const user = await getUserSession();
    const id = user?.id;
    return protectedFetch(`/api/request/user/${id}`)
}

export const getHiringRequestById = async (id) => {
    return protectedFetch(`/api/request/requestid/${id}`)
}


export const getCommentPermission = async (userId, profileId) => {
    return protectedFetch(`/api/request/commentpermission?clientUserId=${userId}&lawyerProfileId=${profileId}`)

}