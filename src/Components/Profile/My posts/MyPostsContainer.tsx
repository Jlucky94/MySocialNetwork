import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    addPostActionCreator,
    InitialStatePropsType,
    newPostMessageUpdateActionCreator
} from "../../../Redux/profile-reducer";


export type MapStatePropsType = {
    profilePage: InitialStatePropsType
}
type MapDispatchPropsType = {
    addPostActionCreator: () => void
    newPostMessageUpdateActionCreator: (newMessage: string) => void
}
export type ProfilePagePropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostActionCreator: () => dispatch(addPostActionCreator()),
        newPostMessageUpdateActionCreator: (message: string) => dispatch(newPostMessageUpdateActionCreator(message))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;