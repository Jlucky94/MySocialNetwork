import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "decc21e8-24ad-48e7-b8d0-b93097de998e"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    }
}
