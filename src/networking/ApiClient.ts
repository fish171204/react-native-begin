// import axios from 'axios';
// import { Post } from '../model/Post';

// export function fetchPosts() {
//     axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             response.data.forEach((e) => {
//                 console.log("===> ", e);
//             })
//         })
//         .catch(error => {
//             console.error('Error fetching data: ', error)
//         })
// }

import axios, { AxiosInstance } from 'axios';

export class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            timeout: 10000,
            // headers: { 'Content-Type': 'application/json-patch+json', 'accept': 'text/plain' }
        });
    }
}