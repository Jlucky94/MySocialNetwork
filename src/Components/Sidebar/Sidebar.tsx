import React from 'react';
import classes from './Sidebar.module.css'

import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";
import {SidebarPropsType} from "./SidebarContainer";


const Sidebar = (props: SidebarPropsType) => {
    return (
        <div className={classes.sidebar}>
            <Navbar/>
            <Friends friends={props.sideBar.friends}/>
        </div>

    )
}
export default Sidebar;