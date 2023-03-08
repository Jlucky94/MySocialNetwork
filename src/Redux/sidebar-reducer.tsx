export type FriendPropsType = {
    id: number,
    name: string,
    avatarUrl: string
}
export type InitialStatePropsType = {
    friends: Array<FriendPropsType>
}
const initialState: InitialStatePropsType = {
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
}

const sideBarReducer = (state: InitialStatePropsType = initialState, action: {}): InitialStatePropsType => {
    return state
}
export default sideBarReducer;