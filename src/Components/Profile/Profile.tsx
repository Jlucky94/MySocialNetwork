import React, {useEffect} from 'react';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useParams} from "react-router-dom";
import {getProfileTC, getStatusTC, InitialStatePropsType} from "../../Redux/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import MyPosts from "./My posts/MyPosts";
import withAuthRedirect from "../../HOCs/withAuthRedirect";
import {compose} from "redux";


const Profile = () => {
    const params = useParams()
    let userId = Number(params.userId)
    const profile = useAppSelector<InitialStatePropsType>(state => state.profilePage)
    const domainUserId = useAppSelector<number>(state => state.auth.data.userId)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (userId) {
            dispatch(getProfileTC(userId))
            dispatch(getStatusTC(userId))
        } else {
            dispatch(getProfileTC(domainUserId))
            dispatch(getStatusTC(domainUserId))
        }
    }, [userId])
    return (
        <div>
            <div className={classes.content}>
                <ProfileInfo
                    profile={profile.profile}
                    status={profile.status}
                />
                <MyPosts/>
            </div>
        </div>
    )
};

export default compose(withAuthRedirect)(Profile);