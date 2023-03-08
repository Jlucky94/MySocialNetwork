import {ThunkAppDispatchType} from "./redux-store";
import {loginAPI} from "../api/loginAPI";
import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./profile-reducer";
import {stopSubmit} from 'redux-form'

export const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
export const LOG_OUT = 'LOG-OUT'

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login},
    isAuth
} as const)
// export const logOut = ()=> ({
//     type:LOG_OUT
// } as const)

type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>
// type LogOutAT = ReturnType<typeof logOut>

type ActionType = SetAuthUserDataAT


export const initialState = {
    data: {
        userId: 0,
        email: '',
        login: ''
    },
    isAuth: false
}
export type InitialStatePropsType = typeof initialState

const authReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: action.isAuth
            }
        // case "LOG-OUT":
        //     return {
        //         ...state,
        //         isAuth: false
        //     }
        default:
            return state
    }
}
export default authReducer;

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: boolean) => async (dispatch: ThunkAppDispatchType) => {
    let response = await loginAPI.login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) dispatch(getAuthUserDataTC())
        else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
}
export const logoutTC = () => (dispatch: Dispatch) => {
    loginAPI.logout().then(res => {
        if (res.resultCode === 0) dispatch(setAuthUserData(0, '', '', false))
    })
}