"use server"

import { serverFetch, serverMutation } from "../core/server"

export const  fetchLawyerProfile = async()=>{
        return serverFetch('/api/lawyer')
}

export const createLawyerProfile = async(profileData)=>{
    return serverMutation('/api/lawyer', profileData)
}