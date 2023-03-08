import {Dispatch} from "redux";
import {profileAPI} from "../api/profileAPI";
import {setAuthUserData} from "./auth-reducer";
import {v1} from "uuid";

export const ADD_POST = 'ADD-POST';
export const NEW_POST_MESSAGE_UPDATE = 'NEW-POST-MESSAGE-UPDATE';
export const SET_USER_PROFILE_PAGE = 'SET-USER-PROFILE-PAGE'
export const SET_USER_STATUS = 'GET-USER-STATUS'

export const addPost = (postMessage:string) => ({type: ADD_POST,postMessage} as const)
export const newPostMessageUpdate = (message: string) => ({
        type: NEW_POST_MESSAGE_UPDATE,
        message
    } as const
)
export const setProfilePage = (profile: ProfilePropsType) => ({type: SET_USER_PROFILE_PAGE, profile} as const)
export const setStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)


export type PostsPropsType = {
    id: number
    message: string
    likeCounts: number
}
export type ProfilePropsType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        github: string,
        instagram: string,
        mainLink: string,
        twitter: string,
        vk: string,
        website: string,
        youtube: string
    }
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: {
        small: string,
        large: string,
        userId: number
    }
}
// type ProfilePagePropsType =
//     {
//         posts: PostsPropsType[],
//         newPostMessage: string,
//         profile: ProfilePropsType
//     }

type AddPostAT = ReturnType<typeof addPost>
// type NewPostMessageUpdateAT = ReturnType<typeof newPostMessageUpdate>
type SetUserProfilePageAT = ReturnType<typeof setProfilePage>
type SetStatusAT = ReturnType<typeof setStatus>


const initialState = {
    posts: [
        {id: 1, message: "Hi, whats up?", likeCounts: 12},
        {id: 2, message: "Its my first post", likeCounts: 33}
    ],
    newPostMessage: '',
    status: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: '',
            userId: 0
        }
    }
}
type ActionType = AddPostAT| SetUserProfilePageAT | SetStatusAT
export type InitialStatePropsType = typeof initialState


const profileReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostMessage: '',
                posts: [...state.posts, {id: v1(), message: action.postMessage, likeCounts: 0}]
            }
        }
        // case NEW_POST_MESSAGE_UPDATE: {
        //     console.log(action.message)
        //     return {
        //         ...state,
        //         newPostMessage: action.message
        //     }
        // }
        case SET_USER_PROFILE_PAGE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state

    }

}
export default profileReducer;

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let response = await profileAPI.authMe()
        if (response.data.resultCode === 0)
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login,true))
}
export const getProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(setProfilePage(response.data))
}
export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}
export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}
