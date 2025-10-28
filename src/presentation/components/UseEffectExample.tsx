import { useEffect, useState } from "react";
import { StyleSheet, Button, View, Text, ScrollView } from "react-native";
import container from "../../dependencies/dependencies";
import { PostClient } from "../../networking/post/PostClient";
import { Post } from "../../model/Post";

const initPost: Post[] = [];
export const UseEffectExample = () => {
    const [reload, setReload] = useState(0);
    const postApi = container.get<PostClient>('PostClient');
    useEffect(() => {
        console.log("====> RELOAD");
        postApi.fetchPosts().then(posts => {
            setPosts(posts);
        })
    }, [reload]);
    const [posts, setPosts] = useState(initPost)

    return (
        <ScrollView style={style.appbarTop}>
            <Button title="Reload"
                onPress={() => setReload(reload + 1)} />
            {posts.map((prop, index) => {
                return (
                    <Text key={index}>
                        {prop.title}
                    </Text>)
            })}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    appbarTop: { paddingTop: 100 }
})

/*
    useEffect:
    - Là hook giúp xử lý các "tác vụ phụ" (side effects) trong React như gọi API, thao tác DOM, setTimeout,...
    - Cú pháp: useEffect(callback, [dependencies])
        + callback: hàm sẽ chạy sau khi render.
        + dependencies: mảng giá trị phụ thuộc, chỉ khi giá trị trong mảng thay đổi thì callback mới chạy lại.
    - Nếu dependencies rỗng [] → chỉ chạy 1 lần khi component mount.
    - Nếu có dependencies → chạy lại mỗi khi giá trị trong mảng thay đổi.
    - Trong ví dụ này:
        + Khi component mount hoặc khi reload thay đổi, useEffect gọi postApi.fetchPosts() để lấy danh sách bài viết.
        + Kết quả trả về được set vào state posts → component tự động re-render để hiển thị dữ liệu mới.
*/ 