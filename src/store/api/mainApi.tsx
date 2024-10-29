import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";

import { RootState } from '@/main';

const baseQuery = fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as RootState).auth.token;

        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }

        headers.set("Accept", "*/*");
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (arg, api, extraOptions) => {
        try {
            const result: any = await baseQuery(arg, api, extraOptions);
            if (result && result.error && result.error.data.errorMessage) {
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                        <HiExclamation className="h-5 w-5" />
                    </div>
                    <div className="pl-4 text-sm font-normal">{result.error.data.errorMessage}</div>
                    <Toast.Toggle />
                </Toast>
            }
            return result;
        } catch (error) {
            console.error("Error occurred during API call:", error);
            throw error;
        }
    },
    tagTypes: ["organizations", "requests", "manuals"],
    endpoints: () => ({}),
});