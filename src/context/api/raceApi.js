import { api } from "./index";

export const raceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRaces: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getRaceById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetRaceByIdQuery, useGetRacesQuery } = raceApi;
