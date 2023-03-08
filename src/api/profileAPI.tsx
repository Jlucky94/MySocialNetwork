import axios from "axios";
import {instance} from "./loginAPI";



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

