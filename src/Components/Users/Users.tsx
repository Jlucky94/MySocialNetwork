import React, {useEffect} from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import {Avatar} from "@material-ui/core";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from '../../images/user.png'
import Loader from "../Loader/Loader";
import {NavLink} from "react-router-dom";


const Users = (props: UsersPagePropsType) => {
    // const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    // const users1 = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount)
    // console.log(currentPage, users1)
    useEffect(() => {
        props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.usersPage.currentPage}&count=${props.usersPage.pageSize}`).then(response => {
            props.toggleFetching(false)
            props.setUsers(response.data.items)
            props.setTotalUsersCount(response.data.totalCount)
        })
    }, [props.usersPage.currentPage, props.usersPage.totalUsersCount])
    // const getUsers = () => {
    //     if (props.usersPage.users.length === 0) {
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.usersPage.currentPage}&count=${props.usersPage.pageSize}`).then(response => {
    //             props.setUsers(response.data.items)
    //             props.setTotalUsersCount(response.data.totalUsersCount)
    //             console.log(pagesCount)
    //
    //         })
    //     }
    // }
    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.usersPage.pageSize}`).then(response => {
        //         props.setUsers(response.data.items)
        //     }
        // )
    }
    const pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Loader
                isFetching={props.usersPage.isFetching}/>
            <div>
                {pages.map(p => <span key={p}
                                      onClick={() => onPageChanged(p)}
                                      className={props.usersPage.currentPage === p ? classes.selectedPage : ''}>{p}</span>)}
            </div>
            {/*<button onClick={getUsers}>Get Users</button>*/}
            {
                props.usersPage.users.map(u =>
                    <div key={u.id}>
                    <span>
                    <div>
                    <NavLink to={'/profile/' + u.id}>
                        <Avatar key={u.id} alt={u.name}
                                src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                    </div>
                    <div>
                    <button onClick={(e) => u.followed ? props.unFollow(u.id) : props.follow(u.id)}>
                {u.followed ? "Follow" : "Unfollow"}
                    </button>
                    </div>
                    </span>
                        <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                    </span>
                    </span>
                    </div>)
            }
        </div>
    );
};

export default Users;