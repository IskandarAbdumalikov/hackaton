import { api } from "./index";

export const areaApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAreas: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getAreaById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetAreaByIdQuery, useGetAreasQuery } = areaApi;
