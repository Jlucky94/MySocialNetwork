import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import Profile from "./Profile";

type MapStatePropsType = {
    // profile: посмотреть на сервере
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const ProfileContainer = connect(mapStateToProps, {})(Profile)

export default ProfileContainer