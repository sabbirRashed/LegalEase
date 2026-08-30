import { revalidatePath } from "next/cache"
import { serverFetch } from "../core/server"
import { getUserSession } from "../core/session"

export const getLawyerServices = async (query) => {
    return serverFetch(`/api/services?${query}`)
}

export const getLawyerProfileByUserId = async (userId) => {

    return serverFetch(`/api/lawyer/myprofile?userId=${userId}`)
}

export const getLogedInLawyerProfile = async () => {
    const user = await getUserSession();

    return getLawyerProfileByUserId(user?.id)
}