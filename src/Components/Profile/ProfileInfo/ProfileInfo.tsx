import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props: {}) => {
    return (
        <div className={classes.descriptionBlock}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sP73F3kERIiDXZBIro0Ga58H6vAHIEfopA&usqp=CAU"
                alt=""/>
            <div>ava + dis
            </div>
        </div>
    )
}


export default ProfileInfo;