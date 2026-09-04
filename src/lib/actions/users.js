"use server"

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"


export const updateUserRole = async (userId, newRole) => {
    const res = await serverMutation(`/api/user/${userId}`, newRole, "PATCH")
    revalidatePath('/dashboard/admin/manage-users')
    return res
}

export const deleteAnUser = async (userId) => {
    const res = await serverMutation(`/api/user/${userId}`, null, "DELETE")
    revalidatePath('/dashboard/admin/manage-users')
    return res
}