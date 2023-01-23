export const NEW_MESSAGE_UPDATE = 'NEW-MESSAGE-UPDATE';
export const ADD_MESSAGE = 'ADD-MESSAGE';

type addMessageActionType = ReturnType<typeof addMessageActionCreator>
type updateNewMessageActionType = ReturnType<typeof updateNewMessageActionCreator>

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageActionCreator = (message: string) =>
    ({type: NEW_MESSAGE_UPDATE, message} as const)

type DialoguePropsType = {
    id: number,
    name: string
}
type MessagePropsType = {
    id: number,
    message: string
}
export type InitialStatePropsType = {
    dialogues: Array<DialoguePropsType>,
    messages: Array<MessagePropsType>,
    newMessage: string,
}

const initialState: InitialStatePropsType = {
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
}
type ActionType = addMessageActionType | updateNewMessageActionType

const dialogsReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 6, message: state.newMessage}]
            }
        }
        case NEW_MESSAGE_UPDATE:
            return {
                ...state,
                newMessage: action.message
            }
        default:
            return state
    }
}
export default dialogsReducer;