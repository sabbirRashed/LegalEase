
import { serverFetch } from "../core/server"
import { getUserSession } from "../core/session"



// LAWYER PROFILE RELATED API(for browse page)
export const getLawyerProfile = async (query) => {
    return serverFetch(`/api/lawyer?${query}`)
}

// (for description page)
export const getLawyerProfileById = async (id) => {
    return serverFetch(`/api/lawyer/${id}`)
}

// (for lawyer's own user id)
export const getLawyerProfileByUserId = async (userId) => {

    return serverFetch(`/api/lawyer/myprofile?userId=${userId}`)
}

export const getLogedInLawyerProfile = async () => {
    const user = await getUserSession();

    return getLawyerProfileByUserId(user?.id)
}


export const getTopHiredLawyer = async()=>{
    return serverFetch('/api/toplawyers')
}


// SERVICE RELATED API
export const getLawyerServiceByProfileId = async (id) => {
    return serverFetch(`/api/service/${id}`)
}
