import {ThunkAppDispatchType} from "./redux-store";
import {getAuthUserDataTC} from "./profile-reducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)

type initializedSuccessAT = ReturnType<typeof initializedSuccess>

type ActionType = initializedSuccessAT


export const initialState = {
    initialized: false
}
export type InitialStatePropsType = typeof initialState

const appReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export default appReducer;

export const initializeApp = () => (dispatch: ThunkAppDispatchType) => {
    const promise = dispatch(getAuthUserDataTC())
    Promise.all([promise]).then (()=> {
        dispatch(initializedSuccess())
    })
}
