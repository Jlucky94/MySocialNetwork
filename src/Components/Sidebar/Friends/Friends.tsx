import React from 'react';
import {Avatar} from "@material-ui/core";
import {InitialStatePropsType} from "../../../Redux/sidebar-reducer";

const Friends = (props:InitialStatePropsType) => {
    const FriendsBar = props.friends.map(f => <Avatar key={f.id} alt={f.name} src={f.avatarUrl}/>)
    return (
        <div>
            Friends
            {FriendsBar}
        </div>
    )
}
export default Friends;