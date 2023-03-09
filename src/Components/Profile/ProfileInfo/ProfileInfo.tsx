import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css'
import {ProfilePropsType, updatePhotoTC, updateProfileTC} from "../../../Redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../images/user.png'
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props: { profile: ProfilePropsType, status: string }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const domainUserName = useAppSelector<string>(state => state.auth.data.login)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            dispatch(updatePhotoTC(e.currentTarget.files[0]))
        }
    }
    const onSubmit = (formData: any) => {
        dispatch(updateProfileTC(formData)).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <div className={classes.descriptionBlock}>
            <img className={classes.mainPhoto} src={props.profile.photos.small || userPhoto} alt='avatar'/>
            {props.profile.fullName === domainUserName && <input type="file" onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={props.status}/>
            {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                : <ProfileData profile={props.profile} domainUserName={domainUserName}
                               setEditMode={() => setEditMode(true)}/>
            }
        </div>
    )
}

const ProfileData = (props: { profile: ProfilePropsType, domainUserName: string, setEditMode: () => void }) => {
    const domainUserId = useAppSelector<number>(state => state.auth.data.userId)
    return <div>
        <h2>{props.profile.fullName}</h2>
        {props.profile.userId === domainUserId &&
            <div>
                <button onClick={props.setEditMode}>Edit</button>
            </div>}
        <div className={classes.about}>
            About me : {props.profile.aboutMe}
        </div>
        <div className={classes.job}>
            <span>В поиске работы: {props.profile.lookingForAJob ? "Ищу" : "Не ищу"}</span>
            <span>My professional skills : {props.profile.lookingForAJobDescription}</span>
        </div>
        <div className={classes.contacts}>
            <h3>Contacts</h3>
            {Object.keys(props.profile.contacts).map(key => {
                // @ts-ignore
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
        </div>
    </div>
}

const Contact = (props: { contactTitle: string, contactValue: string }) => {
    return <div>
        <b>{props.contactTitle} : </b><a className={classes.contact} href={props.contactValue}>{props.contactValue}</a>
    </div>
}

export default ProfileInfo;