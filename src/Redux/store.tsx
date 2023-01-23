import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";


//Типизация друга
type FriendPropsType = {
    id: number,
    name: string,
    avatarUrl: string
}

//Типизация боковой панели
export type SideBarPropsType = {
    // navBar: {},
    friends: Array<FriendPropsType>
}
//Типизация поста
 type PostsPropsType = {
    id: number,
    message: string
    likeCounts: number
}
//Типизация страницы профиля
 type ProfilePagePropsType = {
    posts: PostsPropsType[],
    newPostMessage: string
}

//Типизация страницы диалогов
type DialoguesPagePropsType = {
    dialogues: Array<{ id: number, name: string }>,
    messages: Array<{ id: number, message: string }>,
    newMessage: string,
    onClickAddMessage: () => void,
    updateNewMessage: (newMessage:string) => void,
}

//Типизация APP
export type AppPropsType = {
    state: {
        sideBar: SideBarPropsType,
        dialoguePage: DialoguesPagePropsType,
        profilePage: ProfilePagePropsType,
    }
}

let store = {
    state: {
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: "Damir",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaKlbhUKTvXKSSQuiQrGQjkV24jEZFcSWEQ&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Julia",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJosZLWjSYge_zawNpQIuBc8MoRU0RFfIlXQ&usqp=CAU"
                },
                {
                    id: 3,
                    name: "Pudge",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kfbvoH-uH6yFQ_tEQt5LH38JJpPPWPFRDw&usqp=CAU"
                }
            ]
        },
        //блок информации для страницы Dialogues(массив диалогов, сообщений, хранилище для названия ного сообщения)
        dialoguePage: {
            dialogues: [
                {id: 1, name: "Damir"},
                {id: 2, name: "Julia"},
                {id: 3, name: "Evgenii"},
                {id: 4, name: "Silvester"},
                {id: 5, name: "Neo"},
            ],
            messages: [
                {id: 1, message: "Hi, what's up?"},
                {id: 2, message: "Im good.thanks?"},
                {id: 3, message: "Lets play overthrow?"},
                {id: 4, message: "Zeus is so weak"},
                {id: 5, message: "Razor is too OP"}
            ],
            newMessage: "Type something",
        },
        //блок информации для страницы Profile(массив с постами, хранилище для названия нового поста)
        profilePage: {
            posts: [
                {id: 1, message: "Hi, whats up?", likeCounts: 12},
                {id: 2, message: "Its my first post", likeCounts: 33}
            ],
            newPostMessage: "Enter new message",
        }
    },
    onChange() {
        console.log("State changed")
    },
    subscribe(callBack: () => void) {
        this.onChange = callBack
    },
    //метод диспатч в котором хранятся все методы, разбитые на редюсеры, для наших компонент
    dispatch(action: any) {
        store.state.profilePage = profileReducer(store.state.profilePage, action)
        store.state.dialoguePage = dialogsReducer(store.state.dialoguePage, action)
        store.state.sideBar = sidebarReducer(store.state.sideBar, action)
        store.onChange()
    }
}


export default store;
