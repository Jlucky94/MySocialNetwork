export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

type followAT = ReturnType<typeof follow>
type unfollowAT = ReturnType<typeof unFollow>
type setUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingAT = ReturnType<typeof toggleFetching>

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UserPropsType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const toggleFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)


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
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

const initialState: InitialStatePropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
type ActionType = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersCountAT | toggleIsFetchingAT

const usersReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserPropsType) => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UserPropsType) => u.id === action.userID ? {...u, followed: false} : u)
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
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export default usersReducer;