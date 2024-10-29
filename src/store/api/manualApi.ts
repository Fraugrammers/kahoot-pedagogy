import { apiSlice } from "./mainApi";

export const manualApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateDictionary: builder.mutation({
            query: (codes) => ({
                url: '/esutd/api/dictionary/update',
                method: 'POST',
                body: codes
            }), invalidatesTags: [{ type: "manuals", id: "MAN_LIST" }]
        })
    })
})

export const {
    useUpdateDictionaryMutation
} = manualApiSlice;