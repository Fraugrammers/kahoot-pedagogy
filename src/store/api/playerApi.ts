import { apiSlice } from "./mainApi";
import { Player } from "../interfaces";

export const playerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPlayer: builder.query<Player, string>({
            query: (playerId) => `/player/${playerId}`,
            providesTags: [{ type: "players", id: "PLAY_LIST" }],
        }),
    })
})

export const { useGetPlayerQuery, useLazyGetPlayerQuery } = playerApiSlice;