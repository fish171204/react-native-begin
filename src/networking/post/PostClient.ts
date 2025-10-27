import { Post } from "../../model/Post";
import { ApiClient } from "../ApiClient";

export class PostClient extends ApiClient {
    async fetchPosts(): Promise<Post[]> {
        let response = await this.axiosInstance.get<Post[]>('posts');
        if (response.status) {
            return response.data;
        } else {
            throw new Error('Error fetching api')
        }
    }

}