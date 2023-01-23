import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguePage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage:usersReducer
})
let store = createStore(rootReducer)



export default store;