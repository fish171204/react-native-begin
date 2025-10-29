import React, { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { useGetPostsQuery } from "../../slices/apiSlice";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PostItem = ({ post }: { post: Post }) => {
    return (
        <View style={{ backgroundColor: "green", borderRadius: 8, margin: 10, padding: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{post.title}</Text>
            <View style={{ height: 10 }} />
            <Text style={{ color: "white" }}>{post.body}</Text>
        </View>
    );
};

export const RTKQueryExample = () => {
    const [refreshing, setRefreshing] = useState(false);

    const {
        data: posts = [],
        isLoading,
        isSuccess,
        isError,
        error,
        refetch,
    } = useGetPostsQuery();

    const onRefresh = async () => {
        try {
            setRefreshing(true);
            await refetch();
        } finally {
            setRefreshing(false);
        }
    };

    let content: React.ReactNode = null;

    if (isLoading) {
        content = (
            <View style={{ padding: 16 }}>
                <Text style={{ textAlign: "center" }}>Content is loading...</Text>
            </View>
        );
    } else if (isSuccess) {
        content = (
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {posts.map((p: Post) => (
                    <PostItem key={p.id} post={p} />
                ))}
            </ScrollView>
        );
    } else if (isError) {
        content = (
            <View style={{ padding: 16 }}>
                <Text style={{ textAlign: "center" }}>
                    Error occurs{error ? `: ${"status" in error ? error.status : ""}` : ""}
                </Text>
            </View>
        );
    }

    return <>{content}</>;
};

export default RTKQueryExample;

/*
    Redux Toolkit Query (RTK Query):
    - Là công cụ của Redux Toolkit giúp xử lý gọi API, cache dữ liệu, 
      và quản lý trạng thái bất đồng bộ (loading, success, error) một cách tự động.
    - Cách hoạt động:
        + useGetPostsQuery() là custom hook được tạo tự động từ apiSlice.
        + Khi component mount, hook này tự động gửi request tới API, 
          trả về các biến: data, isLoading, isSuccess, isError, error, refetch.
        + RTK Query tự quản lý cache và chỉ refetch khi cần thiết (hoặc khi gọi refetch()).
    - Quy trình trong ví dụ này:
        1. Component gọi useGetPostsQuery() → gửi GET '/posts' đến API.
        2. Nếu đang tải → hiển thị “Content is loading...”.
        3. Nếu thành công → hiển thị danh sách bài viết (PostItem).
        4. Nếu lỗi → hiển thị thông báo lỗi.
        5. Khi người dùng kéo làm mới → gọi refetch() để tải lại dữ liệu.
    - Ưu điểm:
        + Tự động cache, revalidate và quản lý state.
        + Giảm boilerplate so với Redux truyền thống.
        + Dễ kết hợp với useState/useEffect và React Hooks khác.
*/
