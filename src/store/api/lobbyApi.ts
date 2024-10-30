import { apiSlice } from "./mainApi";
import { Lobby, Player } from "../interfaces";

interface PlayerRequest {
    lobbyCode: number;
    username: Player["username"];
}

export const lobbyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLobby: builder.query<Lobby, string>({
            query: (lobbyId) => `/lobby/${lobbyId}`,
            providesTags: [{ type: "lobbies", id: "LOB_LIST" }],
        }),
        createLobby: builder.mutation<Lobby, Partial<Lobby>>({
            query: (initialReq) => ({
                url: '/lobby/create',
                method: 'POST',
                body: initialReq,
            }),
            invalidatesTags: [{ type: "lobbies", id: "LOB_LIST" }],
        }),
        addPlayer: builder.mutation<Lobby, PlayerRequest>({
            query: (initialReq) => ({
                url: '/lobby/player/add',
                method: 'POST',
                body: initialReq,
            }),
            invalidatesTags: [{ type: "lobbies", id: "LOB_LIST" }],
        }),
    })
})

export const {useCreateLobbyMutation, useGetLobbyQuery, useAddPlayerMutation} = lobbyApiSlice;