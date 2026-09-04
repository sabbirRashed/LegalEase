"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server"

export const postTransectionData = async(data)=>{
    const res = await serverMutation( `/api/transaction` ,data);
    return res

}