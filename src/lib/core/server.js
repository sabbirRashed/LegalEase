"use server"


import { getUserToken } from "./session";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


export const authHeader = async () => {
    const token = await getUserToken();
    const header = token ? {
        authorization: `Bearer ${token}`
    } : {}

    return header;
}

export const serverFetch = async (path) => {
    const res = await fetch(`${serverUrl}${path}`);

    // handle 401, 403, 404
    return res.json()
}

export const protectedFetch = async (path) => {
    const res = await fetch(`${serverUrl}${path}`, {
        headers: await authHeader()
    });
    return res.json()
}

export const serverMutation = async (path, data = null, method = 'POST') => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: method,
        headers: {
            "content-type": "application/json",
            ...(await authHeader())
        },
        ...(data !== null && { body: JSON.stringify(data) })
    });


    return res.json();
}