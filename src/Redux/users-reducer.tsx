import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";

export const SET_FOLLOWING_STATUS = 'SET-FOLLOWING-STATUS';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
export const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE-FOLLOWING-IS-FETCHING';


type setFollowingStatusAT = ReturnType<typeof setFollowingStatus>
type setUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingAT = ReturnType<typeof toggleFetching>
type toggleFollowingIsFetching = ReturnType<typeof toggleFollowingIsFetching>

export const setFollowingStatus = (userID: number, followed: boolean) => ({
    type: SET_FOLLOWING_STATUS,
    userID,
    followed
} as const)
export const setUsers = (users: UserPropsType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const toggleFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingIsFetching = (userId: number, isFetching: boolean) => ({
    type: TOGGLE_FOLLOWING_IS_FETCHING,
    userId,
    isFetching
} as const)


export type UserPropsType = {
    id: number
    photos: string
    name: string
    followed: boolean
    status: string
    location: { city: string, country: string }
}
export type InitialStatePropsType = {
    users: UserPropsType[],
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    isFetching: boolean,
    followingIsFetching: number[]
}

const initialState: InitialStatePropsType = {
    users: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsFetching: []
}
type ActionType =
    setFollowingStatusAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | toggleIsFetchingAT
    | toggleFollowingIsFetching

const usersReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case SET_FOLLOWING_STATUS:
            return {
                ...state,
                users: state.users.map((u: UserPropsType) => u.id === action.userID ? {
                    ...u,
                    followed: action.followed
                } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IS_FETCHING:
            return {
                ...state,
                followingIsFetching: action.isFetching
                    ? [...state.followingIsFetching, action.userId]
                    : state.followingIsFetching.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export default usersReducer;


export const getUsersTC = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const usersPage = getState().usersPage
    dispatch(toggleFetching(true))
    let data = await usersAPI.getUsers(usersPage.currentPage, usersPage.pageSize)
    dispatch(toggleFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
const followUnfollowFlow = async (dispatch:Dispatch, userId:number, apiMethod:any, followed:boolean) => {
    dispatch(toggleFollowingIsFetching(userId,true))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(setFollowingStatus(userId, followed))
    }
    dispatch(toggleFollowingIsFetching(userId, false))

}
export const followTC = (user: UserPropsType) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,user.id,usersAPI.follow,true)
}
export const unfollowTC = (user: UserPropsType) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch,user.id,usersAPI.unFollow,false)
}