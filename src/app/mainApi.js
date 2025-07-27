import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseUrl = 'http://192.168.1.206:5000';
//export const baseUrl= 'https://practise-backend-yrtb.onrender.com';





export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api`, credentials: 'include' }),
  endpoints: (builder) => ({})
});