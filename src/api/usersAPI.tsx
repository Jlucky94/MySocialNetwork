import axios from "axios";
import {instance} from "./loginAPI";



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
