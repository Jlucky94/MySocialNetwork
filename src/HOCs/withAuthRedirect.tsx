import React, {Component, useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../Redux/redux-store";
import {InitialStatePropsType, setAuthUserData} from "../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import axios from "axios";


const withAuthRedirect = (Component: React.ComponentType) => {

    const RedirectComponent = () => {
        const data = useSelector<AppStateType, InitialStatePropsType>(state => state.auth)
        const dispatch = useAppDispatch()
        useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true
                }
            ).then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login,true))
            })
        }, [data.isAuth])
        if (!data.isAuth) return <Navigate to='/login'/>
        else return <Component/>
    }

    return RedirectComponent
}
export default withAuthRedirect