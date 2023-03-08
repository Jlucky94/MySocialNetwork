import React, {useEffect} from 'react';
import Loader from "../common/Loader/Loader";
import {getUsersTC, InitialStatePropsType} from "../../Redux/users-reducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {compose} from "redux";
import withAuthRedirect from "../../HOCs/withAuthRedirect";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = () => {
    const usersPage = useAppSelector<InitialStatePropsType>(state => state.usersPage)
    const isFetching = useAppSelector<boolean>(state => state.usersPage.isFetching)
    const dispatch = useAppDispatch()
    useEffect(() => {
            dispatch(getUsersTC())
        }, [usersPage.currentPage, usersPage.totalItemsCount]
    )

    return (
        <div>
            {isFetching ? <Loader/> : null}
            <Paginator totalItemsCount={usersPage.totalItemsCount}
                       currentPage={usersPage.currentPage}
                       pageSize={usersPage.pageSize}
                       portionSize={10}
                       dispatch={dispatch}/>
            {
                usersPage.users.map(u => <User key={u.id} user={u}/>
                    )
            }
        </div>
    );
};

export default compose(withAuthRedirect)(Users);