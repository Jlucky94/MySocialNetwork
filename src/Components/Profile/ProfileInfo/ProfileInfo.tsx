import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfilePropsType} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: { profile: ProfilePropsType, status: string }) => {
    return (
        <div className={classes.descriptionBlock}>
            <h2>{props.profile.fullName}</h2>
            <img src={props.profile.photos.small} alt='avatar'/>
            <ProfileStatus status={props.status}/>
            <div className={classes.about}>
                {props.profile.aboutMe}
            </div>
            <div className={classes.job}>
                <span>В поиске работы: {props.profile.lookingForAJob ? "Ищу" : "Не ищу"}</span>
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>
            <div className={classes.contacts}>
                <a href={props.profile.contacts.facebook}>Facebook</a>
                <a href={props.profile.contacts.github}>Github</a>
                <a href={props.profile.contacts.vk}>VK</a>
                <a href={props.profile.contacts.twitter}>Twitter</a>
                <a href={props.profile.contacts.youtube}>YouTube</a>
                <a href={props.profile.contacts.website}>My website</a>
                <a href={props.profile.contacts.instagram}>Instagram</a>
            </div>
        </div>
    )
}


export default ProfileInfo;