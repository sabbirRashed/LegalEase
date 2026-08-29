"use server"

import {  serverMutation } from "../core/server"



export const createLawyerProfile = async(profileData)=>{
    return serverMutation('/api/lawyer', profileData)
}

export const updateLawyerProfile = async(profileId, newData)=>{
    console.log('profileId:', profileId, "new Data:", newData);
    return serverMutation(`/api/lawyer/${profileId}`, newData, "PATCH" )
}