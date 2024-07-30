import { api } from "./index";

export const carApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getCarById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetCarByIdQuery, useGetCarsQuery } = carApi;
