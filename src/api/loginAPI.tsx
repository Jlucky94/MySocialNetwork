import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "decc21e8-24ad-48e7-b8d0-b93097de998e"
    }
})

export const loginAPI = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => {
            return response.data
        })
    },
    logout: () => {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },

}
export const securityAPI = {
    getCaptcha: () => {
        return instance.get(`security/get-captcha-url`).then(response => {
            return response.data.url
        })
    }
}
