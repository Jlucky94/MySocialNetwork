import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../../Redux/redux-store";
import {updateStatusTC} from "../../../Redux/profile-reducer";

const ProfileStatus = (props: { status: string }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(()=> {
        setStatus(props.status)
    },[props.status])
    const dispatch = useAppDispatch()
    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={() => setEditMode(true)}
                    >My status : {status ? status : "status"}</span>
                </div>}
            {editMode &&
                <div>
                    <input

                        autoFocus={true}
                        onChange={(e) => setStatus(e.currentTarget.value)}
                        onBlur={(e) => {
                            setEditMode(false)
                            dispatch(updateStatusTC(e.currentTarget.value))
                        }}
                        value={status} type="text"/>
                </div>}
        </div>
    );
};

export default ProfileStatus;