import { protectedFetch, serverFetch } from "../core/server"

export const transactionFetchingApi = async (userId, profileID) => {
    let url = '/api/transactions';

    if (userId && profileID) {
        url = `/api/transactions?clientUserId=${userId}&lawyerProfileId=${profileID}`;
    } else if (userId) {
        url = `/api/transactions?clientUserId=${userId}`;
    } else if (profileID) {
        url += `/api/transactions?lawyerProfileId=${profileID}`;
    }

    return protectedFetch(url);
};