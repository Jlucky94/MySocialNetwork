export const ADD_POST = 'ADD-POST';
export const NEW_POST_MESSAGE_UPDATE = 'NEW-POST-MESSAGE-UPDATE';
export const SET_USER_PROFILE_PAGE = 'SET-USER-PROFILE-PAGE'

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const newPostMessageUpdateActionCreator = (newMessage: string) => ({
        type: NEW_POST_MESSAGE_UPDATE,
        message: newMessage
    } as const
)
export const setUserProfilePage = (profilePage: ProfilePagePropsType) =>({type: SET_USER_PROFILE_PAGE, profilePage})

export type PostsPropsType = {
    id: number
    message: string
    likeCounts: number
}
export type profileType = {

}
type ProfilePagePropsType = {
    posts: PostsPropsType[],
    newPostMessage: string,
    profile: any
}

type AddPostAT = ReturnType<typeof addPostActionCreator>
type NewPostMessageUpdateAT = ReturnType<typeof newPostMessageUpdateActionCreator>
type setUserProfilePageAT = ReturnType<typeof setUserProfilePage>
type ActionType = AddPostAT | NewPostMessageUpdateAT


const initialState = {
    posts: [
        {id: 1, message: "Hi, whats up?", likeCounts: 12},
        {id: 2, message: "Its my first post", likeCounts: 33}
    ],
    newPostMessage: "Enter new message",
    profile:{}
}
export type InitialStatePropsType = typeof initialState

const profileReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostMessage: '',
                posts: [...state.posts, {id: 3, message: state.newPostMessage, likeCounts: 0}]
            }
        }
        case NEW_POST_MESSAGE_UPDATE: {
            return {
                ...state,
                newPostMessage: action.message
            }
        }

        default:
            return state

    }

}
export default profileReducer;