import axios from "axios";
import {instance} from "./loginAPI";
import {ProfilePropsType} from "../Redux/profile-reducer";



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
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    },
    savePhoto: (photo: File) => {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (profile: ProfilePropsType) => {
        return instance.put(`profile`, profile)
    }
}
