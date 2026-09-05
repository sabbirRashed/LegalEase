import { protectedFetch, serverFetch } from "../core/server"

export const getAnalyticsData = async()=>{
    return protectedFetch('/api/admin/analytics')
}