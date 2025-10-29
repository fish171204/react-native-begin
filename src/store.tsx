import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './slices/counterSlice'
import { apiSlice } from "./slices/apiSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type Store = ReturnType<typeof store.getState>