import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    InitialStatePropsType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    unFollow,
    UserPropsType
} from "../../Redux/users-reducer";

type MapStatePropsType = {
    usersPage: InitialStatePropsType

}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserPropsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleFetching: (isFetching: boolean) => void
}
export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => dispatch(follow(userID)),
        unFollow: (userID) => dispatch(unFollow(userID)),
        setUsers: (users) => dispatch(setUsers(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCount(totalUsersCount)),
        toggleFetching: (isFetching: boolean) => dispatch(toggleFetching(isFetching))
    }
}
const UsersContainer = connect(mapStateToProps, {follow,unFollow,setUsers,setCurrentPage,setTotalUsersCount,toggleFetching})(Users)

export default UsersContainer