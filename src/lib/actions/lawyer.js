"use server"

import {  serverMutation } from "../core/server"



export const createLawyerProfile = async(profileData)=>{
    return serverMutation('/api/lawyer', profileData)
}