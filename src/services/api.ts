import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteDetalhe } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestauranteDetalhe[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<RestauranteDetalhe, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
export default api
