import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const blogApi = createApi({
    reducerPath:"blogApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"/api/v1"
    }),
    endpoints:(builder) => ({
        createBlog:builder.mutation<{message:string}, FormData>({
            query:(body) => {
                return {
                    url:"/blog/new",
                    method:"POST",
                    body
                }
            },
        })
    })
})

export const {useCreateBlogMutation} = blogApi;