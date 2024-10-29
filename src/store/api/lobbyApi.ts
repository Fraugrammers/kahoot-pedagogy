import { apiSlice } from "./mainApi";
import { Lobby } from "./interfaces";

export const manualApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrganization: builder.query<Lobby, string>({
            query: (lobbyId) => `/api/lobby?id=${lobbyId}`,
            providesTags: [{ type: "lobbies", id: "LOB_LIST" }],
        }),
        createLobby: builder.mutation<Lobby, Partial<Lobby>>({
            query: (initialReq) => ({
                url: '/api/lobby/create',
                method: 'POST',
                body: initialReq,
            }),
            invalidatesTags: [{ type: "lobbies", id: "LOB_LIST" }],
        }),
    })
})

export const {useCreateLobbyMutation, useGetOrganizationQuery} = manualApiSlice;