import { configureStore } from "@reduxjs/toolkit";
import  adminReducer from "./features/adminSlice";
import { authApi } from "./api/authApi";
import { blogApi } from "./api/blogApi";

export const store = configureStore({
    reducer:{
        admin: adminReducer,
        [authApi.reducerPath]: authApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        authApi.middleware,
        blogApi.middleware,
    ])
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch