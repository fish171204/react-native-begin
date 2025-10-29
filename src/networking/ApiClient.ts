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
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../model/AuthModels';

export class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://ai.tvssolutions.vn:61266/api',
            timeout: 10000,
            headers: { 'Content-Type': 'application/json-patch+json', 'accept': 'text/plain' }
        });
    }

    // Generic HTTP methods
    async get<T>(url: string): Promise<T> {
        const response = await this.axiosInstance.get<T>(url);
        return response.data;
    }

    async post<T>(url: string, data: any): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data);
        return response.data;
    }

    // Auth specific methods
    async login(request: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await this.axiosInstance.post('/Auth/Login', request);
            return {
                success: true,
                token: response.data.token,
                user: response.data.user,
                message: 'Login successful'
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    }

    async register(request: RegisterRequest): Promise<RegisterResponse> {
        try {
            const response = await this.axiosInstance.post('/Auth/Register', request);
            return {
                success: true,
                user: response.data.user,
                message: 'Registration successful'
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'Registration failed'
            };
        }
    }

    // Set authorization token
    setAuthToken(token: string) {
        this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    // Clear authorization token
    clearAuthToken() {
        delete this.axiosInstance.defaults.headers.common['Authorization'];
    }
}