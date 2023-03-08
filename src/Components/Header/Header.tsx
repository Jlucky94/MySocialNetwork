import React, {useEffect} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {logoutTC} from "../../Redux/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {getAuthUserDataTC} from "../../Redux/profile-reducer";

const Header = () => {
    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)
    const domainUserName = useAppSelector<string>(state => state.auth.data.login)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [isAuth])
    return (
        <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG6OFUu74ARmHSXk_A_9hEYmqy8814yq0LN5xjPRYPeXhh9reK3rWH2AbcSj8HW3LiLQ&usqp=CAU"
                alt=''/>
            {<div className={classes.loginBlock}>
                {isAuth ?
                    <div>
                        {domainUserName + ' - '}
                        <button onClick={() => dispatch(logoutTC())}>
                            Log out
                        </button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>}
        </header>
    );
};

export default Header;
