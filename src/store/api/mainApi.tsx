import NotificationToast from '@/components/ui/NotificationToast';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (arg, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' });
        try {
            const result: any = await baseQuery(arg, api, extraOptions);
            if (result && result.error && result.error.data.errorMessage) {
                return (
                    <NotificationToast type='danger' duration={2000} message='An error occured!' />
                );
            }
            return result;
        } catch (error) {
            console.error("Error occurred during API call:", error);
            throw error;
        }
    },
    tagTypes: ["players", "lobbies", "tasks"],
    endpoints: () => ({}),
});
