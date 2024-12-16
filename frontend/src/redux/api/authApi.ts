import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { adminLoginSuccess } from '../features/adminSlice';
import { TypeAdmin } from '../typs';



export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1"
    }),
    tagTypes:["getAdmin"],
    endpoints:(builder) => ({
        login:builder.mutation<{email:string,name:string, password:string, role:string, _id:string}, {email:string, password:string}>({
            query:(body) => {
                return {
                    url:"/auth/login",
                    method:"POST",
                    body
                }
            },
        }),
        getMeData: builder.query<TypeAdmin, {}>({
            query:() => '/admin/me',
            async onQueryStarted ({}, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(adminLoginSuccess({email:data.email,name:data.name, role:data.role, isAuthenticated:true}))
                } catch (error) {
                    dispatch(adminLoginSuccess({email:null,name:null, role:null, isAuthenticated:false}))
                }
            },
            providesTags:["getAdmin"]
        }),
        logout:builder.query({
            query:() => {
                return {
                    url:"/auth/logout",
                }
            }
        }),
    })
})

export const {useLoginMutation, useGetMeDataQuery, useLazyLogoutQuery} = authApi