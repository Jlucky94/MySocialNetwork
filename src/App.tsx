import React, {useEffect} from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import UsersWithRedux from "./Components/Users/Users";
import Dialogues from "./Components/Dialogues/Dialogues";
import Login from "./Components/Login/Login";
import {useAppDispatch, useAppSelector} from "./Redux/redux-store";
import {initializeApp} from "./Redux/app-reducer";
import Loader from "./Components/common/Loader/Loader";


export const App = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector<boolean>(state => state.app.initialized)
    useEffect(() => {
        dispatch(initializeApp())
    }, [])
    return (
        initialized ?
            <div className="app-wrapper">
                <Header/>
                <SidebarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId"
                               element={<Profile/>}/>
                        <Route path="/profile/"
                               element={<Profile/>}/>
                        <Route path="/dialogues/*"
                               element={<Dialogues/>}/>
                        <Route path="/users"
                               element={<UsersWithRedux/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            :
            <Loader/>
    );
}

export default App;
