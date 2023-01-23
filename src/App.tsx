import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialoguesContainer from "./Components/Dialogues/DialoguesContainer";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import UsersContainer from "./Components/Users/UsersContainer";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <SidebarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile/>}/>
                    <Route path="/dialogues/*"
                           element={<DialoguesContainer/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
