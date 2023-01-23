import React, {useEffect} from 'react';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import axios from "axios";


const Profile = () => {
    // useEffect(() => {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
    //         props.setUserProfile(response.data)
    //     })
    // })
    return (
        <div>
            <div className={classes.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>
    )
};

export default Profile;