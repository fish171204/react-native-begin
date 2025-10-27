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