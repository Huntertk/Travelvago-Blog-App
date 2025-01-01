import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TypeBlog, TypeFilterBlog } from '../typs';



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
        }),
        getBlogsByParams: builder.query<{blogs:TypeBlog[],totalPage:number}, TypeFilterBlog>({
            query:(params) => {
                return {
                    url:"/blog",
                    params:{
                        category:params.category,
                        subcategory:params.subCategory,
                        search:params.search,
                        sortby:params.sortby,
                        page:params.page
                    }
                }
            }
        }),
        getBlogByParams: builder.query<TypeBlog, {blogId:string|undefined}>({
            query:(params) => {
                return {
                    url:`/blog/${params.blogId}`
                }
            }
        }),
        editBlog:builder.mutation<{message:string}, FormData>({
            query:(body) => {
                return {
                    url:"/blog/edit",
                    method:"POST",
                    body
                }
            },
        }),
        deleteBlog:builder.mutation<{message:string}, {blogId:string;}>({
            query:(body) => {
                return {
                    url:"/blog/delete",
                    method:"POST",
                    body
                }
            },
        }),
    })
})

export const {
    useCreateBlogMutation,
    useGetBlogsByParamsQuery,
    useGetBlogByParamsQuery,
    useEditBlogMutation,
    useDeleteBlogMutation
} = blogApi;