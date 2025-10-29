import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})

export const { useGetPostsQuery } = apiSlice

/*
    RTK Query (Redux Toolkit Query):
    - Là công cụ tích hợp trong Redux Toolkit giúp xử lý gọi API, caching, refetch, 
      và quản lý state server-side dễ dàng hơn mà không cần viết nhiều code.
    - Cấu trúc:
        + createApi(): khởi tạo API slice chứa các endpoint.
        + reducerPath: tên định danh cho slice trong Redux store.
        + baseQuery: định nghĩa base URL và các config cơ bản (ở đây dùng fetchBaseQuery).
        + endpoints: nơi khai báo các API endpoint (get, post, put, delete...).
          Mỗi endpoint có thể là builder.query (GET) hoặc builder.mutation (POST, PUT...).
    - Trong ví dụ này:
        + getPosts: định nghĩa endpoint GET '/posts' (lấy danh sách bài viết).
        + useGetPostsQuery: hook auto-generated do RTK Query tạo ra.
          → Dùng trong component để gọi API và tự động quản lý loading, success, error.
    - Quy trình hoạt động:
        Component → gọi useGetPostsQuery() → fetch dữ liệu từ API → 
        RTK Query cache kết quả → render UI theo trạng thái (isLoading, data, error,...)
    - Ưu điểm:
        + Giảm code gọi API, không cần viết reducer hay thunk thủ công.
        + Tự động cache và refetch thông minh.
        + Dễ tích hợp với Redux store.
*/