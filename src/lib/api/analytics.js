import { serverFetch } from "../core/server"

export const getAnalyticsData = async()=>{
    return serverFetch('/api/admin/analytics')
}