import React from 'react';
import {Avatar} from "@material-ui/core";
import userPhoto from '../../images/user.png'
import {NavLink} from "react-router-dom";
import {followTC, InitialStatePropsType, unfollowTC, UserPropsType} from "../../Redux/users-reducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";


const User = (props:{user: UserPropsType}) => {
    const usersPage = useAppSelector<InitialStatePropsType>(state => state.usersPage)
    const dispatch = useAppDispatch()

    return (
        <div>
                    <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <Avatar key={props.user.id} alt={props.user.name}
                                    src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                            />
                        </NavLink>
                        </div>

                    <div>
                    <button disabled={usersPage.followingIsFetching.some(id => id === props.user.id)}
                            onClick={() => {
                                if (props.user.followed) {
                                    dispatch(unfollowTC(props.user))
                                } else {
                                    dispatch(followTC(props.user))
                                }
                            }
                            }>
                {props.user.followed ? "Unfollow" : "Follow"}
                    </button>
                    </div>
                    </span>
            <span>
                    <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                    </span>
                    <span>
                    <div>{"props.user.location.city"}</div>
                    <div>{"props.user.location.country"}</div>
                    </span>
                    </span>
        </div>
    )
}
export default User;