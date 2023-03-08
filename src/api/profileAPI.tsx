import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "decc21e8-24ad-48e7-b8d0-b93097de998e"
    }
})

export const profileAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    },
    getProfile: (userId: number) => {
        return instance.get(`profile/` + userId)
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus: (status:string) => {
        return instance.put(`profile/status`,{status})
    },

}

